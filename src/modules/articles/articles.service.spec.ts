import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { mockArticleRepositoryProvider } from '../../entities/article.entity';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService, 
        mockArticleRepositoryProvider
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch all articles', async () => {
    expect(await service.getAllArticles()).toEqual([{"id": 1, "title": "XXX"}]);
  });

  it('should create article', async () => {
    expect(await (await service.createArticle({title: 'xxx'})).identifiers).toEqual([{id: 1}])
  });
});
