import { 
    Contact, 
    addNewContact, 
    removeContact, 
    copyContact, 
    editContact, 
    updateContact,
    checkBox
} from '../constant'
export const contacts = data => {
    return{
        type: Contact,
        data: data
    }
}

export const addContact = contact => {
    return{
        type: addNewContact,
        data: contact
    }
}

export const removeItem = id => {
    return{
        type: removeContact,
        data: id
    }
}

export const copyText = data =>{
    return {
        type: copyContact,
        data: data
    }
}

export const editItem = id => {
    return{
        type: editContact,
        id: id
    }
}
export const updateItem = contact => ({
    type: updateContact,
    data: contact
})
export const checkItem = id => ({
    type: checkBox,
    data: id
})