import React from 'react'

const CoverFlow = () => {
  return (
    <div className='coverflow' style={styles}>
      <h3>Cover Flow</h3>
    </div>
  )
}

export default CoverFlow;
const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'whitesmoke',
  width: '100%',
  height: '100%'
}