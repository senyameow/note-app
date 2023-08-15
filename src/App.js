
import './index.css'
import NoteList from './components/NoteList';
import Header from './components/Header';
import Search from './components/Search';
import { useContext } from 'react';
import { NotesContext } from './context/NotesContextProvider';

function App() {

  const {dark, setDark} = useContext(NotesContext)

  return (
    <div className={`min-w-[100wv] min-h-[100vh] ${dark ? 'bg-slate-800' : 'bg-white'}`}>
      <div className={`container mx-auto grid py-3`}>
        <Header />
        <Search />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
