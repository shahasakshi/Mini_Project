function display(val){
    document.getElementById("disp").value += val 
} 

function Reset(){
    document.getElementById("disp").value =""
}

function calculate(){
    let a = document.getElementById("disp").value

    let b = eval(a);

    document.getElementById("disp").value=b

}