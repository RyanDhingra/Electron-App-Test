import React from 'react';
const { ipcRenderer } = window.require('electron');

function Test() {
  const openNewWindow = () => {
    ipcRenderer.send('openSecondWindow');
  };

  return (
    <div>
      <h1>Main Window</h1>
      <button onClick={openNewWindow}>Open New Window</button>
    </div>
  );
}

export default Test;
