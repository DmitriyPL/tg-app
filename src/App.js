import './App.css';

import { useEffect } from "react";

import { Header } from './components/Header/Header';
import { useTelegram } from "./hooks/useTelegram.js";

function App() {

  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='togglebutton'>
        <button onClick={onToggleButton}>toggle</button>
      </div>
    </div>
  );
}

export default App;
