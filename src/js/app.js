import {frameworkRunner} from './frameworkHandler';

const ele  = document.querySelector("[rel='js-change-framework']")
ele.onchange = add;
function add(evt){
    frameworkRunner(evt.target.value);
}
