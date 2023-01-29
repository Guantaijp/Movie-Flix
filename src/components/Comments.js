import React,{useState, useEffect} from "react";
import Search from "./Search";

function Comments() {
  
    const [getComments, setComments] = useState([]);
//fetched json data for the comments
    useEffect(() => {
        fetch("https://json-server-seven-orcin.vercel.app/movies")
        .then((res) => res.json())
        .then((data) => {
            setComments(data);
            console.log(data);
        });
    }, []);

    function handleDelete(id) {
        fetch(`https://json-server-seven-orcin.vercel.app/movies/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            
            setComments(getComments.filter((comment) => comment.id !== id));
        });
    }





  return (
    <div>
        <Search />
        <div className="container pt-5">
    <h3>Comments Page</h3>
    <div className="container mx-auto text-center row p-1 ">
            <table className="table table-striped table-hover table-bordered col-12">
                <thead>
                    <tr>
                       
                        <th scope="col">Movie Title</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {getComments.map((comment) => (
                        <tr key={comment.id}>
                            <td>{comment.movie}</td>
                            <td>{comment.comment}</td>
                            <td>{comment.rate}</td>
                            <td><button 
                            onClick={() => handleDelete(comment.id)}
                            className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
       
    
    </div>
    </div>
  );
}

export default Comments;
