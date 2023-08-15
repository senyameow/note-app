import React, { useContext, useRef } from 'react'
import { useState } from 'react'
import { NotesContext } from '../context/NotesContextProvider'
import { nanoid } from 'nanoid'

const Add = () => {


    const [remaining, setRemaining] = useState(200)
    const [noteText, setNoteText] = useState('')
    const inpEL = useRef()

    const {notes, setNotes} = useContext(NotesContext)

    const addNote = () => {
        if (inpEL.current.value.trim().length == 0) return
        setNotes([...notes, {
            id: nanoid(),
            title: 'new note',
            text: inpEL.current.value,
            date: new Date().toLocaleDateString()
        }])
        setNoteText('')
        setRemaining(200)
    }
  return (
    <div className='bg-blue-300 flex flex-col justify-between p-4 rounded-xl shadow shadow-gray-500'>
        <textarea
            ref={inpEL}
            onChange={(e) => {
            setNoteText(e.target.value)
            setRemaining(200 - e.target.value.length)
        }} rows='8' cols={100} placeholder='type to add a note...' className='border-none bg-transparent resize-none outline-none' value={noteText} />
        <div className='flex flex-row w-full justify-between items-center'>
            <small>{remaining} Remaining</small>
            <button onClick={addNote} className='rounded-full text-white bg-amber-400 py-1 px-3 cursor-pointer hover:opacity-[.9]'>Save</button>
        </div>

    </div>
  )
}

export default Add