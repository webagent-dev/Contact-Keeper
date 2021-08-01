import React,{ useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editItem, updateItem } from '../services/actions/ActionType'


function Edit() {
      const [name, setName ] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail ] = useState('')
    const { id } = useParams()
    const History = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contactReducer.onEdit)
    useEffect(() => {
        if(contact !== null){
             setName(contact.name)
            setPhone(contact.phone)
            setEmail(contact.email)
        }
        dispatch(editItem(id))
    },[contact])
    
    const onUpdateContact = e => {
        e.preventDefault()
       const updateContact = Object.assign(contact,{
           name: name,
           phone: phone,
           email: email
       })
       dispatch(updateItem(updateContact))
       History.push('/')
    }
    return (
       <div className='form-container color'>
            <div className='newContact'>
                <h1> Editing Contact</h1>
            </div>
            <form onSubmit={(e) => onUpdateContact()}>
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
                 <button className='btn' type='submit'>Edit Contact</button>
            </form>
        </div>

    )
}

export default Edit
