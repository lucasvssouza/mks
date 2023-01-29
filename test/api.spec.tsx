import { GetProducts } from "@/pages/api/api";
import { IApi } from "@/types/api";

describe("API", () => {
  var result: IApi | undefined;
  beforeEach(async () => {
    result = await GetProducts();
  });

  it("API Status Code 200", async () => {
    expect(result!.status).toEqual(200);
  });
});
