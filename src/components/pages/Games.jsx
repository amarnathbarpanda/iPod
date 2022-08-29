import React from 'react'

const Games = () => {
  return (
    <div className='games' style={styles}>
      <img style={{width: '5rem'}} src="/images/dice.png" alt="dice" />
      <h3>Games</h3>
    </div>
  )
}

export default Games;

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'whitesmoke',
  width: '100%',
  height: '100%'
}