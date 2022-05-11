import Game from "./components/Game";

const style = {
  position: "relative",
  boxSizing: "border-box",
  display: "block",
  // overflow: "hidden",
  width: "100%",
  height: "auto",
  margin: "0 auto",
  padding: "10px",
};

function App() {
  return (
    <div className="main" style={style}>
      <h1>Cromy Marvel Init</h1>
      <Game />
    </div>
  );
}

export default App;
