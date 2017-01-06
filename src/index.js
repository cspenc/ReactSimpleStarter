import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
// make the component

const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// show it on the page
// second argument is div that is on index

ReactDOM.render(<App />, document.querySelector('.container'))
