function showOutput() {
    var info = document.getElementById('outputInfo');
    var message = document.getElementById('outputMessage');
    
    if (message.style.display === 'none') {
        info.style.display = 'none';
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
        info.style.display = 'block';
    }
}