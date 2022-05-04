import Tabletop from "./components/Tabletop";

export const Deck =  function() {
  return (
    <>
      <div>this is a deck</div>
    </>
  );
}

function App() {
  return (
    <div className="main">
      <h1>Cromy Marvel Init</h1>
      <Tabletop>
        <Deck></Deck>
      </Tabletop>
    </div>
  );
}

export default App;
