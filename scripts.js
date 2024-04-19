//
const taskInput = document.getElementById('task-input');
const createTaskBtn = document.getElementById('create-task-btn');
const taskListUL = document.getElementById('task-list');

console.log(taskInput);
console.log(createTaskBtn);
console.log(taskListUL);

createTaskBtn.addEventListener('click',function(e) { //! Must have ATLEAST two , can see in console that button is clicked!!!
console.log('Button clicked');
});
document.body.addEventListener('mouseover', function(){
console.log('moving....');
})