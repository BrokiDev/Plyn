import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="h-full w-full bg-black">
      <div className="flex flex-col">
        <Header/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
