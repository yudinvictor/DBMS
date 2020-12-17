export interface Cargo{
  id?: number;
  name: string;
  weight: number;
  type: string;
}

export interface Order{
  cargoes: Array<Cargo>;
  start: string;
  finish: string;
}
