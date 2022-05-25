import { Outlet } from "react-router-dom";

function IntroLayout() {
  return (
    <>
      <div className="main bg-green-400">
        <div className="container flex justify-center items-center mx-auto p-10 h-full min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default IntroLayout;
