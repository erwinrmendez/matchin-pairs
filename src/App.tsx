import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 h-screen p-4 overflow-hidden">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
