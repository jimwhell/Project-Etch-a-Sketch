const containerDiv = document.getElementById("container");

const firstDiv = document.createElement("div");
firstDiv.setAttribute("style", "width: 16px; height: 16px;");
firstDiv.classList.add("firstDiv");

const secondDiv = document.createElement("div");
secondDiv.setAttribute("style", "width: 16px; height: 16px;");
secondDiv.classList.add("secondDiv");


const thirdDiv = document.createElement("div");
thirdDiv.setAttribute("style", "width: 16px; height: 16px;");
thirdDiv.classList.add("thirdDiv");


const fourthDiv = document.createElement("div");
fourthDiv.setAttribute("style", "width: 16px; height: 16px;");
fourthDiv.classList.add("fourthDiv");


const fifthDiv = document.createElement("div");
fifthDiv.setAttribute("style", "width: 16px; height: 16px;");
fifthDiv.classList.add("fifthDiv");

containerDiv.appendChild(firstDiv);
containerDiv.appendChild(secondDiv);
containerDiv.appendChild(thirdDiv);
containerDiv.appendChild(fourthDiv);
containerDiv.appendChild(fifthDiv);

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        switch (div.className) {
            case "firstDiv":
                div.style.backgroundColor = "blue";
                break;
            case "secondDiv":
                div.style.backgroundColor = "red";
                break;
            case "thirdDiv":
                div.style.backgroundColor = "orange";
                break;
            case "fourthDiv":
                div.style.backgroundColor = "pink";
                break;
            case "fifthDiv":
                div.style.backgroundColor = "yellow";
                break;
            default:
                break;
        };
    });
});



