import React, { useState, Component } from "react";
import { Button, Menu, Grid, Image , Segment, Input, Container, Header, Divider} from "semantic-ui-react";
import styles from "./Landing.module.css";


export function Landing() {
 
  return (
    <div className={styles.full_height}>

      {/* MENU */}
           <Menu size='small'>
        <Menu.Item
          name='home'active

          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        />
        <Menu.Item
          name='character sheets'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        />
            <Menu.Item
          name='scenarios'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        />
            <Menu.Item
          name='realise notes'
          // active={activeItem === 'messages'}
          // onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
        <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
         
          <Button primary >Log In</Button>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

{/* END OF MENU */}
<Divider hidden />
<Divider hidden />
<Divider hidden />
<Divider hidden />
<Divider hidden />
<Divider hidden />
<Divider hidden />
<Divider hidden />


<Container text>
    <Header as='h2'>Create Free Account!</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et

    </p>
    <Button primary>Create Free Account</Button>

  </Container>


  {/* DIVIDER */}
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />



      <Grid columns={3} divided>
    <Grid.Row stretched>

      {/* First column */}
      <Grid.Column>

        <Segment>
          <h1>Realise Notes</h1>
          <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
      <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
      <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
        </Segment>

      </Grid.Column>

  {/* Second Column */}
      <Grid.Column>
        <Segment>
          <h1>New Characters </h1>
          <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
        </Segment>
        <Segment>
        <h1>New Stories</h1>
        <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
        </Segment>
      </Grid.Column>
  {/* Third Column */}
      <Grid.Column>

        <Segment> 
        <h1>What we do</h1>
        <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />

        </Segment>

        <Segment>
        <h1>Support us</h1>
        <Image
    src='https://react.semantic-ui.com/images/wireframe/image-text.png'
    as='a'
    href='http://google.com'
    target='_blank'
    fluid
  />
        </Segment>
        <Segment>
        <h1>Find us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, neque! Sed voluptatibus, quis alias totam incidunt nisi enim, quod blanditiis quam consequatur doloribus nemo odio facere repellat sequi exercitationem itaque.
        </p>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    </div>
  
  );
}
