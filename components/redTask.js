import { createTask } from "./addTask.js";
import { uniqueDate, orderDate } from "../services/date.js";
import dateElement from "./dateElement.js";

export const displayTask = ()=> {
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const dates = uniqueDate(taskList);
    orderDate(dates);

    dates.forEach(date => {
        const dateMoment =moment(date, "DD/MM/YYYYY");
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYYY");
            const diff = dateMoment.diff(taskDate);
            if (diff == 0) {
                list.appendChild(createTask(task));
            }
        });
    })


    
}