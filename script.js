var form = document.querySelector('#form');
var theForm = document.getElementById('form');
var display = document.getElementById('display');

var dataHolder = [];

form.addEventListener('click', doSomething);

function doSomething(e){
  if(e.target !== e.currentTarget){
    if(display.innerHTML === '0'){
      display.innerHTML = "";
    }
    switch(e.target.value){
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        display.innerHTML += e.target.value;
        dataHolder.push(e.target.value);
        break;
      case "ac":
        display.innerHTML = 0;
        dataHolder = [];
        break;
      case "ce":
        display.innerHTML = 0;
        break;
      case "%":
        if(dataHolder.length === 0){
          alert("Please enter a value first...");
        }else{
          dataHolder.push("/", 100);
          display.innerHTML = eval(dataHolder.join(''));
          break;
        }
      case "/":
        dataHolder.push(e.target.value);
        display.innerHTML = 0;
        break;
      case "*":
        dataHolder.push(e.target.value);
        display.innerHTML = 0;
        break;
      case "-":
        dataHolder.push(e.target.value);
        display.innerHTML = 0;
        break;
      case "+":
        dataHolder.push(e.target.value);
        display.innerHTML = 0;
        break;
      case "=":
        if(dataHolder.length === 0){
          alert("you must enter a value first");
        } else {
          display.innerHTML = eval(dataHolder.join(''));
          dataHolder = [];  
        }
        
        break;
    }
  }
  e.preventDefault();
}