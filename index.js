import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t WELL COME IN FAR6-TODO-LIST \n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: ["Add Task", "Delete Task", "Updated Task", "View Task", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Task") {
            await viewTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function to add new task in the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            messsage: "enter your new task :"
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task}task added successfuly in todo-list`);
};
// function to view all todo tasks
let viewTask = () => {
    console.log("\n your todo-list: \n ");
    todolist.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
};
// function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no.`of the task you want to delete",
        }
    ]);
    let deleteTask = todolist.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task has been delete successfuly from todo-list\n `);
};
// funtion to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no.`of the task you want to up-date:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task name:",
        }
    ]);
    todolist[update_task_index.index] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index}updated successfully[for update list check option:]`);
};
main();
