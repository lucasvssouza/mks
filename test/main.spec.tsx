import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import MainComponent from "@/components/MainComponent";


describe("Main", () => {
  let store: any;

  it("Main Render", () => {
    render(
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  });
});
