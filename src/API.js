import axios from 'axios'
import AppDispatcher from './AppDispatcher'

const API ={
  getStock(search){
    axios.get(`http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?callback=myFunction&symbol=${search}`)
          .then(res=>res.data)
          .then(data=>console.log(search,':',data))
          .catch(err=>console.log(err))
  }
}
