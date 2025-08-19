import React from 'react';

const TodoItem: React.FC<{ todo: { id: number; text: string; completed: boolean } }> = ({ todo }) => {
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between" style={{ backgroundColor: '#f4f6f7' }}>
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.completed}
          readOnly
        />
        {todo.completed ? <s>{todo.text}</s> : todo.text}
      </div>
      <div>
        <a href="#!" className="text-info" title="Sửa công việc">
          <i className="fas fa-pencil-alt me-3"></i>
        </a>
        <a href="#!" className="text-danger" title="Xóa công việc">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </li>
  );
};

const AddTodoForm: React.FC = () => {
  return (
    <form className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input type="text" id="form2" className="form-control" />
        <label className="form-label" htmlFor="form2">Thêm công việc</label>
      </div>
      <button type="submit" className="btn btn-info ms-2">Thêm</button>
    </form>
  );
};

const TabNavigation: React.FC = () => {
  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active">Tất cả công việc</a>
      </li>
    </ul>
  );
};

const TodoList: React.FC = () => {
  const todos = [
    { id: 1, text: "Cras justo odio", completed: true },
    { id: 2, text: "Cras justo odio", completed: false }
  ];

  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const TodoListIndex: React.FC = () => {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
        rel="stylesheet"
      />
      
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: 'center', marginBottom: '40px' }}>Quản lý công việc</h3>
                  <AddTodoForm />
                  <TabNavigation />
                  <TodoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoListIndex;