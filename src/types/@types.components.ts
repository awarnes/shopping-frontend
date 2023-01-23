import { SemanticCOLORS } from "semantic-ui-react";

export type ShoppingListItemProps = {
  name: string;
  types: ItemType[];
  location: Location;
  checked: boolean | undefined;
};

export type ShoppingListItemData = {
  name: string;
  types: ItemType[];
  location: Location;
  checked: boolean | undefined;
}

export type ProductListItemProps = {
  name: string;
  types: ItemType[];
  location: Location;
  details: string;
  image: string;
  inList: boolean;
};

export type ProductListItemData = {
  name: string;
  types: ItemType[];
  location: Location;
  details: string;
  image: string;
};

export type ProductListAction = {
  type: string;
  data: any;
}

export type ItemType = {
  icon: string;
  content: string;
  color: SemanticCOLORS;
}

export type Location = {
  aisle: string;
  side?: string;
  bay: string;
  shelf: string;
}

export type ShoppingListAction = {
  type: string;
  data: any
}