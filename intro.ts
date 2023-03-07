let greetings : string = '...'
console.log(greetings)

type Person ={
    name : string;
    email : string;
    age : number;
}

const createPerson =(user:Person):void=>{
    console.log(user)
}

createPerson({name:'m',email:'m@gmail.com',age:20})

export {}