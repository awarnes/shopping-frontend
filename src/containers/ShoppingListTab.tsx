import {useReducer} from 'react';
import ShoppingListItem from '../components/ShoppingListItem';
import { ShoppingListAction, ShoppingListItemData } from '../types/@types.components';
import {getKeyFromName} from '../lib';

const initialState: ShoppingListItemData[] = [{
  name: 'Honey Crisp Apples',
  checked: true,
  location: {
    aisle: '12',
    bay: '14',
    shelf: '3'
  },
  types: [
    {icon: 'apple', content: 'Fruit', color: 'pink'}
  ]
}];

function shoppingListReducer(state: ShoppingListItemData[], action: ShoppingListAction): ShoppingListItemData[] {
  switch(action.type) {
    case 'addItem':
      return [...state, action.data];
    case 'toggleItemCheck':
      const newState = state.map((item: ShoppingListItemData) => {
        if (item.name === action.data) {
          item.checked = !item.checked;
        }
        return item;
      });
      return newState;
    default:
      return state;
  }
};

export default function ShoppingListTab() {
  const [shoppingList, shoppingListDispatch] = useReducer(shoppingListReducer, initialState);

  return (
    <div className='dwb-tab'>
      <h1>Here is a shopping list tab...</h1>

      <div>
        {shoppingList.map((item: ShoppingListItemData) => (
            <ShoppingListItem
              key={getKeyFromName(item.name)}
              name={item.name}
              checked={item.checked}
              location={item.location}
              types={item.types}
              handleCheckUpdate={() => shoppingListDispatch({type: 'toggleItemCheck', data: item.name})}
            />
          ))}
      </div>
    </div>
  )
};