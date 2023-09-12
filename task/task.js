const input = document.querySelector(".kavi_text");
const addbtn = document.querySelector(".add_button");
const part = document.querySelector(".info");
const clear = document.querySelector(".clear_button");

const dele_button =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>`;

const comleted_btn =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>`;

const notcomplete_btn = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>`;

 const list_item = [];

 let show = (title_task,completestutas) =>{
   if (title_task.trim() ===''){
      return;
   }
   list_item.push({
      title_task,
      completestutas
   });

   console.log(list_item);
 }
 addbtn.addEventListener("click", () =>{
    let newshit = input.value;
    show(newshit,false);
    show_display();
    input.value = '';
 });


 const show_display = () =>{
   if (list_item.length ===0) {
      title_task.textcontent = "Enter your message...!"
   }

   part.innerHTML = '';
   list_item.forEach(e => {
      const combtn =  document.createElement("button");
      combtn.classList.add("complete_task");
      combtn.innerHTML = `${
         !e.completestutas ? notcomplete_btn: comleted_btn}`;
      
      const tittle = document.createElement("section");
      tittle.classList.add ("task-tittle");
      tittle.textContent = e.title_task;


      const tasks = document.createElement("section");
      tasks.classList.add("tasks");
      tasks.appendChild(combtn);
      tasks.appendChild(tittle);
     
      part.appendChild(tasks);
      tasks.appendChild(del_btn);
   });
  };

  const del_btn = document.createElement("button");
del_btn.classList.add("del");
del_btn.innerHTML = dele_button;

del_btn.addEventListener("click", () => {
   list_item.splice(list_item.indexOf(e),1);
   show_display();
 });
  /** const combtn =  document.createElement("button");
      combtn.classList.add("complete_task");
      combtn.innerHTML = `${
      !e.completestutas ? notcomplete_btn: comleted_btn}`;

      const tasks = document.createElement("section");
      tasks.classList.add("tasks");
      tasks.appendChild(combtn);

      part_2.appendChild("tasks"); 
      
       del.addEventListener("click", () => {
   list_item.splice(list_item.indexOf(e),1);
   show_display();
 });

 */