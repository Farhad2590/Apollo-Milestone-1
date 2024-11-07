"use strict";
{
    //
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const createGenericArray = (param) => {
        return [param];
    };
    const createGenericTupple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createArray('Bangladesh');
    const res2 = createGenericArray('BangladeshWith');
    // const res3 = createGenericArray<{id:number; name: string}>({id :222, name :'Farhad'})
    const res3 = createGenericArray({ id: 222, name: 'Farhad' });
    const res4 = createGenericTupple('BangladeshWith', 222);
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch",
    });
    //
}
