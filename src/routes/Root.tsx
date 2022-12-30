import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Grid, Modal, Segment } from 'semantic-ui-react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/@types.auth';

export default function Root() {
  const { user } = useAuth() as AuthContextType;
  const [registerOpen, setRegisterOpen] = useState(false);

  if (user) {
    return <Navigate to={`/user/${user.id}/shopping`} />;
  }

  return (
    <div>
      <Segment raised>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column verticalAlign='middle'>
              <SignIn />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment attached='top'>New user?</Segment>
              <Button
                attached='bottom'
                content='Sign Up'
                onClick={() => setRegisterOpen(true)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Modal
        onClose={() => setRegisterOpen(false)}
        onOpen={() => setRegisterOpen(true)}
        open={registerOpen}
      >
        <Modal.Header>Register an acccount</Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Column verticalAlign='middle'>
              <SignUp />
            </Grid.Column>
          </Grid>
        </Modal.Content>
      </Modal>
    </div>
  );
}
