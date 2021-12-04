import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>home</h2>
            <Link to='detail'>detail</Link>
        </div>
    );
};

export default Home;