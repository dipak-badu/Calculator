let display = document.querySelector("#display");

let buttons=Array.from(document.querySelectorAll('.button'));

buttons.map(button =>{
    button.addEventListener('click' ,(e)=>{
        console.log("clicked");
     switch(e.target.innerText)
     {
        case 'AC':
        display.innerText="";
        break;
        case 'DE':
            display.innerText=display.innerText.slice(0,-1);
            break;
        case '=':
            try{
                display.innerText=eval(display.innerText);
            }
            catch{
                display.innerText="Error";
            }
            
            break;
        default:
            display.innerText+=e.target.innerText;
     }
        
    });
});

