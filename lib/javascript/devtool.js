function setText(text){
    document.getElementById('md5_value').innerText = text;
}
function generateMd5(){
    if(!window.DisableDevtool){
        alert('DisableDevtool not ready');
        return;
    }
    let key = document.getElementById('md5_key').value;
    if(!key){
        alert('Key is empty');
        return;
    }
    setText(DisableDevtool.md5(key));
}