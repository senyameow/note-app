import React, { useState , createContext } from "react";
import { nanoid } from 'nanoid'

export const NotesContext = createContext(null)

const NotesContextProvider = ({children}) => {

    const [notes, setNotes] = useState([
        {
        id: nanoid(),
        title:'first note',
        text: 'I wanna scream and shoutisjfioejriowejriowejriorjsifjseiojrsiegaedk eoa iowejm nefuih us efjweiojri aoeopwa siefuiji aej opawoe uierh  mapweioaj we',
        date: '31/07/23'
        },
        {
        id: nanoid(),
        title:'second note',
        text: 'I wanna scream and shout',
        date: '31/07/23'
        },
        {
        id: nanoid(),
        title:'third note',
        text: 'I wanna scream and shout',
        date: '31/07/23'
        },
    ])

    const removeNote = id => {
        setNotes(notes.filter(note => note.id !== id))
    } //не забываем про фильтер, выручает, когда надо удалить что-то 





    const [searchText, setSearchText] = useState('')

    const [dark, setDark] = useState(false)


    


    const contextValue = {
        notes,
        setNotes,
        removeNote,
        searchText,
        setSearchText,

        dark,
        setDark,
        
    }

    return (
        <NotesContext.Provider value={contextValue}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider