import React from 'react'

function Button () {
    
    const style = {
        button: {
            backgroundColor: 'hsl(208, 69%, 26%)',      
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '15%',
            color: 'white',
        }
    };


    return (
    <button style={style.button}>Click Me</button>
  )
}

export default Button
