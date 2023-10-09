// Theam Part
let theam=document.getElementById('toggle');

let count=0;

theam.addEventListener('click',function(){
    count++;

    if(count%2!=0){
        document.body.style.background='black';
        theam.style.color='white';
    }
    else{
        document.body.style.background='white';
        theam.style.color='black';
    }
})

// Calculation Part
let button=document.getElementsByClassName('btns');
let display=document.getElementById('Result');
let operand1=0;
let operand2=0;
let operator=null;

console.log(button);

for(let i=0; i<button.length;i++){
    button[i].addEventListener('click',function(){  // Here  button is an array and we are iterating over the array
        let value=this.getAttribute('data-valu'); // deta-value attribute is used to get the data of the particular element & "this" indicates the current element.
        
        if(value == 'ac'){
            display.innerText=' ';
        }

        else if(value== '+/-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=' ';
        }

        else if(value == '%'){
            operator='%';
            operand1=parseFloat(display.textContent);
            display.innerText=' ';
        }
        else if(value == '/'){
            operator='/';
            operand1=parseFloat(display.textContent); // " .textContent" is used to read the data from screen
            display.innerText=' ';
        }
        else if(value == '*'){
            operator='*';
            operand1=parseFloat(display.textContent);
            display.innerText=' ';
        }
        else if(value =='-'){
            operator='-';
            operand1=parseFloat(display.textContent);
            display.innerText=' ';
        }
        else if(value == '+'){
            operator='+';
            operand1=parseFloat(display.textContent);
            display.innerText=' ';
        }
        else if(value== '='){
            operand2=parseFloat(display.textContent);
            // Using eval()
            if(operator=='%'){
                let Result=operand1/100;
                display.innerText=Result;
            }
            else{
            let ao=eval(operand1+" "+operator+" "+operand2);
            display.innerText=ao;
            }
        }
        else{
            display.innerText+=value
        }

    })
}

