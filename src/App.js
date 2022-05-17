import { Route, Link, Routes } from "react-router-dom";

import Game from "./components/Game";
import NewGame from "./components/NewGame";

const styles = {
  main: {
    position: "relative",
    boxSizing: "border-box",
    display: "block",
    overflow: "hidden",
    width: "100%",
    // height: "auto",
    height: "100vh",
    maxHeight: "100vh",
    margin: "0 auto",
    padding: "10px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
};

function App() {
  return (
    <div className="main" style={styles.main}>
      <div className="app-title" style={styles.title}>
        <h1>Cromy Marvel</h1>
      </div>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/play" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
