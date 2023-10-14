import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import Markdown from 'markdown-to-jsx'
import { useState,useContext,createContext } from 'react';



// Create Context that components can provide or read
export const ThemeContext = createContext(); // a context of 2 themes
const App=()=> {
  const [isDark, setIsDark]= useState(true);
  const value ={ isDark, setIsDark};


  return (
    <ThemeContext.Provider value={value}>
    <Header />
    <Post />
    </ThemeContext.Provider>
  );
}

export default App;
