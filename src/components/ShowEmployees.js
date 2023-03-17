import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

//http://127.0.0.1:3000/contacts
const endpoint = 'http://127.0.0.1:3000/contacts'
const ShowEmployees =()=>{
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        getAllEmployees()
    },[]);

    const getAllEmployees = async () =>{
        const response = await axios.get(`${endpoint}`);
        setEmployees(response.data);
    }

    const deleteEmployee = async (id) =>{
        await axios.delete(`${endpoint}/employee/${id}`);
        getAllEmployees();

    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
            </div>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map((employee)=>(
                    <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.city}</td>
                        <td>{employee.country}</td>
                        <td>
                            <Link to={`/edit/${employee.id}`} className='btn btn-info'>Edit</Link>
                            <button onClick={ ()=>deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    )
}
export default ShowEmployees