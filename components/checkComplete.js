/** check completado*/

const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add('far','fa-check-square','icon');
    i.addEventListener("click",(evento) =>  compleTask(evento, id));
    return i;
}

/**Activa o descativar check */
const compleTask = (evento, id) => {
    const elemento = evento.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle("completeIcon");
    elemento.classList.toggle('far');
    const task = JSON.parse(localStorage.getItem('task'));
    const index = task.findIndex((item) => item.id == id);
    task[index]['complete'] = !task[index]['complete'];
    localStorage.setItem('task', JSON.stringify(task));
}

export default checkComplete;