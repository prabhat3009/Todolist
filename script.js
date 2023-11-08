const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const input = document.getElementById("input-box");

function addtask() {
    if (inputbox.value === '') {
        alert("You must write something..");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showData() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showData();

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});
function editing(liTag) {
    // let liContent = liTag.querySelector("span");

    let inputt = document.createElement("input");
    inputt.type = "text";
    inputt.value = liContent.textContent;
    liTag.append(inputt);
    inputt.focus();
    inputt.addEventListener("blur", () => {
        liContent.innerHTML = inputt.value;
        inputt.remove();
    });
}
