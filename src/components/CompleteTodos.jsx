import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ui>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ui>
    </div>
  );
};
