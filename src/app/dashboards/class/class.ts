export interface User {
    id : number;
    photo : string;
    name : string;
    gender : string;
    age : number;
    desc : string;
    latest : string;
    center : string;
    temp? : string;
    guardian? : string;
}

export interface Request {
    id : number;
    color : string;
    progress : string;
    from : string;
    desc : string;
    who : string;
}

export interface Robot {
    id : number;
    kind : string;
    name : string;
    where : string;
    status : string;
    color : string;
    center : string;
    inserted : string;
}

export interface cctv {
    id : number;
    img : string;
    datetime : string;
    desc : string;
    center : string;
}

export interface PresentList {
    id: number;
    dateTime:string;
    presentNumber:number;
    temperatureStranger: number;
    facility: string;
    bodytemperature: number;
    protcetor: string;
    
}

export interface Filter {
    name: string;
    completed: string;
    subFilters?: Filter[];
}

export interface Worker {
    task : string;
    name : string;
    phone : string;
    center : string;
    region : string;
    worked : string;
}

export interface Activity {
    name : string;
    teacher : string;
    phone : string;
    center : string;
    color : string;
    progress : string;
    datetime : string;
    photo : string;
}

export interface Task {
    id : string;
    name : string;
    event : string;
    center : string;
    present : number;
    datetime : string;
}

export interface Video {
    id: number;
    name: string;
    uploaded: string;
    title : string;
    url : string;
}
export interface Dietary {
    year: number;
    month: number;
    day: number;
    meals?: string[];
    url : string;
}