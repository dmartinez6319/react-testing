import Counter from "./comps/Counter";
import GlowingStatus from "./comps/GlowingStatus";
import Greeting from "./comps/Greeting";
import Header from "./comps/Header";

const App = () => {
  const myList = ["Frog", "Cow", "Dog", "Parrot"]; // I passed this through the Greeting comp
  const myMessage = "I swear by my skidibi, I will goon thy";

  return (
    <>
      <Header />
      <Greeting myList={myList} message={myMessage} />
      <Counter />
      <GlowingStatus />
    </>
  );
};

export default App;
