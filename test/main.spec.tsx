import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import MainComponent from "@/components/MainComponent";
import { GetProducts } from "@/pages/api/api";
import { IApi } from "@/types/api";
import { createTestStore } from "./store.spec";

describe("Main", () => {
  let store: any;
  let result: IApi | undefined;

  beforeEach(async () => {
    result = await GetProducts();
    store = createTestStore(result!);
  });

  it("Main Render", () => {
    render(
      <Provider store={store}>
        <MainComponent />
      </Provider>
    );
  });
});
