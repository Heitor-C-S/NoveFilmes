import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import QuemSomosContent from './quemSomosContent';

export default function Page(){
    return(
        <div>
            <NavBar></NavBar>
            <QuemSomosContent></QuemSomosContent>
            <Footer></Footer>
        </div>
    )
}