import React from 'react'
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoList.css';


export default function TodoList({ todos, onDelete }) {
    return (
      <ul>
        <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={300} classNames="todo">
              <TodoItem todo={todo} onDelete={onDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    );
  }
  