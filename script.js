let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    //evaluating result
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }

    //clear
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    
    //delete
    else if (e.target.innerHTML == 'DEL') {
        if(string.length > 1){
            string = string.slice(0, -1);
            inputField.value = string;
        }
        
        if(string.length = 1){
            string = "";
            document.querySelector('input').value = string;
        }
    }

    //background-color change
    else if (e.target.innerHTML == 'Magic') {
        const color = prompt("Which backgorund color due you want?");
        document.body.style.backgroundColor = color;
    }
    //creating expression
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})