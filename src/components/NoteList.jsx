import React from 'react'
import Note from './Note'
import Add from './Add'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContextProvider'

const NoteList = () => {

    const {notes} = useContext(NotesContext)

    const {searchText} = useContext(NotesContext)

  return (
    <div className='grid note-list gap-4 justify-center'>
        {notes.filter(note => note.text.toLowerCase().includes(searchText)).map(note => (
            <Note key={note.id} {...note} />
        ))}
        <Add />
    </div>
  )
}

export default NoteList