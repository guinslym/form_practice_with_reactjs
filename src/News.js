import React from "react";
import { Item } from "semantic-ui-react";
import Lorem from "react-lorem-component";

const description = [
  "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
  "tiny stature, and even others for their massive size."
].join(" ");

const ItemExampleDescriptions = props => (
  <Item.Group>
    <Item>
      <Item.Image size="small" src={props.image} />

      <Item.Content>
        <Item.Header as="a">{props.title}</Item.Header>
        <Item.Description>
          <p>{props.lorem}</p>
          <p>
            <Lorem count="1" paragraphUpperBound="1" />
          </p>
          <ul>
            <li>Guinsly Mondésir</li>
            <li>Male</li>
          </ul>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleDescriptions;
