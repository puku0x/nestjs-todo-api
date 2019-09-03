import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoController } from './controllers';
import { TodoEntity } from './entities';
import { TodoService } from './services';
import { TodorResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService, TodorResolver],
  controllers: [TodoController],
})
export class TodoModule {}
