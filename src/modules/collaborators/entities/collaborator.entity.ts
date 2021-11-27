import { Column, Entity } from 'typeorm';

@Entity()
export class Collaborator {

  @Column()
  name: string;

  @Column({unique:true})
  CPF: string;
}
