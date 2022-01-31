import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { DiaryScreen } from '../components/diary/DiaryScreen';


export const AppRouter = () => {
  return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth" 
                        component={ AuthRouter }
                    />

                    <Route
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
