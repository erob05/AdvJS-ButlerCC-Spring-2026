"use strict";

$(document).ready( () => {
	const textbox = $('#task');
    $('#add_task').click(()=> {
        const task = textbox.val();

        if (task === "") {
            alert("Please enter a task.");
        } else {
            let tasks = localStorage.myTasks || "";  // "" is default
            localStorage.myTasks = tasks.concat(task, "\n");
        }
        textbox.val("");
        $('#task_list').val(localStorage.myTasks);
        textbox.focus();
    });
    $('#clear_tasks').click(() => {
        localStorage.removeItem('myTasks');
        $('#task_list').val("");
    });

    $('#task_list').val(localStorage.myTasks);
    textbox.focus();
});