import React,{useState} from 'react'
import {connect} from 'react-redux'
import ItemInTable from '../components/ItemInTable';
const SaveItems = ({Items }) => {
  console.log('items: ',Items); 

  return (
    <div className="xD">
  {Items.length > 0 ? 
    <table>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>saved</th>
        <th>buy</th>
      </tr>
     { Items.map((item) => 
    <ItemInTable item={item}  key={item.id} />  
     )}
      
    </table> 
    :
    <h1>not found</h1>
   
}
    </div>
  )
}
const mapStateToProps = (state) => {
    return {Items :state.saveItems}
}

export default connect(mapStateToProps
  ,)(SaveItems)