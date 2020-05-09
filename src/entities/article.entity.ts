import { Entity, PrimaryGeneratedColumn, Column, Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Provider } from "@nestjs/common";


@Entity() 
export class Article {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({length: 140, nullable: false})
  title: string

  @Column('text')
  body?: string
}

const mockArticleRepository: Partial<Repository<Article>> = {
  find: async (): Promise<Article[]> => [{id: 1, title: 'XXX'}] 
}

export const mockArticleRepositoryProvider: Provider = {
  provide: getRepositoryToken(Article),
  useValue: mockArticleRepository
}