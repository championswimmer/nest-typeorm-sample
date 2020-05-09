import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { mockArticleRepositoryProvider } from '../../entities/article.entity';

describe('Articles Controller', () => {
  let controller: ArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [ArticlesService, mockArticleRepositoryProvider]
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should fetch all articles', async () => {
    expect(await controller.getAllArticles()).toEqual([{"id": 1, "title": "XXX"}]);
  });
});
