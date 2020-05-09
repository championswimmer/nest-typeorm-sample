import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {

  async getAllArticles() {
    return "ALL ARTICLES" // TODO Actual json of all articles
  }

  
}
