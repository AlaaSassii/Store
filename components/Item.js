import React ,{useState , useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from 'react-redux'
const Item = ({itemBough,saveList,unBuy,unSave,addSave,buyItem,...item }) => {
  // useState 
  const [buyit ,setBuyIt] = useState(false) 
  const [saveit ,setSave] = useState(false) 
    let navigate = useNavigate()
    const {title , price , rating , image,id} = item  
  // useEffect
  useEffect(()=>{
  if( saveList.length > 0){
    for(let i = 0 ;i < saveList.length ; i++){
      if (id == saveList[i].id) {setSave(true)}
    }

  } 
  },[])
  useEffect(()=>{
    if(itemBough.length > 0 ) {
      for(let i = 0 ; i < itemBough.length ; i++) {
        if (id == itemBough[i].id) {setBuyIt(true)}
      }
    }
  },[])
  return (
    <div className="item">
    <h5>{title}</h5> 
    <img src={image} /> 
    <div>price : ${price} </div> 
    <div className="item-foot">
        <p onClick={()=> navigate(`/item/${id}`)}>show more info..</p>
        <div >
            <button  className={saveit ? 'red' :'blue'} onClick={saveit ? ()=>{unSave() ;setSave(!saveit)} :()=>{addSave();setSave(!saveit) } } >
              {saveit ? 'unsave' : 'save'}
            </button>
            <button className={buyit ? 'red' :'blue'} onClick={buyit ? ()=>{unBuy() ;setBuyIt(!buyit)} : ()=>{buyItem() ;setBuyIt(!buyit)}}>
            {buyit ? 'unbuy' : 'buy'}
              </button>
        </div>
    </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    addSave : () => {dispatch({type:"ADD_SAVE" ,payload:{item:ownProps}})} ,
    unSave : () => {dispatch({type:"UNSAVE" ,payload:{id :ownProps.id}})} , 
    buyItem : () => {dispatch({type:"BUY_ITEM",payload:{item:ownProps}})},
    unBuy : ()=> {dispatch({type:"UNBUY_ITEM",payload:{id:ownProps.id}})} 
  }
} 
const mapStateToProps = (state) => { 
  return {saveList :state.saveItems , itemBough : state.storeItems}
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)