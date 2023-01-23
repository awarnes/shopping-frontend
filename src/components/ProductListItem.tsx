import {Button, Card, Icon, Image, Label } from 'semantic-ui-react';
import { getKeyFromName } from '../lib';
import {ItemType, Location, ProductListItemProps} from '../types/@types.components';

const itemTypeLabels = (itemTypes: ItemType[]) =>
  itemTypes.map((type: ItemType) => (<Label key={getKeyFromName(type.content)} icon={type.icon} content={type.content}/>))

const itemLocation = (location: Location) => {
  return (
    <p>Aisle: {location.aisle}, Bay: {location.bay}, Shelf: {location.shelf}</p>
  );
};

export default function ProductListItem(props: ProductListItemProps) {
  const {name, location, details, image, inList} = props;

  return (
    <Card>
      <Card.Content>
        <Image src={image}/>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{itemLocation(location)}</Card.Meta>
        <Card.Description>{details}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group>
          <Button
            basic
            color={inList ? 'red' : 'green'}
            icon={inList ? 'x' : 'add'}
            content={`${inList ? 'Remove from' : 'Add to'} List`}
          />
          <Button basic icon='x' content='Delete Product'/>
        </Button.Group>
      </Card.Content>
    </Card>
  )
};
