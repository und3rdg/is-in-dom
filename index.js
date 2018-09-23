// jshint esversion: 6
// -------------------------------------------------------
// TEST OBJECT WITH SELECTORS
// as an input can by jquery or querySelector(all)

export default {
  elements: function(){
    "use strict"
    Object.keys(this).forEach((item) => { 
      if(item === 'test'){ return }
      if(!this[item] || this[item].length === 0){
        console.warn("missing: " + "elements." + item)
      }
    })
  }
}


