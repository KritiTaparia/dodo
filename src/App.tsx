<<<<<<< HEAD
import Board from "@/components/board";
import "./App.css";
import { useStore } from "./lib/store";

function App() {
  const selectedBoard = useStore((store) => store.selectedBoard);
  return (
	// Header
	<Board title={selectedBoard} />
	// Footer
  );
=======
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    );
>>>>>>> abafdc10fae205c6c6b7453fc061a7a0a86f0014
}

export default App;
