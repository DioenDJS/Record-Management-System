import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType('Collaborator')
export class CollaboratorDTO {

  @FilterableField()
  name: string;
  
  @FilterableField()
  CPF: string;
  
}
