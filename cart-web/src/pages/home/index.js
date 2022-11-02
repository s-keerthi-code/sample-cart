import React, { useState } from "react";
import  { Layout, Grid }  from 'antd';
import Header from '../../components/header';
import Footer from '../../components/footer';
import LatestProducts from '../../components/latestProducts'

const Home = () => {
   return(
    <Layout>
       <Header />
       <Grid>
           Latest Products
           <LatestProducts />
        </Grid>
       <Footer/>
    </Layout>

   );
};

export default Home;