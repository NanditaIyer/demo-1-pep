let Alexa = require('alexa-sdk');

let musicClip = "<audio src='https://s3.amazonaws.com/pepsistudyboxdemo/Bigfoot+2.mp3'/>";

let states = {

  INTROMODE : '_INTROMODE',
  SECONDQUESTION : '_SECONDQUESTION',

}


let newSession = {

'LaunchRequest' : function(){

  let output = "Welcome back to GrubHub. We’ll return you to Gimlet’s Science Versus in a nano-second, but now it’s up to you versus your hunger.  You’ve requested the Kernel’s study box, including 5 pieces of crispy chicken, fries, and a refreshing 12 ounce bottle of Bubbly.  For seven ninety nine, with no additional fees, we’ll have the study box to your preferred address of, one fourteen, east 25th street in no time.  Would you like to confirm your order?";
  // this.handler.state = states.INTROMODE;
  this.response.speak(output).listen(output);
  this.emit(':responseReady');


},


'AMAZON.YesIntent' : function(){

  let output = "WooooHooo,!  We’ve placed your order, and your Study Box is on the way.  Now let’s get you back to Science Versus from our friends at Gimlet.  Are you ready to continue your podcast?";
  this.handler.state = states.SECONDQUESTION;
  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},



'Play' : function(){

  let output = "Welcome back to Science versus, on the topic of BIGFOOT <break time='.05s'/>" + musicClip + "<break time='.05s'/> .";
  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},




'Unhandled': function(){

this.emit(':ask', "sorry I didn't get that");


},


'AMAZON.CancelIntent' : function(){

  let output = "Thanks, I hope you come back soon!"
  this.response.speak(output);
  this.emit(':responseReady');
},



'AMAZON.StopIntent' : function(){

  let output = ""
  this.response.speak(output);
  this.emit(':responseReady');
},


'SessionEndedRequest' : function(){

this.handler.state = states.INTROMODE;
}

};


let introMode = Alexa.CreateStateHandler(states.INTROMODE, {


'LaunchRequest' : function(){

  let output = "Welcome back to GrubHub. We’ll return you to Gimlet’s Science Versus in a nano-second, but now it’s up to you versus your hunger.  You’ve requested the Kernel’s study box, including 5 pieces of crispy chicken, fries, and a refreshing 12 ounce bottle of Bubbly.  For seven ninety nine, with no additional fees, we’ll have the study box to your preferred address of, one fourteen, east 25th street in no time.  Would you like to confirm your order?";
  // this.handler.state = states.INTROMODE;
  this.response.speak(output).listen(output);
  this.emit(':responseReady');


},


'AMAZON.YesIntent' : function(){

  let output = "WoooHooo,!  We’ve placed your order, and your Study Box is on the way.  Now let’s get you back to Science Versus from our friends at Gimlet.  Are you ready to continue your podcast?";
  this.handler.state = states.SECONDQUESTION;
  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},



'Play' : function(){

  let output = "Welcome back to Science versus, on the topic of BIGFOOT <break time='.05s'/>" + musicClip + "<break time='.05s'/> .";
  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},




'Unhandled': function(){

this.emit(':ask', "sorry I didn't get that");


},


'AMAZON.CancelIntent' : function(){

  let output = "Thanks, I hope you come back soon!"
  this.response.speak(output);
  this.emit(':responseReady');
},



'AMAZON.StopIntent' : function(){

  let output = ""
  this.response.speak(output);
  this.emit(':responseReady');
},


'SessionEndedRequest' : function(){

this.handler.state = states.INTROMODE;
}

});


let secondQuestion = Alexa.CreateStateHandler(states.SECONDQUESTION, {


'AMAZON.YesIntent' : function(){

  let output = "WoooHooo,!  We’ve placed your order, and your Study Box is on the way.  Now let’s get you back to Science Versus from our friends at Gimlet.  Are you ready to continue your podcast?";
  this.handler.state = states.SECONDQUESTION;
  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},



'Play' : function(){

  this.response.speak(output).listen(output);
  this.emit(':responseReady');
},

   'AMAZON.CancelIntent' : function(){

    let output = "Thanks, I hope you come back soon!"
    this.response.speak(output);
    this.emit(':responseReady');

  },

  'AMAZON.StopIntent' : function(){

    let output = ""
    this.response.speak(output);
    this.emit(':responseReady');

  },

  'Unhandled': function(){

    this.emit(':ask', "sorry I didn't get that");
  },

  'SessionEndedRequest' : function(){
    this.handler.state = states.INTROMODE;
  }



});













exports.handler = function(event, context, callback){

var alexa = Alexa.handler(event, context, callback);

alexa.registerHandlers(newSession, introMode, secondQuestion);
alexa.execute();


};






















