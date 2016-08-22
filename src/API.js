import axios from 'axios'
import AppDispatcher from './AppDispatcher'

const API ={
  getStock(search){
    axios.get(`/api/stock/full/${search}`)
          .then(res=>res.data)
          .then(results=>{
                AppDispatcher.dispatch({
                  type: 'RECEIVE_INFO',
                  results
                })
            })
          .catch(err=>console.log(err))
  }
  getLookup(search){
    axios.get(`/api/stock/lookup/${search}`)
          .then(res=>res.data)
          .then(results=>{
                AppDispatcher
          })
  }
}

export default API
