function createCategory(){

  let categoriesID = 0;

  return class Category{

    constructor(name){
      this.name = name;
      this.id = ++categoriesID;
      store.categories.push(this)
    };

    static find(id){
      return store.categories.filter(function(cat){
        return cat.id === id
      })
    }

    static findByName(name){
      return store.categories.filter(function(cat){
        return cat.name.toLowerCase() === name.toLowerCase()
      })[0]
    }

    instruments(){
      return store.instruments.filter((instrument) => {
        return instrument.categoryID === this.id
      })
    };

  }

}

let Category = createCategory()

new Category("string")
new Category("bass")
