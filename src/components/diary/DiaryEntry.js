import React from 'react';

export const DiaryEntry = () => {
    
  return(
    <div className='diary__entry pointer'>

        <div 
            className='diary__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://fondosmil.com/fondo/11760.jpg)'
            }}
        ></div>

        <div className='diary__entry-body'>
            <p className='diary__entry-title'>
                Un nuevo dia
            </p>
            <p className='diary__entry-content'>
                asdopjafsodjfoasjdfojasdojfoasdjoasdjfoajsdofas
            </p>
            
        </div>
        <div className='diary__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
        </div>
    </div>
  ) 
};
