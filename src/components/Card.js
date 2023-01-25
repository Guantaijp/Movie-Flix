import React from "react";

function Card(){

    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState("");


    
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const inputRateHandler = (e) => {
    setRate(e.target.value);
  
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      comment: comment,
      rate: rate,
      movie: movie.original_title,
    };

    console.log(data);
    setEmail("");
    setComment("");
    setRate("");


    fetch("http://localhost:4001/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }
      );
      

  };


    return(
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default Card;