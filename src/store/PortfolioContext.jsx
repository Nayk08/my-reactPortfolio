import { useState } from "react";
import { MyPortfolioContext } from "./Portfolio-store.jsx";

function PortfolioContext({ children }) {
  const [content, setContent] = useState("About");

  function handleContent(newContent) {
    setContent(newContent);
  }

  const ctxValue = {
    content: content,
    handleContent: handleContent,
  };

  return (
    <MyPortfolioContext.Provider value={ctxValue}>
      {children}
    </MyPortfolioContext.Provider>
  );
}

export default PortfolioContext;
