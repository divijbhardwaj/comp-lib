import React from "react";
import { render } from "@testing-library/react";

import MButton from "./MButton";

describe("MButton", () => {
  test("renders the Button component", () => {
    render(<MButton label={'Test'} />);
  });
});