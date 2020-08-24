//Business Logic for To-DO List
function ToDoList() {
  this.tasks = [];
  this.currentId = 0
}

ToDoList.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}

ToDoList.prototype.findTask = function(id) {
  for (i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

ToDoList.prototype.deleteTask = function(id) {
  for (i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
      }
    }
  };
  return false;
}

function Task(chore, location, jobSpecific) {
  this.chore = chore;
  this.location = location;
  this.jobSpecific = jobSpecific;
}

Task.prototype.jobName = function() {
  return this.chore + " " + jobSpecific;
}



