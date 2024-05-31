import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ){}

  async register(body: any) {
      // 检查用户名是否存在
      const existUser = await this.userRepository.findOneBy({username: body.username});
      if(existUser){
        return {
          message: '用户名已存在'
        }
      }
      // 检查邮箱是否存在
      const existEmail = await this.userRepository.findOneBy({email: body.email});
      if(existEmail){
        return {
          message: '邮箱已存在'
        }
      }
      const user = new User();
      user.username = body.username;
      user.email = body.email || '';
      user.password = body.password;
      return this.userRepository.save(user).then((res) => {
        return res.id;
      }).catch(err=>{
        return err
      })
  }

  //login
  async login(body: any) {
    const existUser = await this.userRepository.findOneBy({username: body.username});
    if(!existUser){
      return {
        message: '用户不存在'
      }
    }
    if(existUser.password !== body.password){
      return {
        message: '密码错误'
      }
    }
    return {
      message: '登录成功'
    }
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(username: string) {
    return this.userRepository.findOneBy({username: username});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
