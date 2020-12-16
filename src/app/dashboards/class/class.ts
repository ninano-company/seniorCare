export interface User {
    id : number;
    photo : string;
    name : string;
    gender : string;
    age : number;
    desc : string;
    latest : string;
    center : string;
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

export interface cctvFilter {
    id : number;
    name : string;
}

export interface RobotFilter {
    id : number;
    name : string;
}

export interface PresentList {
    id: number;
    dateTime:string;
    presentNumber:number;
    temperatureStranger: number;
    facility: string;
}