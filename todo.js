let todos = [];
const todoJSON = localStorage.getItem('todos');
if (todoJSON != null) {
  todos = JSON.parse(todoJSON);
}

const filters = {
  searchText: '',
  hideCompleted: false
};

//seartch
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredTodos = filteredTodos.filter(function(todo) {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  //incomplete todo
  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  //render todo each time
  document.querySelector('#todos').innerHTML = '';

  //incomplete todo list
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  //filtering filterd search and appending to new element
  filteredTodos.forEach(function(todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
  });
};

//get new vale all time
renderTodos(todos, filters);

document
  .querySelector('#hide-completed')
  .addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });

//search text event listner
document.querySelector('#searchtext').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//adding item to the list
document.querySelector('#new-todo').addEventListener('submit', function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  });

  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});
