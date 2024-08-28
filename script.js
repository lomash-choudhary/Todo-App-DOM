
let todos = []
  
function addtodo(){
  todos.push({
    title: document.getElementById("inp").value
  })
  render();
}

function deletetodo(index){
  todos.splice(index,1);
  render();
}

function component(todo,index){
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class","append-div");
  const newHeading = document.createElement("h4");
  const newButton = document.createElement("button");
  newButton.innerHTML = "delete";
  newButton.setAttribute("onclick", "deletetodo(" + index + ")");
  newButton.setAttribute("class","new-added-todo-button")
  newHeading.innerHTML = todo.title;
  newDiv.appendChild(newHeading);
  newDiv.appendChild(newButton);
  return newDiv;
}

function render(){
  document.querySelector("#alltodos").innerHTML = '';
  for(let i = 0; i < todos.length; i++){
    const element = component(todos[i],i);
    document.getElementById("alltodos").appendChild(element);
  }
}