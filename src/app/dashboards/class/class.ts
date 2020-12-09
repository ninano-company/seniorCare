export interface User {
  id: number;
  photo: string;
  name: string;
  gender: string;
  age: number;
  desc: string;
  latest: string;
  center: string;
}

export interface Request {
  id: number;
  color: string;
  progress: string;
  from: string;
  desc: string;
  who: string;
}

export interface Robot {
  id: number;
  kind: string;
  name: string;
  where: string;
  status: string;
  color: string;
}