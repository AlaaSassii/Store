import React ,{useEffect , useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios'
import Item from './Item';

import {useNavigate} from 'react-router-dom'
import Loading from './Loading';
const Lists = () => {
  const [loading,setLoading] = useState(true) 
  const [value, setValue] = useState('')
  const [items,setItems] = useState([]) ; 
  const [items2 , setItems2] = useState([])
  const [length,setLength] = useState(0)
  useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then(resp => {
      setItems(resp.data) ; 
      setItems2(resp.data) ;
      setLength(resp.data.length) 
      setLoading(false)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="xD">
        <div className="input">
        <input placeholder='search..' onChange={(e)=>{setValue(e.target.value); console.log(value)}}/>  
        <button onClick={()=>{setItems(items2.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))}}><BiSearchAlt2/></button>
        {items.length < length && <button className='red' onClick={()=>setItems(items2)}>All</button> }
        </div>
        <div className="items">
          {
            loading ?
             <Loading/> 
            :
            items.map((item , index) => <Item key={index} {...item}/> )
          }

        </div>
    </div>
  )
}

export default Lists