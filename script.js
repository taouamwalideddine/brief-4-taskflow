let taskIdCounter = 0;
let currentTask = null;
// function for opening the pop up menu
function openTaskModal() {
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
  document.getElementById('taskDueDate').value = '';
  document.getElementById('taskPriority').value = 'P1';
  document.getElementById('taskStatus').value = 'todo';
  document.getElementById('deleteTask').classList.add('hidden');
  document.getElementById('applyChanges').onclick = () => addTask();
  document.getElementById('taskModal').classList.remove('hidden');
  currentTask = null;
}
// function for adding new tasks using the pop up menu

function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const dueDate = document.getElementById('taskDueDate').value;
  const priority = document.getElementById('taskPriority').value;
  const status = document.getElementById('taskStatus').value;
// condition for  checking if the task title is empty

  if (!title) {
    document.getElementById('titleWarning').classList.remove('hidden');
    return;
  } else {
    document.getElementById('titleWarning').classList.add('hidden');
  }
//for creating nex  task element

  const taskElement = currentTask || document.createElement("div");
  taskElement.className = `task p-2.5 m-1.25 rounded-lg border ${getPriorityColor(priority)}`;
  taskElement.id = `task-${taskIdCounter++}`;
  taskElement.innerHTML = `
    <div class="font-bold">${title}</div>
    <div class="text-sm w-full break-all">${description}</div>
    <div class="text-xs text-white">Due: ${dueDate}</div>
    <button class="bg-black text-white px-2 mt-2 rounded-lg" onclick="openEditModal('${taskElement.id}')">Modify</button>
  `;
// for placing tasks in thier chosen lists
  const targetColumn = status === 'todo' ? 'tasksInTodo' :
                       status === 'inProgress' ? 'tasksInProgress' : 'tasksDone';
  document.getElementById(targetColumn).appendChild(taskElement);

  closeModal();
}
// function for priority color
function getPriorityColor(priority) {
  return priority === 'P1' ? 'bg-red-600' : priority === 'P2' ? 'bg-green-800' : 'bg-yellow-600';
}
// function for editing existing modal
function openEditModal(taskId) {
  currentTask = document.getElementById(taskId);
  document.getElementById('taskTitle').value = currentTask.querySelector('.font-bold').textContent;
  document.getElementById('taskDescription').value = currentTask.querySelector('.text-sm').textContent;
  document.getElementById('taskDueDate').value = currentTask.querySelector('.text-xs').textContent;
  document.getElementById('deleteTask').classList.remove('hidden');

  document.getElementById('applyChanges').onclick = () => addTask();

  document.getElementById('taskModal').classList.remove('hidden');
}
// function for closing pop ups
function closeModal() {
  document.getElementById('taskModal').classList.add('hidden');
  currentTask = null;
}
// function for deleting tasks on clik
function deleteTask() {
  if (currentTask) {
    currentTask.remove();
    closeModal(); 
  }
}
