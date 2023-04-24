// Lab question 3: Create a pure component that renders a list of items. The component should only rerender when the list of items changes.
import React, { PureComponent } from 'react';

export class Lab3PureComponent extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }

  shouldComponentUpdate(nextProps) {
    return this.props.items !== nextProps.items;
  }
}