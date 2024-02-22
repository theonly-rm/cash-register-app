let btn1 = document.querySelector(".btn1");
let inp1 = document.querySelector(".amount")
let pAlert = document.querySelector("p")
let step2 = document.querySelector(".step2")



btn1.addEventListener("click", function(){
        if(inp1.value === ''){
            pAlert.style.display = "initial";
        }
        else {
            step2.style.display = "initial"
        }
})