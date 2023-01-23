import { useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import {Menu, Segment} from 'semantic-ui-react';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../types/@types.auth';
import './UserRoute.css';

const MENU_ITEM_SHOPPING = 'shopping';
const MENU_ITEM_PRODUCTS = 'products';
const MENU_ITEM_SETTINGS = 'settings';

export default function UserRoute(props: any) {
  const {user, signOut} = useAuth() as AuthContextType;
  const [activeItem, setActiveItem] = useState(MENU_ITEM_SHOPPING);

  if (!user) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <Segment attached='top'>
        <Outlet />
      </Segment>
      <Menu widths={3} className='mobile-footer'>
        <Menu.Item
          name={MENU_ITEM_SHOPPING}
          as={Link}
          to={`/user/${user.id}/shopping`}
          active={activeItem === MENU_ITEM_SHOPPING}
          onClick={() => setActiveItem(MENU_ITEM_SHOPPING)}
          >
          Shopping
        </Menu.Item>

        <Menu.Item
          name={MENU_ITEM_PRODUCTS}
          as={Link}
          to={`/user/${user.id}/products`}
          active={activeItem === MENU_ITEM_PRODUCTS}
          onClick={() => setActiveItem(MENU_ITEM_PRODUCTS)}
          >
          Products
        </Menu.Item>

        <Menu.Item
          name={MENU_ITEM_SETTINGS}
          as={Link}
          to={`/user/${user.id}/settings`}
          active={activeItem === MENU_ITEM_SETTINGS}
          onClick={() => setActiveItem(MENU_ITEM_SETTINGS)}
          >
          Settings
        </Menu.Item>
      </Menu>
    </div>
  )
}