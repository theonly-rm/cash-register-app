let btn1 = document.querySelector(".btn1");
let inp1 = document.querySelector(".amount");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let step2 = document.querySelector(".step2");
let btn2 = document.querySelector(".btn2");
let inp2 = document.querySelector(".cash");

btn1.addEventListener("click", function(){
        if(inp1.value === ''){
            p1.style.display = "initial";
        }
        else {
            p1.style.display = "none";
            step2.style.display = "initial"
        }
});

btn2.addEventListener("click", function(){
        if(inp2.value === ''){
            p2.style.display = "initial";
        }
        else {
            p2.style.display = "none";
            step3.style.display = "initial"
        }
});