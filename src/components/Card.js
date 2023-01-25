import React,{useState} from "react";
import CustomPopup from "./CustomPopup";

function Card({movie}){

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

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };


  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
 


    return(
      <>
         <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Movie Details"

      >
        <h3>{movie.original_title}</h3>
        <h5>{movie.overview}</h5>
        <p> Release Date:{movie.release_date}</p>
        <p> Rating:{movie.vote_average}</p>
  <form 
onSubmit={submitHandler}
  >
  <div className="mb-2">
    <input
    value={email}
    onChange={inputEmailHandler}
     type="email"
     placeholder= "Enter your eamil..."
      className="form-control" 
      id="InputEmail1" 
      aria-describedby="emailHelp"/>
    
  </div>
  <div 
  className="mb-2">
    <input 
    value={comment}
    onChange={inputCommentHandler}
    placeholder= "Your Movie review..." 
    className="form-control"
    
  id="comment"/>
  </div>

  <div className="mb-1 ">
    <input 
     value={rate}
     onChange={inputRateHandler}
     type="number "
     

     placeholder="Your Movie rate..." 
     className="form-control" 
     id="rate"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </CustomPopup>

      <div 
    onClick={() => setVisibility(true)}
    className="card m-3" 
    
    style={{ width: "18rem" }}>


      <img
        src={IMAGE_URL + movie.poster_path}
        className="card-img-top"
        alt="..."
      />
    
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5> 
    </div>
   </div>


      </>
    )
}

export default Card;