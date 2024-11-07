{
    //
    //function with generics
    const createArray = (param:string) : string[]=>{
        return [param]
    }
    const createGenericArray = <T>(param:T) : T[]=>{
        return [param]
    }
    const createGenericTupple = <T,Q>(param1:T , param2:Q) : [T,Q]=>{
        return [param1,param2]
    }

    type User = {id:number; name: string}
    const res1 = createArray('Bangladesh')
    const res2 = createGenericArray<string>('BangladeshWith')
    // const res3 = createGenericArray<{id:number; name: string}>({id :222, name :'Farhad'})
    const res3 = createGenericArray<User>({id :222, name :'Farhad'})
    const res4 = createGenericTupple<string,number>('BangladeshWith',222)

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
          ...student,
          course,
        };
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
