import { Main, Main_Content, Product_Grid } from "@/styles/home";
import { Skeleton_Container } from "@/styles/skeleton";
import FooterComponent from "./main/FooterComponents";
import NavComponent from "./main/NavComponent";

export default function SkeletonComponent() {
  return (
    <Main>
      <NavComponent />
      <Main_Content>
        <Product_Grid>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
          <Skeleton_Container height={"290px"} width={"218px"} borderRadius={"8px"}/>
        </Product_Grid>
      </Main_Content>
      <FooterComponent />
    </Main>
  );
}
