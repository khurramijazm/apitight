/* 
 * Author Khurram Ijaz
 */
const Stepper = require('./stepper')
const _flows = {}    
const _getFlow = (flowName)=> _flows[flowName] ? _flows[flowName] : false    
const addFlow =(flowName)=>{            
            let stepper = new Stepper();
            _flows[flowName] = stepper
            return stepper
}
const getFlow = (flowName) => _getFlow(flowName)
const getAllFlows = () =>  _flows
module.exports = {
    addFlow : addFlow,
    getFlow : getFlow,
    getFlows : getAllFlows
}
