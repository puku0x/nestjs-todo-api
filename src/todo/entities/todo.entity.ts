import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column('text')
  text: string;

  @Column('boolean')
  checked = false;

  @CreateDateColumn({ type: 'timestamp' })
  readonly createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updatedAt?: Date;
}
