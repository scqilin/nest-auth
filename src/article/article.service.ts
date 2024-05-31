import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  list() {
    return {
        data: [
            {
            id: 1,
            title: 'Article 1',
            content: 'Content 1',
            },
            {
            id: 2,
            title: 'Article 2',
            content: 'Content 2',
            },
        ],
    }
  }
}
