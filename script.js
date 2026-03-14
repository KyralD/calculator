let btns = document.querySelectorAll(".ele");
let display = document.querySelector("#disid");

let str ="";
btns.forEach((btn) => {
    btn.addEventListener("click",(event)=>
        {  
            let val = event.target.innerText;
            if(val !== "CE" && val !== "=")
            {
            str+=val;
            display.value= str;
            console.log(event.target.innerText);    
            }
            if(val === "CE")
            {
                display.value="";
                str="";
            }
            if(val ==="=")
            {
                let res=eval(str);
                display.value = res;
                str=res;
            }
            });            
});

console.log("Cnnectd");

