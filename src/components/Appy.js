import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App() {

  let Styles = {
    margin: 'auto',
    width: '90vw',
  }
  return (
    <React.Fragment>
      <div style={Styles}>
        <Header />
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
