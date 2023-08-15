import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import '../index.css'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContextProvider'

const Note = ({text, date, id}) => {

    const {notes, setNotes, removeNote, dark} = useContext(NotesContext)

  return (
    <div className={`note w-[300px] h-[300px] flex flex-col p-4 justify-between items-center bg-yellow-300 rounded-xl ${dark ? 'shadow-md shadow-rose-300' : 'shadow-md shadow-gray-500'} place-self-center`}>
        <h1 className='max-w-[100%]'>{text}</h1>
        <div className='flex flex-row justify-between items-center w-full'>
            <small>{date}</small>
            <button onClick={() => removeNote(id)} ><MdDeleteForever size={24} className='cursor-pointer'/></button>
        </div>
    </div>
  )
}

export default Note