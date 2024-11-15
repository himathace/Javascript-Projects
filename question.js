// simple quiz application
const prompt=require("prompt-sync")()
const array=[
    {
        question:"what is the capital city of sri lanka",
        opetion:["kadawatha","Nuwara","kotte","Badulla"],
        answer:3
    },
    {
        question:"what is the national sport in sri lanka",
        opetion:["cricket","vollyball","Football","Rugby"],
        answer:2
    }
]

let marks=0
function startquiz(){
    for(let x=0;x<array.length;x++){
        let currentquestion=array[x]

        console.log(`question ${x+1} : ${currentquestion.question}`)
        currentquestion.opetion.forEach(function(value,index){
            console.log(`${index+1}.${value}`)
        })


        const userinput=parseInt(prompt("Enter your answer(1-4): "))
        if(userinput===currentquestion.answer){
            console.log("answer is correct")
            marks++
        }
        else{
            console.log("wrong answer try again") 
        }
    }
}

startquiz()
console.log(` marks: ${marks} out of 2`)