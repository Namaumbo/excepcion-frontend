import React, { Component } from "react";
import {Menu, Button, Segment,Image } from "semantic-ui-react";
import ExceptionalLogo from "../Asserts/Logo.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentNav from "./ParentNav";
import Home from "./Home";
import NoPage from "./NoPage";
import SongList from "./SongList";
import Playing from "./Playing";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { icon }) => this.setState({ activeItem: icon });

  render() {
    const { activeItem } = this.state;

    return (
      <>
      <div>
      <Segment secondary >
  
        
      </Segment>
      </div>
      
      </>
      
    );
  }
}


