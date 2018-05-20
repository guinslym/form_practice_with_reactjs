import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import News from "./News";
import { Form } from "semantic-ui-react";
import {
  Container,
  Header,
  Divider,
  Grid,
  Image,
  Menu
} from "semantic-ui-react";

const description = [
  "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their",
  "tiny stature, and even others for their massive size."
].join(" ");

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
          <Form.Select
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: "Cute Dog",
          id: 3,
          image: "https://placeimg.com/640/480/people",
          lorem:
            "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their"
        },
        {
          title: "Cute Dog 3",
          id: 1,
          image: "https://placeimg.com/640/480/arch",
          lorem:
            "Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their"
        }
      ]
    };
  }

  componentWillMount() {
    console.log("componentWillMount right now");
  }

  deleting(id) {
    console.log("deleting");
  }

  add(text) {
    console.log("adding");
  }
  render() {
    return (
      <div style={styles}>
        <Container textAlign="justified">
          <Divider style={{ margin: "20px 0 80px 0 " }} />
          <FormExampleSubcomponentControl />
          <Divider style={{ margin: "80px 0 " }} />
          {this.state.news.map(item => (
            <News
              key={item.id}
              lorem={item.lorem}
              title={item.title}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
