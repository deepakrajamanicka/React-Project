import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import greatImage from './great.jpg';
import mockingImage from './Mocking.webp';
import alchemistImage from './Alchemist.jpg';
import daVinciImage from './Da Vinci.jpeg';
import kanaImage from './kana.webp';
import kanmaniImage from './kanmani.jpg';
import sujathaImage from './sujatha.jpg'; // Adjust the file path accordingly
import catcherImage from './The Catcher.jpg'; // Adjust the file path accordingly
import vilithiruImage from './vilithiru.jpg'; // Adjust the file path accordingly
import  book from './book.jpg';
const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      imageUrl: greatImage,
      link: '/reviews/great-gatsby',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      imageUrl: mockingImage,
      link: '/reviews/to-kill-a-mockingbird',
    },
  ];

  const topReviewBooks = [
    {
      id: 3,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      imageUrl: catcherImage, 
      link: '/reviews/the-catcher-in-the-rye',
    },
    {
      id: 4,
      title: '1984',
      author: 'George Orwell',
      imageUrl: book, 
      link: '/reviews/1984',
    },
  ];

  const recentBooks = [
    {
      id: 5,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      imageUrl: alchemistImage, // Placeholder image
      link: '/reviews/the-alchemist',
    },
    {
      id: 6,
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      imageUrl: daVinciImage , // Placeholder image
      link: '/reviews/the-da-vinci-code',
    },
  ];

  const tamilBooks = [
    {
      id: 7,
      title: 'பூமிக்குத் தூக்கி',
      author: 'சுஜாதா',
      imageUrl: sujathaImage, // Placeholder image
      link: '/reviews/poomic-kuth-thooki',
    },
    {
      id: 8,
      title: 'கனா மனம்',
      author: 'பரதி',
      imageUrl: kanaImage , // Placeholder image
      link: '/reviews/kana-manam',
    },
    {
      id: 9,
      title: 'விழித்திரு',
      author: 'பத்மானபான்',
      imageUrl: vilithiruImage, 
      link: '/reviews/vizhithiru',
    },
    {
      id: 10,
      title: 'கண்மணி',
      author: 'சுஜாதா',
      imageUrl: kanmaniImage,
      link: '/reviews/kanmani',
    },

  ];

  const renderBooks = (books) => {
    return books.map((book) => (
      <Grid item key={book.id} xs={12} sm={6} md={6}>
        <Card>
          <CardMedia component="img" height="200" image={book.imageUrl} alt={book.title} />
          <CardContent className="text-center">
            <Typography variant="h6" component="div">
              {book.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {book.author}
            </Typography>
            <Link to="/Login" className="text-indigo-400 hover:underline">
              Read Review
            </Link>
          </CardContent>
        </Card>
      </Grid>
    ));
  };
  
  return (
    <div className="grid grid-cols-2 bg-gray-900 h-screen">
      <Navbar />
      <div className="bg-gray-900 flex flex-col justify-center px-5">
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">BOOKS 69 is Book review webpage you can get books and review through our platform.</span>
        </h1>
        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Welcome to BOOKS 69.com, your go-to destination for insightful and honest book reviews. Whether you're an avid reader or just starting your literary journey, our community is here to guide you to your next great read.
        </p>
        <div className="mt-6">
          <Link to="/reviews" className="text-indigo-400 font-semibold text-lg hover:underline">
          Explore Reviews
          </Link>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-white">Featured Books</h2>
          <Grid container spacing={4}>
            {renderBooks(featuredBooks)}
          </Grid>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-white">Top Review Books</h2>
          <Grid container spacing={4}>
            {renderBooks(topReviewBooks)}
          </Grid>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-white">Recent Books</h2>
          <Grid container spacing={4}>
            {renderBooks(recentBooks)}
          </Grid>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-white">Tamil Books</h2>
          <Grid container spacing={4}>
            {renderBooks(tamilBooks)}
          </Grid>
        </section>
      </div>
      <div className="flex flex-col justify-center">
      </div>
      <Footer />
    </div>
  );
};

export default Home;

