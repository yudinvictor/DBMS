export interface Cargo{
  id?: number;
  name: string;
  weight: number;
  type: string;
  order?: number;
}

export interface Order{
  cargoes: Array<Cargo>;
  start: string;
  finish: string;
}


