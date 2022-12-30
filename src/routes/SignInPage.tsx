import React from 'react';
import {Button} from 'semantic-ui-react';
import {useAuth} from '../hooks/useAuth';
import { AuthContextType, User } from '../types/@types.auth';

export default function SignIn() {
  const {user, signIn} = useAuth() as AuthContextType;

  const handleSignIn = () => {
    const newUser: User = {
      id: 1,
      name: 'Apple Sauce',
      email: 'warnes.alexander@gmail.com'
    }
    signIn(newUser);
  }

  return (
    <div>
      <h1>This is a Sign In page.</h1>
      <Button
        content='Sign In'
        onClick={handleSignIn}
      />
    </div>
  );
}