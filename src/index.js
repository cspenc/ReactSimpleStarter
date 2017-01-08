import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCLVi6RhA8MtQZ0jHBU-ZwCEArURcEL6QY';

// Create a new component. This component should produce some HTML
// make the component

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
// show it on the page
// second argument is div that is on index

ReactDOM.render(<App />, document.querySelector('.container'))
