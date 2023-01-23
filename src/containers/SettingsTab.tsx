import { Button } from 'semantic-ui-react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/@types.auth';

export default function SettingsTab() {
  const {signOut} = useAuth() as AuthContextType;

  return (
    <div>
      <h1>Here are the settings tab...</h1>
      <Button
        content='Sign Out'
        onClick={signOut}
      />
    </div>
  )
};