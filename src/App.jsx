import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="w-full min-h-screen flex items-center justify-center">
        <section
          id="profile"
          className="w-100 h-100 flex items-center justify-center m-10 sm:m-10"
        >
          <Card />
        </section>
      </main>
    </>
  );
}

export default App;
