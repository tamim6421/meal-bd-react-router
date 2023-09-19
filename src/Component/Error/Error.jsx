import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
  
    return (
        <div>
             <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to= '/'> <button >back to home </button></Link>
      
        </div>
    );
};

export default Error;