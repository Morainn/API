import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const{id} = useParams();
    
    useEffect(()=> {
        axios.post('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete  = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            console.log(res);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-50'>
            <h2>Student Details</h2>
            <div className='d-flex justify-content-start'>
                <Link to={"/"} className='btn btn-success'>Log-Out</Link>
            </div>
            <div className='d-flex justify-content-end'>
                <Link to={"/create"} className='btn btn-success'>Create</Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.ID}</td>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>
                                <Link to={`/read/${student.ID}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/update/${student.ID}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={() => handleDelete(student.ID)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home