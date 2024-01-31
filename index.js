const inputText = document.querySelector("#textValue");
const buttons  = document.querySelectorAll("input[type='button']");

buttons.forEach(item=>{
  item.addEventListener("click",()=>{
        if(item.value == "AC"){
            inputText.value = inputText.value.toString().slice(0,-1);
        }
        else if(item.value == "="){

          if(inputText.value == ""){
            inputText.value = "ERROR!";
            setTimeout(() => {
               inputText.value = ""
            }, 2000);
          }
          else{
            inputText.value = eval(inputText.value);
          }
        }
        else{
          inputText.value += item.value;
        }
  })
})

