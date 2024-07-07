
const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

// For Buttone Click
function addTask(){
    if(inputBox.value === ''){
        alert("You maste write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';

    saveData();
};

// For Checked Or Unchecked
listContainer.addEventListener("click", function(e){
    if( e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
},false);

// Save Data in Browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show data after colse Browser

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();