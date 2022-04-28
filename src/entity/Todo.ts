import { TodoList } from './TodoList';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  todolist_id: number;

  @Column()
  title: string;

  @Column()
  status: boolean;

  @Column()
  task_text: string;
}
