import '../assets/displayList.css'

import React from 'react';
import Navbar from '../components/navbar';
import ModelDisplayList from '../components/modelDisplayList';

const DisplayList = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className="container-body">
        <div className="content">

          <ModelDisplayList />

        </div>
      </div>
    </div>
  );
}

export default DisplayList;
