import React, { useState } from "react";

const Hero = () => {
    const [query, setQuery] = useState("");
    console.log(query);
  return (
    <div className="hero">
      <div className="text-hero">
        <h1>
          Have you ever read a book that changed <br /> your perspective on
          something?
        </h1>
        <p>
          Reading is a wonderful activity that provides numerous benefits for
          individuals of all ages. For children, reading can help improve their
          cognitive and language skills, as well as expand their imaginations
          and develop a love for learning. For adults, reading can be a great
          way to unwind, relax, and escape from the stresses of daily life.
        </p>
        <div className="s">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="serach your book "
          />
          <button>search</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="https://th.bing.com/th/id/R.7106745c8a19468529d40799c5eb23ec?rik=Y%2bTcqbl5FdbMlg&pid=ImgRaw&r=0" />
      </div>
    </div>
  );
};

export default Hero;
