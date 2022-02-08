import React from 'react';
import { useSelector } from 'react-redux';

import {Sidebar} from '../diary/Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';

export const DiaryScreen = () => {

    const {active} = useSelector( state => state.notes);

    return <div className="diary__main-content">
                <Sidebar />
                <main>
                    {
                      (active)
                        ?( <NoteScreen />)
                        :( <NothingSelected />)  
                    }
                    
                </main>
        </div>;
};
