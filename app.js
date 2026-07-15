const height = document.querySelector("#height");
const weight =  document.querySelector("#weight");
const result = document.querySelector("#result");
const Condition = document.querySelector("#wt-condition");
const btn = document.querySelector(".submit");

let val;
btn.addEventListener("click" , BMI);

function BMI(){
    console.log("submitted");
    let ht = (height.value)/100;
    let wt = weight.value;
    result.value = `${wt/(Math.pow(ht,2))}`;
    const res = result.value;
    if(res>10&&res<18.5){
        Condition.innerText = "Underweight";
        console.log("underweight.");
    }
    else if(res>=18.5&&res<24.9){
        Condition.innerText = "Normal Weight";
        console.log("normal weight");
    }
    else if(res>=25&&res<29.9){
        Condition.innerText = "Over weight";
        console.log("over weight");
    }
    else{
        Condition.innerText = "Obesity";
        console.log("obesity");
    }

}
