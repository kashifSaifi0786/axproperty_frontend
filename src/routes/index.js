import { useRoutes } from "react-router-dom";
import LoginRoutes from "./AuthRoutes";

export default function Routes() {
  return useRoutes([LoginRoutes]);
}
