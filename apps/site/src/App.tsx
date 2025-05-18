import { useState } from "react";
import "./App.css";
import { Button } from "@fractaljstest/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-mono">React app made with Vite in monorepo</h1>
      <div className="card">
        <Button
          className="bg-blue-500 text-white cursor-pointer w-fit mx-auto px-4 py-2 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
