window.onload = function ()
{
    
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("value", JSON.stringify({key: "RMCode", value : "12484", text : "Sanket"}));
}

function drop(ev) {
    ev.preventDefault();
    var data = JSON.parse(ev.dataTransfer.getData("value"));
    let div = document.createElement("div")
    div.style = "background-color:grey"
    let span = document.createElement("span")
    span.innerHTML = "RM Code = " + data.text;
    div.appendChild(span)

    ev.target.appendChild(div);
}