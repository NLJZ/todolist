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
  }
  let totalItems = document.querySelectorAll("li");
  let length = 0;
  totalItems.forEach((element) => {
    length++;
  });
  console.log(length);
  if (length % 2 !== 0) {
    let bgColor = `#${colorGenerator()}`;
    newLi.style.backgroundColor = `${bgColor}`;
  }
};
