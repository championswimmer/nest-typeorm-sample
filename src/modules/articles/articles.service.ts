import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../../entities/article.entity';
import { ArticleCreateDto } from './articles.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>
  ) {}

  async getAllArticles(): Promise<Article[]> {
    return await this.articleRepository.find()
  }

  async createArticle(articleCreateDto: ArticleCreateDto) {
    return await this.articleRepository.insert(articleCreateDto)
  }
  
}
