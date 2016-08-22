import axios from 'axios'
import AppDispatcher from './AppDispatcher'

const API ={
  getStock(search){
    axios.get(`/api/stock/lookup/${search}`)
          .then(res=>{
            //console.log(res.data);
            return res.data;
          })
          .then(results=>{
                AppDispatcher.dispatch({
                  type: 'RECEIVE_INFO',
                  results
                })
            })
          .catch(err=>console.log(err))
  },
  getFullStockInfo(search){
    axios.get(`/api/stock/full/${search}`)
          .then(res=>res.data)
          .then(results=>{
                AppDispatcher.dispatch({
                  type: 'RECEIVE_FULL_INFO',
                  results
                })
          })
          .catch(err=>console.log(err))
  }
}

export default API
