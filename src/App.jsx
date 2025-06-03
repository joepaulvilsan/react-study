import Header from "./components/Header";
import Entry from "./components/Entry";
import "./index.css";
import Joke from "./components/Joke";
import jokesdata from "./components/jokesdata";
import travelEntries from "./components/travel";
 function App() {
    const jokeElements = jokesdata.map((joke) => {
        return <Joke joke={joke} />;
    });
   const travelEntriesElements = travelEntries.map((entry) => {
        return <Entry 
        key={entry.id}
        Entry={entry}/>;
    }
    );
  return (
    <div>
        <Header />
        
            <div className="jokes-list">
                {jokeElements}
            </div>
        <main className="main-content">
            {travelEntriesElements}
        </main>    
        
    </div>
  );
}

export default App;