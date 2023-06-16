const userInput = document.querySelector(".userInput");
const submitButton = document.querySelector(".icon-holder");
const form = document.querySelector("form")


const all = document.querySelector(".all");
const complete = document.querySelector(".complete");
const incomplete = document.querySelector(".incomplete");

let todoTask = []


complete.addEventListener("click", (e) => {

    all.classList.remove("active")
    incomplete.classList.remove("cancel")

    complete.classList.add("completes")

    todoTask.forEach(element => {

        if(!element.task.classList.contains("complete")){

            element.task.style.display = "none"
        }else{
            element.task.style.display = "flex"

        }
    })
})
all.addEventListener("click", (e) => {
    all.classList.add("active")
    incomplete.classList.remove("cancel")
    complete.classList.remove("completes")

    todoTask.forEach(element => {

        element.task.style.display = "flex"

    })
})
incomplete.addEventListener("click", (e) => {
    all.classList.remove("active")
    incomplete.classList.add("cancel")

    complete.classList.remove("completes")

    todoTask.forEach(element => {

        if(element.task.classList.contains("complete")){

            element.task.style.display = "none"
        }else{
            element.task.style.display = "flex"
            element.task.style.backgroundColor = "#E45A5A " ;

        }
    })
})

submitButton.addEventListener("click", (e) =>{

        const user = userInput.value;
        
        if(user.trim() === ""){
            alert("Please enter an input");
            return;
        }
        taskMaker(user)
        userInput.value = "";
    }
)

const taskMaker = (userinput) => {
    const div_task = document.createElement("div");
    div_task.setAttribute("class","task");


    const div_Inputs = document.createElement("div");
    div_Inputs.setAttribute("class","inputsss");
    const input_Lolskie = document.createElement("input");
    input_Lolskie.setAttribute("class","lolskie");
    input_Lolskie.setAttribute("type","checkbox");
    

    const label = document.createElement("label");
    label.innerText = userinput;


    const div_ediranddelete = document.createElement("div");
    div_ediranddelete.setAttribute("class","ediranddelete");

    const div_edit = document.createElement("div");
    div_edit.setAttribute("class","edit");
    div_edit.innerHTML = `   <svg   class="edit-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5875 27H6.00001C5.73479 27 5.48044 26.8946 5.2929 26.7071C5.10536 26.5196 5.00001 26.2652 5.00001 26V20.4125C4.99955 20.2826 5.02471 20.154 5.07404 20.0339C5.12338 19.9137 5.19591 19.8045 5.28751 19.7125L20.2875 4.7125C20.3806 4.61801 20.4915 4.54298 20.6138 4.49176C20.7361 4.44055 20.8674 4.41417 21 4.41417C21.1326 4.41417 21.2639 4.44055 21.3862 4.49176C21.5085 4.54298 21.6195 4.61801 21.7125 4.7125L27.2875 10.2875C27.382 10.3805 27.457 10.4915 27.5082 10.6138C27.5595 10.7361 27.5858 10.8674 27.5858 11C27.5858 11.1326 27.5595 11.2639 27.5082 11.3862C27.457 11.5085 27.382 11.6194 27.2875 11.7125L12.2875 26.7125C12.1955 26.8041 12.0863 26.8766 11.9661 26.926C11.846 26.9753 11.7174 27.0005 11.5875 27Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 8L24 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `;



    const div_delete = document.createElement("div");
    div_delete.setAttribute("class","delete");
    div_delete.innerHTML = `                            <svg class="delete-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27 7H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 13V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19 13V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M25 7V26C25 26.2652 24.8946 26.5196 24.7071 26.7071C24.5196 26.8946 24.2652 27 24 27H8C7.73478 27 7.48043 26.8946 7.29289 26.7071C7.10536 26.5196 7 26.2652 7 26V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 7V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H13C12.4696 3 11.9609 3.21071 11.5858 3.58579C11.2107 3.96086 11 4.46957 11 5V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


    
    div_ediranddelete.append(div_edit);
    div_ediranddelete.append(div_delete);

    div_Inputs.appendChild(input_Lolskie);
    div_Inputs.appendChild(label);

    
    div_task.appendChild(div_Inputs);
    div_task.appendChild(div_ediranddelete);
    todoTask.push({
        task: div_task,
        isComplete: false
    })
    form.appendChild(div_task);



    input_Lolskie.addEventListener("click", e => {
        div_task.classList.toggle("complete")
        if(div_task.classList.contains("complete")){
            div_task.style.backgroundColor = "#5AE478";
        }else{
            div_task.style.backgroundColor = "#E45A5A ";
        }
    })
    div_delete.addEventListener("click", (e) => {

        e.target.parentNode.parentNode.parentNode.remove()
      
    })
    div_edit.addEventListener("click", (e) => {
        const modal = document.createElement("section");
        modal.setAttribute("class","modal")

        const textarea = document.createElement("textarea");
        textarea.innerText = userinput
        console.log(userinput)
         
        const sett = document.createElement("div");
        sett.setAttribute("class","sett")

        const update = document.createElement("button");
        update.setAttribute("class","update")
        update.innerText = "UPDATE"

        const cancel = document.createElement("button");
        cancel.setAttribute("class","cancel")
        cancel.innerText = "CANCEL"
      
        sett.append(cancel)
        sett.append(update)
        modal.append(textarea)
        modal.append(sett)
        window.scrollTo(0, 0);
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("body").appendChild(modal);

        cancel.addEventListener("click", (e) => {
            document.querySelector("body").style.overflow = "scroll";
            e.target.parentNode.parentNode.remove();
        })

        update.addEventListener("click", (e) => {
              
            label.innerText = textarea.value;
            document.querySelector("body").style.overflow = "scroll";
            e.target.parentNode.parentNode.remove();

        })
    })
    
}