import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { DiaryEntries } from './DiaryEntries';

export const Sidebar = () => {

    const {name} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch( startLogout())
    } 
  return (
        <aside className='diary__sidebar'>
            <div className='diary__sidebar-navbar'>
                <h3 className='mt-5'>
                    <i className='far fa-moon' />
                    <span> {name}</span>
                </h3>

                <button 
                    className='btn'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div className='diary__new-entry'>
                <i className='far fa-calendar-plus fa-5x'/>
                <p className='mt-5'>
                    New entry
                </p>
            </div>

            <DiaryEntries />
        </aside>
    )
};
