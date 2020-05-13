import { Entity, PrimaryGeneratedColumn, Column, Repository, InsertResult } from "typeorm";
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
  find: async (): Promise<Article[]> => [{id: 1, title: 'XXX'}],
  insert: async(): Promise<InsertResult> => ({
    generatedMaps: [ { id: 1} ],
    identifiers: [ { id: 1 }],
    raw: null
  }) 
}

export const mockArticleRepositoryProvider: Provider = {
  provide: getRepositoryToken(Article),
  useValue: mockArticleRepository
}