
import { addTask } from "./components/addTask.js";
import { displayTask } from "./components/redTask.js";

/**Seleccionado boton */
const btn = document.querySelector('[data-form-btn]');



/**Acción deboton al hacer click */
btn.addEventListener('click', addTask);

displayTask();



