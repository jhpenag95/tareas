import { displayTask } from "./redTask.js";


/**Borrar dato */
const deleteIcon = (id) => {
    const i = document.createElement('i');
    i.classList.add('far','fa-trash-alt','trashIcon','icon');
    i.addEventListener("click",() => deletetask (id));
    return i;
}

/**Eliminar Elemento */
const deletetask = (id) => {
    const li = document.querySelector("[data-list]");
    const task = JSON.parse(localStorage.getItem("task"));
    const index = task.findIndex((item) => item.id == id);
    task.splice(index,1);
    li.innerHTML = '';
    localStorage.setItem("task", JSON.stringify(task));

    displayTask();
}

export default deleteIcon;