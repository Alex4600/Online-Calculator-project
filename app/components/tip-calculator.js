import Component from '@ember/component';

export default Component.extend({
   
   //This is setting all three variables to 0
    
   initialamount:0,
    totalamount:0,
    tipamount:0,
   
   //actions button to create a function that would pass a parameter and set the tipamount and totalamount to the value it needs to be
    actions: {
           clickOnTipChange(value){
           
           // making a string into a float rather than a string
            
           value=parseFloat(value);
           var initialamount=parseFloat(this.get('initialamount'));
           this.set('tipamount',initialamount*value);
            this.set('totalamount',initialamount+initialamount*value);
           
        
       
     }
    }
   
   
   
  

});
