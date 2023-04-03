import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const book = props.book;

    return (
        <div className='card-container'>
            
            <div className='desc'>
                <h2 className='emaillist'>
                    <Link to={`/show-book/${book._id}`} style={{color:'white'}}>{book.email}</Link>
                </h2>
            </div>
        </div>
    )
}

export default BookCard