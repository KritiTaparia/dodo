import Board from "@/components/board";
import { useStore } from "./lib/store";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const selectedBoard = useStore((store) => store.selectedBoard);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Board title={selectedBoard} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
