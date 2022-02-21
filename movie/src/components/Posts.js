import React from 'react'

export const Posts = (props) => {
 const MyContent = props.myContent;
  return (
    <div className='List-group mb-4'>
        {props.movies.map((movie,index) => (
            <div className="image-container d-flex justify-conent-start">
                <img src = {movie.Poster} alt="movie"></img>
                <div onClick={()=>props.handleMyContentClick()}  className="overlay d-flex align-items-center justify-content-center " >
                    <MyContent/>
                </div>
                       
            </div>
            
        ))}
    </div>
  )
}

export default Posts;
