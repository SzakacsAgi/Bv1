function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
  return parent.appendChild(el);
  }

  const ul = document.getElementById('insert');
  const url = 'https://dummy.restapiexample.com/api/v1/employees';

  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {

  let employees = data.data;
  console.log(employees);
  return employees.map(function(employe) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `${employe.id} ${employe.employee_name} ${employe.employee_salary}`;
    append(li, span);
    append(ul, li);
  })
  })
  .catch(function(error) {
  console.log(error);
  });