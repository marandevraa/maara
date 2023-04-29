import HeroBanner from "@/components/HeroBanner";
import React from "react";

import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div className="main">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      
      <div className="products-heading">
     </div>
    </div>
  ); 
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
