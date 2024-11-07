import { Computer } from "@material-ui/icons";

{
    //

    //generic Interface

    interface Developer<T> {
        name: String,
        computer: {
            brand: string,
            model: string,
            releaseYear: number,
        };
        smartWatch: T;
    }

    type mi = {
        brand: string,
        model: string,
        display: string
    }


    const poorDevelopers: Developer<mi> = {
        name: 'Farhad',
        computer: {
            brand: "Walton",
            model: "W-s3hk",
            releaseYear: 2016,
        },
        smartWatch: {
            brand: "Mi",
            model: "mi244",
            display: "moled"
        }
    }

    interface appleWatch {
        brand: string,
        model: string,
        heartRate: boolean,
        sleepRate: boolean
    }

    const richDevelopers: Developer<appleWatch> = {
        name: 'Hossen',
        computer: {
            brand: "Macbook",
            model: "Mac-s3",
            releaseYear: 2022,
        },
        smartWatch: {
            brand: "Apple",
            model: "Apple-s3",
            heartRate: true,
            sleepRate: true
        }
    }



















    //
}