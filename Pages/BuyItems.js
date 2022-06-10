import React from 'react'
import {connect} from 'react-redux'
import ItemsBought from '../components/ItemsBought';

const BuyItems = ({Items ,price}) => {
 console.log(price);
  return (
        <div className="xD">
  {Items.length > 0 ? 
    <table>
      <tr>
        <th >image</th>
        <th>title</th>
        <th>price</th>
        <th>quantity</th>
        <th>saved</th>
      </tr>
     { Items.map((item) => 
    <ItemsBought item={item}  key={item.id} />  
     )}
    </table>
     
     :
     <h1>not found</h1>
     
}
 
<h1>all Item:{price}$</h1>  
    </div>
  )
}
const mapStateToProps = (state) => {
    return {Items :state.storeItems ,price : state.allPrice}
}

export default connect(mapStateToProps,)(BuyItems)