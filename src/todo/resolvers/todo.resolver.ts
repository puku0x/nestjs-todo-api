import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TodoService } from '../services';

@Resolver('Todo')
export class TodorResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query()
  async todos() {
    return await this.todoService.findAll();
  }

  @Query()
  async todo(@Args('id') id: number) {
    return await this.todoService.findOne(id);
  }

  @Mutation()
  async createTodo(@Args('text') text: string) {
    return await this.todoService.create({ text });
  }

  @Mutation()
  async updateTodo(
    @Args('id') id: number,
    @Args('text') text: string,
    @Args('checked') checked: boolean,
  ) {
    return await this.todoService.update(id, { text, checked });
  }

  @Mutation()
  async removeTodo(@Args('id') id: number) {
    return await this.todoService.remove(id);
  }
}
