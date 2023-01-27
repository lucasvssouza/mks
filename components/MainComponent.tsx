import {
  Cart_Button,
  Cart_Quantity,
  Cart_SVG,
  Footer,
  Main,
  Title_MKS,
  Title_Sistemas,
  Navbar,
  Nav_Content,
  Title_Container,
  Product_Grid,
  Copyright,
  Main_Content,
} from "@/styles/home";
import ProductComponent from "@/components/ProductComponent";
import { Product } from "@/types/product";
import CartComponent from "./CartComponent";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/features/hooks";
import { setOpen } from "@/features/products/cart-slicer";
import NavComponent from "./NavComponent";

export default function MainComponent() {
  const products: Array<Product> = useAppSelector((state) => state.products);
  const open: boolean = useAppSelector((state) => state.cart.open);

  return (
    <Main>
      <NavComponent/>
      <Main_Content>
        <Product_Grid>
          {products.map((data: Product, index: number) => {
            return <ProductComponent data={data} key={index} />;
          })}
        </Product_Grid>
        {open ? <CartComponent /> : <></>}
      </Main_Content>
      <Footer>
        <Copyright>MKS sistemas © Todos os direitos reservados</Copyright>
      </Footer>
    </Main>
  );
}
/* */
