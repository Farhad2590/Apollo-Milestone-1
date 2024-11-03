//refference type -> Object

const user:{
    firstName : string;
    middleName : string;
    lastName : string;
} = {
    firstName : "Farhad",
    middleName : "Hossen",
    lastName : "Akieb"
}

const user1:{
    firstName : string;
    middleName ?: string; // Optional type
    lastName : string;
} = {
    firstName : "Farhad",
    lastName : "Akieb"
}

const user3:{
    company : "Programming Hero"; //literal types
    firstName : string;
    middleName ?: string; // Optional type
    lastName : string;
} = {
    company : "Programming Hero",
    firstName : "Farhad",
    lastName : "Akieb"
}