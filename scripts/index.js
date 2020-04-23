const colorGenerator = () => {
  let randomColor = (Math.random().toString(16) + "0000000").slice(2, 8);
  return randomColor;
};

const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  if (userInput == "") {
    return alert("please write something");
  }
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
  let span = document.createElement("button");
  let closeText = document.createTextNode("X");
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
  let oddItems = document.querySelectorAll("li:nth-child(odd)");
  oddItems.forEach((element) => {
    let bgColor = `#${colorGenerator()}`;
    element.style.backgroundColor = `${bgColor}`;
  });
};

const reColor = () => {
  let oddItems = document.querySelectorAll("li:nth-child(odd)");
  let evenItems = document.querySelectorAll("li:nth-child(even)");

  oddItems.forEach((element) => {
    let bgColor = `#${colorGenerator()}`;
    element.style.backgroundColor = `${bgColor}`;
  });

  evenItems.forEach((element) => {
    let bgColor = "#fff";
    element.style.backgroundColor = `${bgColor}`;
  });
};

const closeIt = () => {
  document.activeElement.parentNode.remove();
  reColor();
};
