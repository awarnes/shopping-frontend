import {Button, Form, Header, Segment} from 'semantic-ui-react';
import {useAuth} from '../hooks/useAuth';
import { AuthContextType, User } from '../types/@types.auth';

export default function SignIn() {
  const {signIn} = useAuth() as AuthContextType;

  const handleSignIn = () => {
    const newUser: User = {
      id: 1,
      name: 'Apple Sauce',
      email: 'warnes.alexander@gmail.com'
    }
    signIn(newUser);
  }

  return (
    <Segment textAlign='center'>
      <Header as='h2'>
        Sign into your account
      </Header>
      <Form size='large'>
        <Form.Input
          fluid
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
        <Button
          content='Sign In'
          primary
          onClick={handleSignIn}
        />
      </Form>
    </Segment>
  );
}