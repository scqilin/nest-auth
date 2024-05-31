import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Public } from 'src/public';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // @Public()
  @Get()
  async list() {
    return this.articleService.list();
  }
}
