function buttn_click(val){
    document.getElementById("screen").value+=val
}

function clear_screen(){
    document.getElementById("screen").value=""
}

function equalTo(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}