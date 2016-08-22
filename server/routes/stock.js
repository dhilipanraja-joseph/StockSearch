const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/:search')
      .get((req,res)=>{
        axios.get(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=${req.params.search}`)
              .then(response=>{
                //console.log(response.data);
                res.send(response.data)
              })
              .catch(err=>console.log(err))
      })


module.exports = router;
