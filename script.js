let taskIdCounter = 0;
let currentTask = null;

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
function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;
  const dueDate = document.getElementById('taskDueDate').value;
  const priority = document.getElementById('taskPriority').value;
  const status = document.getElementById('taskStatus').value;

  if (title) {
    const taskElement = currentTask || document.createElement("div");
    taskElement.className = `task p-2.5 m-1.25 rounded-lg border ${getPriorityColor(priority)}`;
    taskElement.id = `task-${taskIdCounter++}`;
    taskElement.innerHTML = `
     <div class="w-full">

      <h3 class="font-bold">${title}</h3>
      <p class="break-words">test ${description}</p>
      <p class="text-xs text-gray-600">Due: ${dueDate}</p>
      <button class="bg-orange-500 text-white px-2 mt-2 rounded" onclick="openEditModal('${taskElement.id}')">Modify</button>

     </div>
    `;

    const targetColumn = status === 'todo' ? 'tasksInTodo' :
                         status === 'inProgress' ? 'tasksInProgress' : 'tasksDone';
    document.getElementById(targetColumn).appendChild(taskElement);

    closeModal();
  }
}
function getPriorityColor(priority) {
  return priority === 'P1' ? 'bg-red-300' : priority === 'P2' ? 'bg-green-800' : 'bg-yellow-600';
}
function closeModal() {
  document.getElementById('taskModal').classList.add('hidden');
  currentTask = null;
}