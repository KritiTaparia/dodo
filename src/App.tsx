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
}

export default App;
