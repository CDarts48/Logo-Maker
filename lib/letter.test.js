const React = require('react');
const { render } = require('@testing-library/react');
const MyComponent = require('./MyComponent');

describe('MyComponent', () => {
  it('renders without errors', () => {
    render(React.createElement(MyComponent));
  });
});