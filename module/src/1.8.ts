{
    //destructuring
    //Object destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Farhad",
            middleName: "Hossen",
            lastName: "Akieb"
        },
        contactNo: '01829313330',
        address: 'ctg,bangladesh'
    }
    const {id, name : {middleName}} = user

    //array Destructuring
    const myFriend = ['Chadler','Beast', 'Carry',"Buvan","Ashis","Chintu"]

    const[,,friend, ...rest] = myFriend

}