{
    //
    // union types 

    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'


    const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    type User ={
    name: string;
    email?: string;
    gender:"male"| "female";
    bloodGroup:"O+"|"A+"|"AB+"
  }

  const user1: User ={
    name:'persian',
    gender:'male',
    bloodGroup:'O+'
  }



  type FrontendjrDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackjrDeveloper = FrontendjrDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackjrDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };










    //
}