 
 import Elm from './../Elm/Main.elm'
 import {vm} from './../Vue/index'
import Vue from 'vue';


const mountNode = document.getElementById('app');    

const frameworkRunnerObj = (function(){
    
    return {
        runElm : function(framework){    
            Elm.Elm.Main.init({
                node : mountNode
            })    
        },
        runVue : Vue        
    }

})()

function frameworkRunner(val){
    switch(val) {
        case 'ELM':
            frameworkRunnerObj.runElm();
            break;
        case 'Vue':
            new frameworkRunnerObj.runVue(vm);
            break;
        case 'React':
            console.log('React');
            break;
        case 'Angular':
            console.log('Angular');
            break;
    }
}


export { frameworkRunner}
