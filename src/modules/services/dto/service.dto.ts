import { FilterableField, FilterableOffsetConnection } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
@ObjectType('Service')
export class ServiceDTO extends BaseDTO{

  @FilterableField()
  name: string;

  @FilterableField()
  expectedDeliveryDate: Date;
  
}
