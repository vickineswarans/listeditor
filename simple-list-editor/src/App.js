import React, { useState, useEffect } from "react";
import { fetchListEditorData } from "./api/listEditorApi";
import Theme from "./components/style/Theme";
import GlobalStyle from "./components/style/GlobalStyle";
import ListEditor from "./components/ListEditor/ListEditor";

const App = () => {
  const [apiData, setApiData] = useState({});
  const [isApiError, setIsApiError] = useState(false);
  const [isApiLoading, setIsApiLoading] = useState(true);

  useEffect(() => {
    setIsApiLoading(true);
    fetchListEditorData("v3/f7ae7651-9851-45b1-871d-a2f53b742ad6")
      .then((data) => {
        setApiData(data);
      })
      .catch(() => {
        setIsApiError(true);
      })
      .finally(() => {
        setIsApiLoading(false);
      });
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      {isApiLoading ? (
        <p>Loading...</p>
      ) : isApiError ? (
        <p>Sorry something has gone wrong.</p>
      ) : (
        <ListEditor
          HeaderTitle={apiData.title}
          options={apiData.fieldDefinitions}
          optionsLabel="Definitions"
        />
      )}
    </Theme>
  );
};

export default App;
