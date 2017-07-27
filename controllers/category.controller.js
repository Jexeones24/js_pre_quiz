function createCategoryController(){

  return class {

    static categoryHTML(category){
      let categoryInput = document.getElementById('category_section')
      let div = document.createElement('div')
      div.append(`${category.name}`)

      let instruments = `<ul>
      ${category.instruments().map((instrument) =>{ '<li>'
      + instrument +
      '</li>' }).join(" ")}
      </ul>`

      div.innerHTML = instruments
      debugger
    }
  }

};

let CategoryController = createCategoryController()
