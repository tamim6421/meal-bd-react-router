import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
          
            <Header></Header>
            <h3>This is Home Component</h3>
               

            <hr />
            {
                navigation.state === "loading" ? <p>Loading.....</p>: <Outlet></Outlet>
            }
            
            <hr />
            <Footer></Footer>

        </div>
    );
};

export default Home;