import React from "react";
import Search from "./Search";

function AboutPage() {
  return (
    <div>
    <Search />
      <div className="container pt-5">
        <h3>About Page</h3>
        <p>
          Welcome to the ultimate movie app! MovieFlix is dedicated to bringing you the
          latest and greatest in film entertainment. Our app is designed to make
          it easy for you to discover new movies, read reviews and leave a rating. We have a huge selection of movies from all
          genres, including action, drama, comedy, and more. Our user-friendly
          interface allows you to search for movies by title. Plus,
          with our recommendations, you'll always
          know what to watch next.
          </p>
          <p>We're constantly updating our selection of movies and adding new
          features to make your experience even better. So, whether you're a
          movie buff or just love to watch the latest releases, our app is the
          perfect choice for you. Thank you for choosing our app as your go-to
          destination for discovering the best movie entertainment. We can't wait for you to start
          exploring the world of movies with us!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
