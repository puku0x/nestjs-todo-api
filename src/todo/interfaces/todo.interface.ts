export interface Todo {
  readonly id?: number;
  text: string;
  checked: boolean;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}
