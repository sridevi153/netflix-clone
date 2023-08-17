import React from 'react';
import requests from './requests';
import Nav from './Nav';
import Cards from './Cards';

function MyList() {
  return (
    <div style={{marginRight:'30px'}}>
        <Nav />
      <Cards fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default MyList;
