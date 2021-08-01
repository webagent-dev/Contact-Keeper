import React, { useState, useEffect}  from 'react'
import Contacts from './Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { checkItem } from '../services/actions/ActionType'




function App() {
    const [selectAll, setSelectAll] = useState(false)
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contactReducer.contact)
    const checkContact = useSelector((state) => state.contactReducer.selectedContact)
    console.log(checkContact)

    useEffect(() => {
        if(selectAll){
        dispatch(checkItem(contact.map((contact) => contact.id)))
        }
    },[selectAll])
      return (
        <div className='contact-container'>
         
            <div className='contact-wrapper'>
               { checkContact.length > 0 && <button className='btn delete' style={{color:'red',backGround:'transparent', marginBottom:'20px'}} >Delete All</button>}
               <div className='section'>
                     <div className='box-center'>
                        <input type='checkbox' className='box' value={selectAll} checked={selectAll}
                        onChange={() => setSelectAll(!selectAll)}/>
                    </div>
               
                <div className='list-header'>
                    <div className='name'>
                        <h2>Name</h2>
                    </div>
                    <div className='phone'>
                        <h2>Phone</h2>
                    </div>
                    <div className='email'>
                        <h2>Email</h2>
                    </div>
                </div> 
                </div>
              
              <Contacts selected={selectAll}/>
            </div>
        </div>
    )
}

export default App
