import { Product } from "./product";

export interface IApi {
  data: Array<Product>;
  status: number;
}
