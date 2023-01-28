import { fireEvent, render, screen } from "@testing-library/react";
import NavComponent from "@/components/NavComponent";
import { Provider } from "react-redux";
import { store } from "@/features/store";
import { useAppSelector } from "@/features/hooks";

jest.mock("../features/products/cart-slicer.ts")

describe("NavComponent", () => {

  beforeEach(()=>{
    useAppSelector
  })


  test("render corretly", () => {
    render(
      <Provider store={store}>
        <NavComponent />
      </Provider>
    );
    expect(screen.getByText("0")).toBeInTheDocument();
    const buttonElement =  screen.getByRole("button")
    fireEvent.click(buttonElement)
  });
});
