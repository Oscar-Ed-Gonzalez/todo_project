import './styles.css';
import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml); // Esto se puede hacer cuando se usa solo un argumento
console.log(todoList.todos);