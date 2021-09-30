/* 
 *  Author: Khurram Ijaz
 */

module.exports = function(){
    let Flows = require('./flows')
    let RunFlow = require('./runFlow')
    
    return{
        addFlow:function(flowName){
            return Flows.addFlow(flowName)
        },
        runFlow: function(flowName,callback){
            RunFlow(flowName,callback)
        },
        getFlow: function(flowName){
            return Flows.getFlow(flowName)
        }
    }
}

