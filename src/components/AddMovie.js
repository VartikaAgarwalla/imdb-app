import { useEffect, useRef, useState } from "react";

const AddMovie = () => {
    const titleRef = useRef('');
    const popularityRef = useRef('');
    const ratingRef = useRef('');
    const summaryRef = useRef('');

    useEffect(() => {
        console.log('Rerender'); 
    });

    const handleAddMovie = () => {
        const finalString = `Title: ${titleRef.current.value}, Popularity: ${popularityRef.current.value}, Rating: ${ratingRef.current.value}`;
        summaryRef.current.innerText = finalString;
        summaryRef.current.style.border = '1px solid red';
    }

    return (
        <div className="addMovie">
            <h1>Add New Movie</h1>
            <div className="row">
                <label>Title</label>
                <input ref={titleRef} type="text" />
            </div>
            <div className="row">
                <label>Popularity</label>
                <input ref={popularityRef} type="text" />
            </div>
            <div className="row">
                <label>Rating</label>
                <input ref={ratingRef} type="text" />
            </div>
            <button onClick={handleAddMovie}>Add</button>
            <div ref={summaryRef}></div>
        </div>
    );
}

// const AddMovie = () => {
//     // const [title, setTitle] = useState('');
//     // const [popularity, setPopularity] = useState('');
//     // const [rating, setRating] = useState('');

//     const [formData, setFormData] = useState({
//         title: '',
//         popularity: '',
//         rating: ''
//     });


//     const handleTitleChange = (e) => {
//         // setTitle(e.target.value);
//         setFormData((preVal) => {
//            return  ({
//                 ...preVal,
//                 title: e.target.value
//             })
//         });
//     };

//     const handlePopularityChange = (e) => {
//         // setPopularity(e.target.value);
//         setFormData((preVal) => ({
//             ...preVal,
//             popularity: e.target.value
//         }));
//     }

//     const handleRatingChange = (e) => {
//         // setRating(e.target.value);
//         setFormData((preVal) => ({
//             ...preVal,
//             rating: e.target.value
//         }));
//     }

//     const handleAddMovie = () => {
//         // console.log('Form Data', title, popularity, rating);
//         console.log('Form Data', formData)
//     }

//     useEffect(() => {
//         console.log('Rerender');
//     });

//     return (
//         <div className="addMovie">
//             <h1>Add New Movie</h1>
//             <div className="row">
//                 <label>Title</label>
//                 <input type="text" onChange={handleTitleChange}/>
//             </div>
//             <div className="row">
//                 <label>Popularity</label>
//                 <input type="text" onChange={handlePopularityChange}/>
//             </div>
//             <div className="row">
//                 <label>Rating</label>
//                 <input type="text" onChange={handleRatingChange}/>
//             </div>
//             <button onClick={handleAddMovie}>Add</button>
//         </div>
//     );
// }

export default AddMovie;