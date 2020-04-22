const addToList = () => {
  let userInput = document.querySelector("#userText").value;
  console.log(userInput);
  let newLi = document.createElement("li");
  let text = document.createTextNode(userInput);
  newLi.appendChild(text);
  document.querySelector(".result").appendChild(newLi);
  document.querySelector("#userText").value = "";
};
