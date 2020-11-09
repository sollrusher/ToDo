import React from 'react';
import Credits from '../credits/credits';
import Header from '../header/header';
import Footer from '../todo/footer/footer';
import Head from '../todo/head/head';
import Main from '../todo/main/main';

export default function App() {
  return (
    <div>
      <Header />
      <div className="todo">
        <Head />
        <Main />
        <Footer />
      </div>
      <Credits />
    </div>
  );
}
