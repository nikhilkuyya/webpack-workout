var EVT = new EventEmitter2();
document.addEventListener('load',() =>{
    EVT.emit('init');
})
