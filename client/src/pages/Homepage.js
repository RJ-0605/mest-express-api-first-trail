import React from 'react';
import Navbar from '../component/Navbar';

import Carousel from '../component/Carousel';
import Card from '../component/Card';
import Container from '../component/Container';
import Footer from '../component/Footer';
import ArticleCard from '../component/ArticleCard';
import Hero from '../component/Hero';
import { getAllPosts } from '../controllers/post_controller';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function Home() {
  
  let left = false;

  return (
    <>
      <Navbar />
      
      <Carousel />
      <Hero />
      
      
      
      <Container>
      
       <Card />
        {
          getAllPosts().map((post) => {
            left = !left;
            return <ArticleCard left={left} post={post} />
          })
        }
      </Container>
      <Footer />
    </>
  )
}
