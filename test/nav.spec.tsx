import { fireEvent, render, screen } from "@testing-library/react";
import NavComponent from "@/components/main/NavComponent";
import { Provider } from "react-redux";
import { store } from "@/features/store";

const Nav = (
  <Provider store={store}>
    <NavComponent />
  </Provider>
);

describe("NavComponent", () => {
  it("Nav Render", () => {
    render(Nav);
  });

  it("Cart Quantity", () => {
    render(Nav);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("Cart Button Click", () => {
    render(Nav);
    const buttonElement = screen.getByRole("button");
    const initialState = store.getState().cart.open;
    expect(initialState).toEqual(false);

    fireEvent.click(buttonElement);

    const finalState = store.getState().cart.open
    expect(finalState).toEqual(true);
  });
});
