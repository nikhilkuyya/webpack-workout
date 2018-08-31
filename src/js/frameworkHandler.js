import Elm from './../Elm/Main.elm'

(function(framework){
    const mountNode = document.getElementById('app');    
    console.log(mountNode);
    console.log(framework);
    framework.Elm.Main.init({
        node : mountNode
    })    

})(Elm)