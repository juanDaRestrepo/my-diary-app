import React from 'react';
import {Sidebar} from '../diary/Sidebar';
/* import { NothingSelected } from './NothingSelected'; */

export const DiaryScreen = () => {
  return <div className="diary__main-content">
            <Sidebar />
            <main>
                {/* <NothingSelected /> */}
            </main>
        </div>;
};
