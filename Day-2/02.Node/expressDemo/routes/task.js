var tasks = [];

module.exports = {
	list : function(req,res){
		res.render("tasks/list", { tasks : tasks });
	},
	add : function(req,res){
		var newTaskId = tasks.length === 0 ? 1 : tasks[tasks.length-1].id + 1;
		var newTask = {
			id : newTaskId,
			name : req.body.taskName,
			isCompleted: false
		};
		tasks.push(newTask);
		res.render("tasks/list",{ tasks : tasks});
	},
	toggleCompletion : function(req,res){
		var items = tasks.filter(function(t) { return t.id === parseInt(req.body.taskId);});
		if (items.length > 0){
			var task = items[0];
			task.isCompleted = !task.isCompleted;
		}
		res.write(JSON.stringify({}));
		//res.statusCode = 200;
		res.end();
	},
	removeCompleted : function(req,res){
	    for(var i=tasks.length-1;i>=0;i--)
	    	if (tasks[i].isCompleted)
				tasks.splice(i,1);
		res.render("tasks/list",{ tasks : tasks});	
	}
}