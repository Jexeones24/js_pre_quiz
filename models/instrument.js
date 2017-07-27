function createInstrument(){

  let instrumentsID = 0;

  return class Instruments{

    constructor(name,categoryID){
      this.name = name;
      this.categoryID = categoryID;
      this.id = ++instrumentsID;
      store.instruments.push(this)
    };

    // static find(id){
    //
    // }


    category(){
      return Category.find(this.categoryID)[0]
    }


  }

}

let Instrument = createInstrument()
