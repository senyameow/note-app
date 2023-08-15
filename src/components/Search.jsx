import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContextProvider'

const Search = () => {

    

    const {setSearchText, searchText, dark} = useContext(NotesContext)

  return (
    <div className='w-full flex flex-row items-center mb-10 gap-3'>
        <MdSearch size={32} className={`${dark ? 'text-white' : 'text-slate-800'}`} />
        <input onChange={(e) => 
        {
            setSearchText(e.target.value)
        }
        } className='inline-block flex-1 outline-none px-3 py-4 rounded-xl bg-gray-300' type="text" placeholder='type to search..' value={searchText} />
    </div> // будем фильтровать наши заметки в зависимости от валью в инпуте
  )
}

export default Search