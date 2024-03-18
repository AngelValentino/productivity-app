import { generateTodosHTML, getFormData } from '../main.js';

export const todos = JSON.parse(localStorage.getItem('todos')) || [];

export function addTodo(method, form, id, todoData) {
  if (form) {
    const todoData = getFormData(form, true, id);
    todos[method](todoData);
  } 
  else {
    todos[method](todoData);
  }
  localStorage.setItem('todos', JSON.stringify(todos));
  generateTodosHTML();
}

export function deleteTodo(targetId) {
  todos.forEach((todo) => {
    if (todo.id === targetId) {
      todos.splice(todos.indexOf(todo), 1);
    }
  })
  generateTodosHTML();
  localStorage.setItem('todos', JSON.stringify(todos));
}