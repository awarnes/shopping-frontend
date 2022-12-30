export interface User {
  id: number
  name: string
  email: string
}

export type AuthContextType = {
  user?: User;
  signIn: (data: User) => void;
  signOut: () => void;
}