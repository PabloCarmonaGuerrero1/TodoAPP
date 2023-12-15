import { useState } from 'react';
import Formulario from './Formulario';
export const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, description, priority, state } = todo;

  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <li className='list-group-item'>
      <div className="d-flex justify-content-between align-items-start">
        {editing ? (
          <Formulario
            editedTodo={todo}
            editTodo={(updatedTodo) => {
              updateTodo(id, updatedTodo);
              setEditing(false);
            }}
          />
        ) : (
          <div>
            <h5 className={state && 'completada'}>{title}</h5>
            <p className={state && 'completada'}>{description}</p>
            <div className='d-flex'>
              <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger mr-2'>
                Eliminar
              </button>
              <button onClick={handleEditClick} className='btn btn-sm btn-warning mr-2'>
                Editar
              </button>
              <button onClick={() => updateTodo(id)} className='btn btn-sm btn-primary'>
                Actualizar Estado
              </button>
            </div>
          </div>
        )}
        <span className="badge badge-primary">{priority && 'prioridad'}</span>
      </div>
    </li>
  );
};
