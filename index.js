let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let string = "";
let arr = Array.from(buttons);
arr.forEach(buttons => {
    buttons.addEventListener('click', function(e) {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string
        } else if(e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

