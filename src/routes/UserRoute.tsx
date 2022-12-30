import React, { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import {Menu, Segment} from 'semantic-ui-react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/@types.auth';

export default function UserRoute(props: any) {
  const {user, signOut} = useAuth() as AuthContextType;
  const [activeItem, setActiveItem] = useState('shopping');

  if (!user) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <Segment attached='top'>
        <Outlet />
      </Segment>
      <Menu>
        <Menu.Item
          name='shopping'
          active={activeItem === 'shopping'}
          onClick={() => setActiveItem('shopping')}
          >
            <Link to={`/user/${user.id}/shopping`}>Shopping</Link>
        </Menu.Item>

        <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={() => setActiveItem('products')}
          >
            <Link to={`/user/${user.id}/products`}>Products</Link>
        </Menu.Item>

        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={() => setActiveItem('settings')}
          >
            <Link to={`/user/${user.id}/settings`}>Settings</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}