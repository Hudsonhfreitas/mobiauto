export interface IBrand {
  codigo: string;
  nome: string;
}

export interface IForm {
  marca?: string;
  modelo?: string;
  ano?: string;
}

export interface IOptions {
  codigo: string;
  nome: string;
}

export interface ISelectProps {
  name: string;
  options: IOptions[];
  label: string;
  disabled?: boolean;
}

export interface IResult {
  AnoModelo: number;
  CodigoFipe: string;
  Combustivel: string;
  Marca: string;
  MesReferencia: string;
  Modelo: string;
  SiglaCombustivel: string;
  TipoVeiculo: number;
  Valor: string
}
