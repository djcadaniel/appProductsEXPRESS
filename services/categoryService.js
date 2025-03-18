const {faker} = require("@faker-js/faker");

class CategoryService {

 constructor(){
  this.categories = []
  this.generate();
 } 

 generate(){
  const limit = 10;
  for(let index=0; index<limit; index++){
    this.categories.push({
      id: faker.string.uuid(),
      name: 'djcadaniel'
    })
  }
 }

 find(){
  return this.categories;
 }
 findOne(id){
  return this.categories.find(item => item.id === id)
 }

}

module.exports = CategoryService;