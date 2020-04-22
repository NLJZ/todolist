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
    let bgColor = `#${colorGenerator()}`;
    newLi.appendChild(text);
    newLi.style.backgroundColor = `${bgColor}`;
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userText").value = "";
  }
};
