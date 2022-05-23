import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loding.css'

const Loading = () => {
    return (
        <div className='loding'>
            <div className='d-flex mx auto'>
              <Spinner animation="border" variant="primary" />
              </div>
        </div>
    );
};

export default Loading;