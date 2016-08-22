import AppDispatcher from '../AppDispatcher'
import API from '../API'

const StockActions = {
  getStock : API.getStock,
  getFullStockInfo : API.getFullStockInfo,
}

export default StockActions
