import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleCreateDto } from './articles.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getAllArticles () {
    return await this.articlesService.getAllArticles()
  }

  @Post()
  @HttpCode(201)
  async createArticle(@Body() createArticleBody: ArticleCreateDto) {
    const result = await this.articlesService.createArticle(createArticleBody)
    return result.identifiers
  }

}
