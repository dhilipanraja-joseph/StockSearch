import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'


let _stockInfo = [];

class StockStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action=>{

      switch (action.type) {

        case 'RECEIVE_INFO'  :  _stockInfo = action.results;
                                this.emit('CHANGE');
                                break;

      }
    });
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getStockInfo(){
    return _stockInfo;
  }
}

export default new StockStore()
