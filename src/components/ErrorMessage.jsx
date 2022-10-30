import React from 'react'
import '../styles/error_message.css'

function ErrorMessage({error}) {
  return (
    <div className='error'>{'Error 404: Not Found'/*`Error ${error.status}: ${error.statusText}`*/}</div>
  )
}

export default ErrorMessage