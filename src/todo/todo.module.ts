import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoController } from './controllers';
import { TodoEntity } from './entities';
import { TodoService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
