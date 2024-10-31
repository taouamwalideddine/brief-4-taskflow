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