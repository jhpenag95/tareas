export default (date) => {
    const dateElemnt = document.createElement("li");
    dateElemnt.classList.add("date");
    dateElemnt.innerHTML = date;
    return dateElemnt;
}