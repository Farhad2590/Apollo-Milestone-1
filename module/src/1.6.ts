// learning functions
//Normal Function
//Arrow Function

function add(num1: number,num2:number): number{
    return num1 + num2
}

add(5, 6)

const addArrow =(num1:number, num2:number): number => num1 + num2


const poorUser ={
    name : "farhad",
    balance : 0,
    addBalance(balance:number):string{
        return `My New Balance is ${this.balance + balance}`;
    }
}

const arr : number[]= [1,4,10]

const newArray = arr.map((element:number) : number => element*element)