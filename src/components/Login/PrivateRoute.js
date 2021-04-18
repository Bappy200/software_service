import React, { useContext } from 'react'

import {
    Redirect,
    Route
  } from "react-router-dom";
import { UserContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [loginUser] = useContext(UserContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loginUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute

