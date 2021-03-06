import {useEffect, useState} from 'react';
import { firebase} from '../firebase/firebaseConfig';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { DiaryScreen } from '../components/diary/DiaryScreen';
import { login } from '../actions/auth';

import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRoute';

import { startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user)=>{
            
            if( user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid))
            }else{
                setIsLoggedIn(false);
            }

            setCheking(false);

        })
        
    }, [dispatch, setCheking, setIsLoggedIn]);

    if (checking){
        return(
            <h1>Wait...</h1>
        )
    }

    

  return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                        path="/auth" 
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRouter
                        isAuthenticated={isLoggedIn}
                        exact
                        path="/"
                        component={DiaryScreen}
                    />
                    <Redirect 
                        to="auth/login"
                    />
                </Switch>
            </div>
        </Router>
    )
};
