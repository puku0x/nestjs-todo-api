import { IsString, IsBoolean, MaxLength } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @MaxLength(255)
  readonly text: string;

  @IsBoolean()
  readonly checked: boolean;
}
