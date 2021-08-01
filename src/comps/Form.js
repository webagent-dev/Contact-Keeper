import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { addContact } from '../services/actions/ActionType'
import { v4 as uuid } from 'uuid'
import { useHistory } from 'react-router-dom'

function Form() {
    // const New_Contact = useSelector((state) => state.contactReducer.contact)
    const dispatch = useDispatch()
    const History = useHistory()
    // console.log(New_Contact)
    const [name, setName ] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail ] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(addContact({
            id: uuid(),
            name: name,
            phone: phone,
            email: email
        }))
          setName('') 
          setPhone('')
          setEmail('')
          History.push('/')
    }
    return (
       <div className='form-container'>
            <div className='newContact'>
                <h1> Add New Contact</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-wrapper'>
                   <div className='input-wrapper'>
                       <label htmlFor='Fname'>Fname</label>
                       <input type='text' placeholder='Full-Name' value={name} onChange={(e) => setName(e.target.value)}/>
                   </div>
                    <div className='input-wrapper'>
                       <label htmlFor='Phone'>Phone</label>
                       <input type='text' placeholder='Your-Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                   </div>
                    <div className='input-wrapper'>
                       <label htmlFor='Email'>Email</label>
                       <input type='email' placeholder='Your-Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                   </div>
                </div>
                 <button className='btn' type='submit'>Add Contact</button>
            </form>
        </div>

    )
}

export default Form
