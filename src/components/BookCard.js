import React, { useState, useEffect } from "react";

const BookCard = ({ books }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books.length > 0) {
      setLoading(false);
    }
  }, [books]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>enter book to serach...</p>
      </div>
    );
  }

  return (
    <>
      {books.length > 0 ? (
        <h1 className="headletter">Available Books in Google</h1>
      ) : (
        <h1 className="headletter">Search Your Books today !</h1>
      )}
      <div className="book-row">
        {books.map((item, key) => {
          let thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          if (thumbnail != undefined) {
          }
          return (
            <div className="book-card" key={item.id}>
              <div>
                <img src={thumbnail} />
              </div>
              <div className="dec">
                <h3> {item.volumeInfo.title.substring(0, 24)}</h3>
                {item.volumeInfo.authors ? (
                  <p className="author">{item.volumeInfo.authors}</p>
                ) : (
                  <p className="error">Author not found</p>
                )}
              </div>
              <div>
                <a
                  className="as"
                  target="_blank"
                  href={item.volumeInfo.previewLink}
                >
                  <button>Preview</button>
                </a>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookCard;
