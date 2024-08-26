import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'



const ContactList = () => {
    const {contactList , searchContack}= useSelector((state)=>state)
    const [search,setSearch] = useState([])

    useEffect(()=>{
        if(searchContack !==""){
            let list =  contactList.filter((item)=>item.name.includes(searchContack))
            setSearch(list)
        }else{
            setSearch(contactList)
        }
    },[searchContack,contactList])
    
    console.log("여기",search)
  return (
    <div>
        <SearchBar/>
        <div>연락처 수:{search.length}
        {search.map(item=>(<ContactItem item={item}/>))}
        </div>
    </div>
  )
}

export default ContactList