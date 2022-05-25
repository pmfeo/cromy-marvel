import { useEffect, useState } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";

import IntroLayout from "./layout/IntroLayout";
import Game from "./components/Game";
import NewGame from "./components/NewGame";
import GameLayout from "./layout/GameLayout";

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

function Loading() {
  return (
    <div className="splash">
      <h1 className="animate-pulse text-white text-5xl font-bold italic text-center">HERO CARD BATTLE</h1>
    </div>
  );
}

function App() {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      {isloading ? (
        <Route path="/" element={<IntroLayout />}>
          <Route index element={<Loading />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<IntroLayout />}>
            <Route index element={<NewGame />} />
          </Route>
          <Route path="/play" element={<GameLayout />}>
            <Route index element={<Game />} />
          </Route>
        </>
      )}
    </Routes>
  );

  // <div className="main" style={styles.main}>
  //   <div className="app-title" style={styles.title}>
  //     <h1>Cromy Marvel</h1>
  //   </div>

  // </div>
}

export default App;
