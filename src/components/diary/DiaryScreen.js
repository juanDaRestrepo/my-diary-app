import React from 'react';
import {Sidebar} from '../diary/Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
/* import { NothingSelected } from './NothingSelected'; */

export const DiaryScreen = () => {
  return <div className="diary__main-content">
            <Sidebar />
            <main>
                {/* <NothingSelected /> */}
                <NoteScreen />
            </main>
        </div>;
};
