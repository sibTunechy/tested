import React from "react";
import { news } from "../data";

function News() {
  return (
    <>
      <h2 className="heading">News</h2>
      <div className="underline"></div>
      <div className="news-container">
        {news.map((main) => {
          const { id, headline, text, image } = main;
          return (
            <article className="news" key={id}>
              <img src={image} alt={headline} className="news-pic" />
              <div className="news-details">
                <h4 className="news-headline">{headline}</h4>
                <p className="news-text">
                  {text.substring(0, 100)}...
                  <button className="readmore-btn">
                    <a href="/">read more</a>
                  </button>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default News;
