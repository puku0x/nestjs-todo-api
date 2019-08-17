import { IsString, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MaxLength(255)
  readonly text: string;
}
