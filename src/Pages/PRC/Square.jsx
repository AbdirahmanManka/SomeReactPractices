import React, { useState }  from 'react'
import {Button} from 'antd'

function Square({value, onSquareClick}) {

    
  return (
    <div>
        <Button className='square' onClick={onSquareClick}>{value}</Button>

      
    </div>
  )
}

export default Square
