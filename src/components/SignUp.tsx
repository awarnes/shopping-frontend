import { Button, Form } from 'semantic-ui-react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType, User } from '../types/@types.auth';

export default function SignUp() {
  const { signIn } = useAuth() as AuthContextType;

  const handleSignUp = () => {
    const newUser: User = {
      id: 1,
      name: 'Apple Sauce',
      email: 'warnes.alexander@gmail.com'
    }
    signIn(newUser);
  }

  return (
    <Form>
      <Form.Input
        icon='user'
        iconPosition='left'
        label='Email'
        placeholder='Email'
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Password'
        type='password'
      />
      <Form.Input
        icon='lock'
        iconPosition='left'
        label='Repeat Password'
        type='password'
      />
      <Button
        floated='right'
        content='Sign Up'
        icon='signup'
        size='big'
        onClick={handleSignUp}
      />
    </Form>
  );
}