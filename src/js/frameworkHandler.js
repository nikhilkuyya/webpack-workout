 
import Elm from './../Elm/Main.elm'
import {vm} from './../Vue/index'
import Vue from 'vue';
import ReactDOM from 'react-dom';
import {ReactApp }from "./../React/index"
import React from 'react'


const frameworkRunnerObj = (function(){
    
    return {
        runElm : function(framework){    
            Elm.Elm.Main.init({
                node : document.getElementById("app")
            })    
        },
        runVue : Vue,
        runReact : () => {
            ReactDOM.render(React.createElement(ReactApp),document.getElementById("app"))
        }
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
            frameworkRunnerObj.runReact();
            break;
        case 'Angular':
            console.log('Angular');
            break;
    }
}


export { frameworkRunner}
