for (let i = 0;i<11;i++){
    var a = function(){
        var j = i
        setTimeout(function(){
            console.log(j)
        },1000*i)
    }
    a()
}