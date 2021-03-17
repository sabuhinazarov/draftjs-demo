import React, { useEffect, useState } from "react";

import Editor from "./Editor";

import "./App.scss";

const App = () => {
  const [value, setValue] = useState({});

  const handleChange = (djem, raw, mdj, dtm, customDTM) => {
    console.log("draft-js-export-markdown", djem);
    console.log("RAW", raw);
    console.log("markdown-draft-js", mdj);

    setValue({
      djem, mdj, dtm, customDTM
    })
  };

  return (
    <div className="app">
      <Editor onChange={handleChange} />

      <div className="markdown">
        draft-js-export-markdown RESULT: <br /> <br /> {value.djem}
      </div>

      <div className="markdown">
      markdown-draft-js RESULT: <br /> <br /> {value.mdj}
      </div>

      <div className="markdown">
      draftjs-to-markdown RESULT: <br /> <br /> {value.dtm}
      </div>


      <div className="markdown">
      CUSTOM draftjs-to-markdown RESULT: <br /> <br /> {value.customDTM}
      </div>
    </div>
  );
};

export default App;
