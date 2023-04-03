import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        email: '',
        // isbn: '',
        // author: '',
        // description: '',
        // published_date: '',
        // publisher: '',
    })
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8082/api/books', book).then((res) => {
            setBook({
                // title: '',
                email: '',
                // author: '',
                // description: '',
                // published_date: '',
                // publisher: '',
            });
            navigate('/')
        }).catch((err) => {
            console.log('Error in CreateBook!', err.message);
        })
    }
    return (
        <div className='CreateBook'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show Email List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Email</h1>
                        <p className='lead text-center'>Add new email</p>

                        <form noValidate onSubmit={onSubmit}>
                            {/* <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Title of the Book'
                                    name='title'
                                    className='form-control'
                                    value={book.title}
                                    onChange={onChange}
                                />
                            </div>
                            <br /> */}

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='enter email address'
                                    name='email'
                                    className='form-control'
                                    value={book.email}
                                    onChange={onChange}
                                />
                            </div>

                            {/* <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Author'
                                    name='author'
                                    className='form-control'
                                    value={book.author}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Describe this book'
                                    name='description'
                                    className='form-control'
                                    value={book.description}
                                    onChange={onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='published_date'
                                    name='published_date'
                                    className='form-control'
                                    value={book.published_date}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Publisher of this Book'
                                    name='publisher'
                                    className='form-control'
                                    value={book.publisher}
                                    onChange={onChange}
                                />
                            </div> */}

                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBook