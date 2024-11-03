"use strict";
{
    // spread operator and destructuring 
    //spread operator
    const bros1 = ['Nafisa', 'Lubaba', 'Beyadop'];
    const bros2 = ['Farhad', 'Hossen', 'Akieb'];
    bros1.push(...bros2);
    const mentors1 = {
        typeScript: 'Mezba',
        redux: 'Mir',
        dbms: 'Mizan'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest Operator
    const greetFriends = (friend1, friend2, friend3) => {
        console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    };
    greetFriends('Abul', 'bulubul', 'kasem');
    const greetNewFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hello ${friend}`));
    };
    greetNewFriends('Abul', 'bulubul', 'kasem');
}
