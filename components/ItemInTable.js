import React from 'react'
import { connect } from 'react-redux'
const ItemInTable = ({buyItem,unSave,item}) => {
  const {image , title , price , id} = item 
  return (
    <tr>
    <td className="table-image"><img src={image}/></td>
    <td className="table-title">{title}</td>
    <td className="table-price">{price}$</td>
    <td><button className="red" onClick={()=>unSave()}>unsave</button></td>
    <td><button className="blue" onClick={()=>buyItem(item)}>buy</button></td>
  </tr>
  )
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    unSave : () => {dispatch({type:"UNSAVE" ,payload:{id :ownProps.item.id}})} , 
    buyItem : (item) => {dispatch({type:"BUY_ITEM",payload:{item}})},

  }
} 
export default connect(null,mapDispatchToProps)(ItemInTable)