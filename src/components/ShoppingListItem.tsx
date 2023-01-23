import {Button, Container, Grid, Header, Icon, Label } from 'semantic-ui-react';
import { getKeyFromName } from '../lib';
import {ItemType, Location, ShoppingListItemProps} from '../types/@types.components';
import './ShoppingListItem.css';

const itemTypeLabels = (itemTypes: ItemType[]) =>
  itemTypes.map((type: ItemType) => (<Label key={getKeyFromName(type.content)} icon={type.icon} content={type.content}/>))

const itemLocation = (location: Location) => {
  return (
    <p>Aisle: {location.aisle}, Bay: {location.bay}, Shelf: {location.shelf}</p>
  );
};

export default function ShoppingListItem(props: any) {
  const {name, location, checked, types, handleCheckUpdate} = props;

  return (
    <Grid divided centered verticalAlign='middle' className='shopping-list-item'>
      <Grid.Row>
        <Grid.Column width={1}>
          <Button
            circular
            color={types[0].color}
            onClick={handleCheckUpdate}
            icon={checked ? <Icon name='check square outline' size='huge' /> : <Icon name='square outline' size='huge' />}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Header as='h3'>
            {name}
          </Header>
          <Container>
            {itemLocation(location)}
          </Container>
          <Container>
            {itemTypeLabels(types)}
          </Container>
        </Grid.Column>
        <Grid.Column width={1} floated='right'>
          <Icon name='align justify' size='huge' color='grey' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};
