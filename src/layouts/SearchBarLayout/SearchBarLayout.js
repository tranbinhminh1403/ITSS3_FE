import React from 'react';
import Footer from '../../components/HeaderFooter/Footer';
import Header from '../../components/HeaderFooter/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchBarLayout({ children }) {
  return (
    <div>
      <Header />
      <SearchBar />
      {children}
      <Footer marginTop={20} />
    </div>
  );
}
