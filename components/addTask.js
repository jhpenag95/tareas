
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTask } from "./redTask.js";



//función para agregar a la lista
export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    /**Seleccionado input*/
    const value = input.value;
    const date = calendar.value;
    //datos calendario
    const dateFormat = moment(date).format('DD/MM/YYYY');//funciona con el npm
    if (value == "" || date =="" ) {
        return;
    }

       
    input.value = '';
    calendar.value = '';

    const complete = false;

     //Almacenar datos
     const  taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()
    }

    list.innerHTML = '';
    
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    taskList.push(taskObj);
    localStorage.setItem("task", JSON.stringify(taskList));

    displayTask();
}





export const createTask =  ({value, dateFormat, complete, id}) => {

    const task = document.createElement("li");
         /**Asigando clase para que tome el estilo */
         task.classList.add("card");
   


    //Mostrar Icono check
    const taskContent = document.createElement("div");
        


    //activar los checks 
    const check = checkComplete(id);

    if (complete) {
        check.classList.toggle('fas');
        check.classList.toggle("completeIcon");
        check.classList.toggle('far');
    }

    //Mostrar texto Span
    const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);


    //Agregar data Fecha 
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;

    /**Insertando el dato */
    //task.innerHTML = content;
    /**colocar un nodo hijo dentro del nodo padre */
    task.appendChild(taskContent);
    
    //Impremir o mostrar fecha 
    task.appendChild(dateElement);

    //Mostrar Icono borrar
    task.appendChild(deleteIcon(id)); 
    return task;
};
