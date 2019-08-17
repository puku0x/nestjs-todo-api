import {
  Controller,
  Body,
  Param,
  HttpCode,
  Post,
  Get,
  Put,
  Delete,
} from '@nestjs/common';

import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { TodoService } from '../services';

@Controller('v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @HttpCode(201)
  create(@Body() todoDto: CreateTodoDto) {
    return this.todoService.create(todoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() todoDto: UpdateTodoDto) {
    return this.todoService.update(id, todoDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: number) {
    return this.todoService.remove(id);
  }
}
