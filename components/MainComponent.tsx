import {
  Main,
  Main_Content,
  Product_Grid
} from "@/styles/home";
import ProductComponent from "@/components/main/ProductComponent";
import { Product } from "@/types/product";
import CartComponent from "./cart/CartComponent";
import { useAppSelector } from "@/features/hooks";
import NavComponent from "./main/NavComponent";
import FooterComponent from "./main/FooterComponents";

export default function MainComponent() {
  const products: Array<Product> = useAppSelector((state) => state.products);
  const open: boolean = useAppSelector((state) => state.cart.open);

  return (
    <Main>
      <NavComponent />
      <Main_Content>
        <Product_Grid>
          {products.map((data: Product, index: number) => {
            return <ProductComponent data={data} key={index} />;
          })}
        </Product_Grid>
        {open ? <CartComponent /> : <></>}
      </Main_Content>
      <FooterComponent />
    </Main>
  );
}
/* */
