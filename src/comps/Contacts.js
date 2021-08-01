import React from 'react'
import { FaCopy, FaEdit, FaMinusCircle } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import { removeItem, copyText } from '../services/actions/ActionType'
import { useDispatch, useSelector } from 'react-redux'

function Contacts({selected}) {
       const dispatch = useDispatch()
   const contact = useSelector((state) => state.contactReducer)
    return (
        <div className='list-container'>
                {
                        contact.contact.map((contact) => {
                            const { id, name, phone, email} = contact
                            return(
                                <div className='list-wrapper' key={id}>
                                    <div className='box-list'>
                                        <input type='checkbox' className='box'  checked={selected}/>
                                    </div>
                                    <div className='data'>
                                    <div className='list' >{name}
                                    <span className='copy'onClick={() => dispatch(copyText(name))} > <FaCopy  /></span>
                                    </div>
                                      <div className='list' >{phone}
                                    <span className='copy' onClick={() => dispatch(copyText(phone))}> <FaCopy  /></span>
                                    </div>
                                     <div className='list' >{email}
                                    <span className='copy' onClick={() => dispatch(copyText(email))}> <FaCopy  /></span>
                                    </div>
                                      </div>
                                       <div className='icons'>
                                         <Link to={`/edit/${id}`}>
                                           <FaEdit className='edit'/>
                                           </Link>
                                           <FaMinusCircle className='delete' onClick={() => dispatch(removeItem(id))}/>
                                       </div>
                                </div>
                            )
                        })
                    }
        </div>
    )
}

export default Contacts
