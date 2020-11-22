import TestRenderer from "react-test-renderer";
import App from "./App";

test("renders correctly", () => {
  const tree = TestRenderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
