const store = {instruments: [], categories: []}

function render(html,into){
  $('.into').empty()
  $('.into').html(html)
}


function formInput(){
  $('.form').submit(function() {
    event.preventDefault()
    let instrument = $('#instrument').val()
    let category = $('#category').val()
    let categoryID = Category.findByName(category).id
    //get category id by calling fucntion
    //create a new instrument
    new Instrument(instrument, categoryID)



  })
};


// function template(){
//   return
// }



$(document).ready(function(){

formInput()

});
