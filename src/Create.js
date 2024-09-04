import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Validation from './SignupValidation';


function Create() {
    const [values, setValues] = useState({
        name:'',
        email:''
    
    });

    const [errors, setErrors] = useState({})
    const{id} = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.email === "")
        {
            axios.post('http://localhost:8081/student', values)
            .then(res => {
                navigate('/home')
            })
            .catch(err => console.log(err));
        }
    }
    
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-50'>
            
            <form action='' onSubmit={handleSubmit}>
            <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='name' placeholder='Enter Name' name='name'
                    onChange={e => setValues({...values, name: e.target.value})} className='form-control rounded-0'/>
                      {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={e => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Add Student</button>
                <br/>
                <Link to='/home' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Home</Link>
            </form>
        </div>
    </div>

  )
}

export default Create