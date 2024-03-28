import React from 'react';
import { Outlet, useNavigation } from "react-router-dom";
import Header from '../Header/Header';
import './Home.css';
import Footer from '../Footer/Footer';


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <div className='color mb-6'>
            <Header></Header>
            {
                navigation.state === "loading"?
                 <p>Loading.....</p>:
                 <Outlet></Outlet>
            }
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;