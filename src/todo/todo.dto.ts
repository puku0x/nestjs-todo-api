export interface CreateTodoDto {
  readonly text: string;
}

export interface UpdateTodoDto {
  readonly text: string;
  readonly checked: boolean;
}
