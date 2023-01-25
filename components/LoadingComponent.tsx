import {
  Loading_Animation,
  Loading_Container,
  Loading_Span,
} from "@/styles/home";

export default function LoadingComponent() {
  return (
    <Loading_Container>
      <Loading_Span>Carregando...</Loading_Span>
      <Loading_Animation />
    </Loading_Container>
  );
}
