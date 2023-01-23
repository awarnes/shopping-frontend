import { useReducer } from 'react';
import {Card} from 'semantic-ui-react';
import ProductListItem from '../components/ProductListItem';
import { ProductListItemData, ProductListAction } from '../types/@types.components';
import { SemanticCOLORS } from 'semantic-ui-react';
import carrots from '../images/products/carrots.jpeg';
import honeydew from '../images/products/honeydew.webp';
import eggs from '../images/products/eggs.webp';
import { getKeyFromName } from '../lib';

const initialState = [
  {
    name: 'Honey Dew Melon',
    image: honeydew,
    types: [{icon: 'apple', color: 'pink' as SemanticCOLORS, content: 'Fruit'}],
    location: {
      aisle: '12',
      bay: '3',
      shelf: '24'
    },
    details: 'Tasty green melon.'
  },
  {
    name: 'Carrots',
    image: carrots,
    types: [{icon: 'leaf', color: 'green' as SemanticCOLORS, content: 'Vegetable'}],
    location: {
      aisle: '45',
      bay: '6',
      shelf: '29'
    },
    details: 'Delicious orange carrots.'
  },
  {
    name: 'Eggs',
    image: eggs,
    types: [{icon: 'cog', color: 'blue' as SemanticCOLORS, content: 'Dairy'}],
    location: {
      aisle: '1',
      bay: '8',
      shelf: '5'
    },
    details: 'Farm fresh eggs.'
  }
];

function productListReducer(state: ProductListItemData[], action: ProductListAction) {
  switch(action.type) {
    default:
      return state;
  }
}

export default function ProductListTab() {
  const [productList, productListDispatcher] = useReducer(productListReducer, initialState);

  return (
    <Card.Group>
      {productList.map((product: ProductListItemData) => (
        <ProductListItem
          key={getKeyFromName(product.name)}
          inList={product.name === 'Carrots'}
          {...product}
        />
      ))}
    </Card.Group>
  )
};