function e() {
    var input = document.getElementById("t").value;
    var c_input ='"'+input+' : "+'+input;
    document.getElementById("t").value=c_input;
}

document.getElementById("c").addEventListener('click', function() {
    var target = document.getElementById('t');
    var range = document.createRange();
    range.selectNode(target);
    window.getSelection().addRange(range);

    document.execCommand('copy');
},false);