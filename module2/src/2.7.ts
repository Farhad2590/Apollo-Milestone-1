{
    //generic contraint with keyof operator
    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner = "bike" | "car" | "ship" 

    type Owner2 = keyof Vehicle;

    // function getPropertyValue(obj: object, key)
}