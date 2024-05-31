import { SetMetadata } from '@nestjs/common';
// 定义一个常量，用于标记是否是公共接口
export const IS_PUBLIC_KEY = 'isPublic';
// 导出一个装饰器，用于设置元数据
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);