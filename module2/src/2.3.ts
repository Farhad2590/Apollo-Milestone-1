{
    //
    //generic_type

    type GenericArray<T> = Array<T>

    // const rollNumber : number[] = [3,6,9]
    // const rollNumber : Array<number> = [3,6,9]
    const rollNumber: GenericArray<number> = [3, 6, 9]

    // const mentors : string[] = ["Mr.x", "Mr.y", "Mr.z"]
    // const mentors : Array<string> = ["Mr.x", "Mr.y", "Mr.z"]
    const mentors: GenericArray<string> = ["Mr.x", "Mr.y", "Mr.z"]

    // const boolArray :  boolean[] = [true, false, true]
    // const boolArray :  Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "Farhad",
            age: 30
        },
        {
            name: "Hossen",
            age: 40
        }
    ]
    //generic tupple

    type GenericTupple<X, Y> = [X, Y]

    const manush: GenericTupple<string, string> = ["Mr.x", "Mr.Y"]

    const userWithId: GenericTupple<string, { age: number, sallary: number }> = ["Mr.z", { age: 40, sallary: 20000 }]












    //
}