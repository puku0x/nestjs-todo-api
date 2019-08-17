import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { TodoEntity } from '../entities';
import { Todo } from '../interfaces';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todoRepository.findOneOrFail(id).catch(() => {
      throw new NotFoundException();
    });
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const entity = this.todoRepository.create(todoDto);
    return await this.todoRepository.save(entity);
  }

  async update(id: number, todoDto: UpdateTodoDto) {
    const todo = await this.findOne(id);
    return this.todoRepository.save({
      ...todo,
      text: todoDto.text,
      checked: todoDto.checked,
    });
  }

  async remove(id: number): Promise<void> {
    const todo = await this.findOne(id);
    this.todoRepository.delete(todo.id);
  }
}
