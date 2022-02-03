import React from 'react';
import { DiaryEntry } from './DiaryEntry';

export const DiaryEntries = () => {
    const entries = [1,2,3,4,5,6,7,9];
    
    return (
        <div className='diary__entries'>
           
            {
                entries.map( value => (
                    <DiaryEntry key={ value } />
                ))
            }
        </div>
    );
};
