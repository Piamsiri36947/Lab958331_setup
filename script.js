const btn = document.getElementById("contactBtn");
const info = document.getElementById("contactInfo");

btn.addEventListener("click", function () {
  if (info.classList.contains("d-none")) {
    info.classList.remove("d-none");               
    btn.textContent = "Hide Contact";             
    btn.classList.remove("btn-outline-primary");   
    btn.classList.add("btn-success");              
  } else {
    info.classList.add("d-none");                 
    btn.textContent = "View Contact";              
    btn.classList.remove("btn-success");           
    btn.classList.add("btn-outline-primary");      
  }
});