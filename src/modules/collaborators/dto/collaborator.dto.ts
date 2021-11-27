import { FilterableField } from "@nestjs-query/query-graphql";
import { ID, ObjectType } from "@nestjs/graphql";

@ObjectType('Collaborator')
export class CollaboratorDTO {

  @FilterableField(() => ID)
  id?: string;

  @FilterableField()
  name: string;
  
  @FilterableField()
  CPF: string;

  @FilterableField()
  createdAt?: Date;

  @FilterableField()
  updatedAt?: Date;

  @FilterableField()
  deletedAt?: Date;
  
}
