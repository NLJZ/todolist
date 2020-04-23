const colorGenerator = () => {
  let randomColor = (Math.random().toString(16) + "0000000").slice(2, 8);
  return randomColor;
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  if (userInput !== "") {
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userText").value = "";
    let span = document.createElement("button");
    let closeText = document.createTextNode("x");
    span.className = "close";
    span.appendChild(closeText);

    let listAll = document.querySelectorAll("li");
    listAll.forEach((item) => {
      item.appendChild(span);
    });
    let closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((button) => {
      button.addEventListener("click", closeIt, false);
    });
  }
  let totalItems = document.querySelectorAll("li");
  let length = 0;
  totalItems.forEach((element) => {
    length++;
  });
  if (length % 2 !== 0) {
    let bgColor = `#${colorGenerator()}`;
    newLi.style.backgroundColor = `${bgColor}`;
  }
};

const closeIt = () => {
  document.activeElement.parentNode.style.display = "none";
};
