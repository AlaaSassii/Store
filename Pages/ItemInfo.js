import React , {useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import ListCategory from '../components/ListCategory'; 
import {connect} from 'react-redux'
import Loading from '../components/Loading';
const ItemInfo = ({itemBough,saveList,addSave,buyItem,unSave,unBuy}) => {
    let { id } = useParams()  ; 
    console.log('id in itemInfo',id)
    const [loading,setLoading] = useState(true)
  const [items,setItems] = useState('') ; 
  useEffect(()=>{
    setLoading(true)
    axios(`https://fakestoreapi.com/products/${id}`)
    .then(resp => {setItems(resp.data)
      setLoading(false)
    })
    .catch(err => console.log(err)) 
    
  },[id])
  const [buyit ,setBuyIt] = useState(false) 
  const [saveit ,setSave] = useState(false) 

  const {category , description ,  image , price , rating , title } = items  
  useEffect(()=>{
    setSave(false)
    if( saveList.length > 0){
      for(let i =0 ;i < saveList.length ; i++){
        if (id == saveList[i].id) {setSave(true)}
      }
  
    } 
    },[id])
    useEffect(()=>{
      setBuyIt(false)
      if(itemBough.length > 0 ) {
        for(let i = 0 ; i < itemBough.length ; i++) {
          if (id == itemBough[i].id) {setBuyIt(true)}
        }
      }
    },[id])
  return (
    <div className='xD'>
        {
            loading ? 
            <Loading/> 
            : 
            <section className="">
            <section className="item-info">

              <div className="img">
            <img src={image} /> 
              </div>
              <div className='info'>
            <h2>{title}</h2> 
            <h4>{description}</h4>
            <h4 >price :${price} </h4>
          <div className="buttons-save-buy">
            <button className={saveit ? 'red' :'blue'} onClick={saveit ? ()=>{unSave(items) ;setSave(!saveit)} :()=>{addSave(items);setSave(!saveit) } } >
              {saveit ? 'unsave' : 'save'}
            </button>
            <button className={buyit ? 'red' :'blue'} onClick={buyit ? ()=>{unBuy(items) ;setBuyIt(!buyit)} : ()=>{buyItem(items) ;setBuyIt(!buyit)}}>
            {buyit ? 'unbuy' : 'buy'}
              </button>
          </div>
            
            </div>
            </section>
            <p>related topics</p> 
            <ListCategory  id={id} category={category}/>
            </section>
        }
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return ({
    addSave : (item) => {dispatch({type:"ADD_SAVE" ,payload:{item}})} ,
    buyItem : (item) => {dispatch({type:"BUY_ITEM",payload:{item}})},
    unSave : (item) => {dispatch({type:"UNSAVE" ,payload:{id :item.id}})} , 
    unBuy : (item)=> {dispatch({type:"UNBUY_ITEM",payload:{id:item.id}})} 

  }
  )
}
const mapStateToProps = (state) => { 
  return {saveList :state.saveItems , itemBough : state.storeItems}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemInfo)