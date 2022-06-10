import React ,{useState , useEffect} from 'react'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import {    Link } from 'react-router-dom'
const ListCategory = ({id , category}) => {
    let navigate = useNavigate()
    const [items , setItems] = useState([]) 
    const [loading ,setLoading] = useState(true)
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/category/${category}`)
        .then(resp => {
            setItems(resp.data.filter(item => item.id !== Number(id)  ))
            setLoading(false)
        }
          
        
        ) 
        .catch(err => console.log(err))
       
    },[]) ; 

    return (
    <div className="related-info"> 
    
        { loading ? 'loding' : items.map((item,index) =>
        <div key={index} className="related-info-item">
            <img src={item.image} /> 
            <h4>{item.title}</h4> 
            <Link to={`/item/${item.id}`}> <p className="navigate" >show more info.. </p></Link>
        </div>)} 
         
    </div>
  )
}

export default ListCategory