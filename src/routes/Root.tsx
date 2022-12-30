import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/@types.auth';

export default function Root() {
  const {user = null} = useAuth() as AuthContextType;

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <h1>
        Here's the root page.
      </h1>
      <Link to='/'>Home</Link>
      <Link to='/sign-in'>Sign In</Link>
      <Outlet/>
    </div>
  );
}
