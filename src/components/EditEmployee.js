import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:3000/contacts'

const EditEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
       
        await axios.put(`${endpoint}/${id}/update`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            city: city,
            country: country
        })
        navigate('/')
    }

    useEffect( () =>{

        const getEmployeeById = async () => {
            const response = await axios.get(`${endpoint}/${id}`)
            const {data} = response
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setEmail(data.email)
            setPhone(data.phone)
            setCity(data.city)
            setCountry(data.country)
        }
        getEmployeeById()
        
    }, [id])
  return (
    <div>
        <h2>Edit employee</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={firstName} 
                    onChange={ (e)=> setFirstName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input 
                    value={lastName} 
                    onChange={ (e)=> setLastName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input 
                    value={email} 
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Phone</label>
                <input 
                    value={phone} 
                    onChange={ (e)=> setPhone(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>City</label>
                <input 
                    value={city} 
                    onChange={ (e)=> setCity(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Country</label>
                <input 
                    value={country} 
                    onChange={ (e)=> setCountry(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Update</button>
        </form>
    </div>
  )
}

export default EditEmployee