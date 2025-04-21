import Board from "@/components/board";
import { useStore } from "./lib/store";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const selectedBoard = useStore((store) => store.selectedBoard);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Board title={selectedBoard} />
    </ThemeProvider>
  );
}

export default App;
