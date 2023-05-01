import "./App.css";
import BookCard from "./components/BookCard";
import Header from "./components/Header";
import Hero from "./components/Hero";

import axios from 'axios';
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
      const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
const url =
  "https://www.googleapis.com/books/v1/volumes?q=" +
  query +
  "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
  "&maxResults=40";

  const fetchBooks = async () => {
    
    const res = await fetch(url);

    const data = await res.json();
    // console.log(data);
    setBooks(data.items);
  };
  useEffect(() => {
    const bookCardElement = document.getElementById("book-card");
    if (bookCardElement) {
      bookCardElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [books]);
 
  return (
    <div className="App">
      <Header />
      <>
        <div className="hero">
          <div className="text-hero">
            <h1>What do you think is the value of reading 🤔?</h1>
            <p>
              Reading is a wonderful activity that provides numerous benefits
              for individuals of all ages. For children, reading can help
              improve their cognitive and language skills, as well as expand
              their imaginations and develop a love for learning.
            </p>
            <div className="s">
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                type="text"
                placeholder="search your books, what you need ? "
              />
              <button className="b" onClick={fetchBooks}>
                search
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img src="https://th.bing.com/th/id/R.7106745c8a19468529d40799c5eb23ec?rik=Y%2bTcqbl5FdbMlg&pid=ImgRaw&r=0" />
          </div>
        </div>
      </>
      {books ? (
        <div id="book-card">
          <BookCard books={books} />
        </div>
      ) : (
        <h1>Not Found</h1>
      )}

      <Footer />
    </div>
  );
}

export default App;
