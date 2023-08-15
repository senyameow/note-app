import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContextProvider'
import { BiSolidMoon } from 'react-icons/bi'

const Header = () => {

    const {dark, setDark} = useContext(NotesContext)

  return (
    <div className='w-full flex justify-between items-center p-5 mb-5'>
        <h1 className={`text-[1.5rem] font-semibold ${dark ? 'text-white' : 'text-slate-800'}`}>Notes</h1>
        { dark === false ? <BiSolidMoon className='cursor-pointer' onClick={() => {
                setDark(!dark)
            }} size={32}/> : <BsFillSunFill className={`cursor-pointer text-white`} onClick={() => {
                setDark(!dark)
            }} size={32} />}
    </div>
  )
}

export default Header