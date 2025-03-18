const UserService = require('../services/userServices');
const express = require('express');
const router = express.Router();
const service = new UserService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const users = service.findOne(id);
  res.json(users)
})

// router.get('/users', (req, res)=> {
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   }else{
//     res.send('No hay parámetros')
//   }
// })

module.exports = router;