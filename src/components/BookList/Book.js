import React from 'react'
import "./book.css"

export default function Book({id,title,year,author}) {
  return (
    
        <tr className='items'>
            <th>{title}</th>
            <th>{author}</th>
            <th>{year}</th>
        </tr>
    
  )
}

