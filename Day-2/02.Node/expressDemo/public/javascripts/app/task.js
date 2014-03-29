$(function(){
	$("#ulTaskList").on("click","li",function(){
		var id = $(this).attr("task-id");
		var $that = $(this);
		$.ajax({
			url : "/tasks/toggleCompletion",
			type : "post",
			dataType : "json",
			contentType : "application/json",
			data : JSON.stringify({taskId : id}),
			success : function(){
				$that.toggleClass("completed");
			}
		});
	});
})