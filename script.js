let btn1 = document.querySelector(".btn1");
let inp1 = document.querySelector(".amount");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let step2 = document.querySelector(".step2");
let step3 = document.querySelector(".step3");
let btn2 = document.querySelector(".btn2");
let inp2 = document.querySelector(".cash");
let noOfNotes = document.querySelectorAll(".no-of-notes")
let amountToBeReturned = '';
const availableNotes = [ 500, 200, 100, 50, 20, 10, 5, 2, 1 ]

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
        else if(inp1.value>inp2.value) {
                p3.style.display = "initial";
                p2.style.display = "none";
        }
        else if(inp2.value>=inp1.value){
            p2.style.display = "none";
            p3.style.display = "none";
            step3.style.display = "initial"
            amountToBeReturned = inp2.value - inp1.value;
            calculateChange(amountToBeReturned);
        }
});



function calculateChange(amountToBeReturned){
    for(i=0;i<availableNotes.length;i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;
    }
}
