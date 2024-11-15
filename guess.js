const prompt=require("prompt-sync")()


let count=0

const coumputerpick=Math.floor(Math.random()*5)


while(true){
    const userinput=parseInt(prompt("guess the value(1-5): "))
    if(userinput===coumputerpick){
        count++
        console.log(`correct,you guess the number`)
        console.log(`number of attempt ${count}`)
        break
    }
    else if(userinput>coumputerpick){
        count++;
        console.log("Too high!")
    }
    else{
        count++
        console.log("Too low!")
    }
}

