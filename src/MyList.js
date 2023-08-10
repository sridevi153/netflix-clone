import React from 'react';
import requests from './requests';
import Nav from './Nav';
import Cards from './Cards';

function MyList() {
  return (
    <div>
        <Nav />
      <Cards fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default MyList;
