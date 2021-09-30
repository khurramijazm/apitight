/* 
 * Author Khurram Ijaz
 */
let Stepper = function() {    
    let _stepObj = {};    
    return {
        step: function(routeObj){ let stepArray = _stepObj[routeObj.url] ?  _stepObj[routeObj.url] : [];
             stepArray.push(routeObj); _stepObj[routeObj.url] = stepArray;  return this;
        },
        getSteps: function(){return _stepObj;}
    }
};
module.exports = Stepper;
