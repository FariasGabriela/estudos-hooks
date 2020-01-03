import React from 'react';
import Timeline from '@material-ui/icons/Timeline';
import Autorenew from '@material-ui/icons/Autorenew';

function Card(props) {
  return (
    <div
      style={{
        height: 140,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        boxShadow: '1px 0px 10px 1px'
      }}
    >
      <div style={{ display: 'flex' }}>
        <Timeline style={{ height: 50, width: 50, padding: 15, color: 'green' }} />
        <div style={{ padding: 15 }}>
          <p style={{ fontSize: 15, margin: 0 }}>Capacidade</p>
          <p style={{ fontSize: 25, margin: 0 }}>{props.count}</p>
        </div>
      </div>
      <div
        style={{ display: 'flex', borderTop: '1px solid gray', cursor: 'pointer' }}
        onClick={props.onClick}
      >
        <Autorenew style={{ height: 31, width: 25, padding: 15, color: 'gray' }} />
        <p style={{ fontSize: 25, paddingTop: 15, margin: 0 }}>Contador</p>
      </div>
    </div>
  );
}

export default Card;
