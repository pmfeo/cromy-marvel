import Game from "./components/Game";

const style = {
  main: {
    position: "relative",
    boxSizing: "border-box",
    display: "block",
    // overflow: "hidden",
    width: "100%",
    height: "auto",
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
    <div className="main" style={style.main}>
      <div className="app-title" style={style.title}>
        <h1>Cromy Marvel Init</h1>
      </div>
      <Game />
    </div>
  );
}

export default App;
