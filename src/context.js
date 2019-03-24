import React, { Component } from 'react'
import {createContext} from 'react';
const {Provider, Consumer} = createContext();

class ProductProvider extends Component {
  render() {
    return (
      <Provider value="context">
        {this.props.childrens}
      </Provider>
    );
  }
}

//const ProductConsumer =ProductContext.Consumer;

export {Provider, Consumer};