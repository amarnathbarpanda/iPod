import React from 'react'

const Settings = () => {
  return (
    <div className='settings' style={styles}>
      <img style={{ width: '5rem' }} src="/images/settings.png" alt="settings" />
      <h3>Settings</h3>
    </div>
  )
}

export default Settings;

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'whitesmoke',
  width: '100%',
  height: '100%'
}