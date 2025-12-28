import DiscussionThread from "./components/DiscussionThread.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="max-w-[500px] mx-auto">
      <Header />
      <DiscussionThread />
    </div>
  );
}

export default App;
