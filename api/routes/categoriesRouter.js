const CategoryService = require('../services/categoryService');

const express = require('express');
const router = express.Router() 
const service = new CategoryService()

router.get('/', (req, res) => {
  const categories = service.find()
  res.json(categories)
})

router.get('/:categoryId', (req, res)=>{
  const {categoryId} = req.params;
  const categories = service.findOne(categoryId);
  res.json(categories)
})

// router.get('/categories/:categoryId/products/:productId', (req, res)=>{
//   const {categoryId, productId} = req.params;
  
//   res.json(categories)
// })

module.exports = router;