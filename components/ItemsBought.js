import React from 'react'
import { connect } from 'react-redux'
// MdOutlineAdd MdOutlineRemove
import { MdOutlineAdd , MdOutlineRemove } from "react-icons/md";

const ItemsBought = ({decrement,increment,unBuy,item}) => {
  const {image,title,price , quantity} = item 
  return (
    <tr>
    <td className='table-image'><img src={image}/></td>
    <td className='table-title'>{title}</td>
    <td className='table-price'>{price}$</td>
    <td className='table-quantity' style={{display:'flex',alignItems:'center'}}> <button
    onClick={()=>increment()}
    className='blue'><MdOutlineAdd/></button> {quantity} 
    <button onClick={()=>decrement()} className='red'><MdOutlineRemove/></button></td>
    <td><button onClick={()=>unBuy()}>unbuy</button></td>
  </tr>
    
  )
}


const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    unBuy : ()=> {dispatch({type:"UNBUY_ITEM",payload:{id:ownProps.item.id}})} ,
    increment : ()=> {dispatch({type:"INCREMENT",payload:{id:ownProps.item.id}})} , 
    decrement : ()=> {dispatch({type:"DECREMENT",payload:{id:ownProps.item.id}})}
  }
}
export default connect(null,mapDispatchToProps)(ItemsBought)
