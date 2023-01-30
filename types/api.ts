import { IProduct } from "./product";

export interface IApi {
  data: Array<IProduct>;
  status: number;
}
