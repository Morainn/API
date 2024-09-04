import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
    const{id} = useParams();
    const [student, setStudent] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err));
    },[])
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-50'>
            <div className='p-2'>     
                <h2>Student Details</h2>
                <h2>{student.ID}</h2>
                <h2>{student.Name}</h2>
                <h2>{student.Email}</h2>
            </div>
            <Link to={'/home'} className='btn btn-primary me-2'>Back</Link>
            <Link to={`/update/${student.ID}`} className='btn btn-info'>Edit</Link>    
        </div>
    </div>

  )
}

export default Read