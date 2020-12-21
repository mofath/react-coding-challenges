import { useContext, useEffect } from "react";
import { GeneralContext } from "../../context";

export default function App({ children }) {
  const { initializeGeneralContext } = useContext(GeneralContext);

  useEffect(()=>initializeGeneralContext(), [initializeGeneralContext]);

  return children;
}
