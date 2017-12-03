function b1() {
    var input = document.getElementById("t").value;
    var c_input ='"'+input+' : "+'+input;
    document.getElementById("t").value=c_input;
    bb();
}
function b2() {
    var input = document.getElementById("t").value;
    var c_input ='console.log("'+input+' : "+'+input+');';
    document.getElementById("t").value=c_input;
    bb();
}
function b3() {
    var input = document.getElementById("t").value;
    var c_input ='System.out.println("'+input+' : "+'+input+');';
    document.getElementById("t").value=c_input;
    bb();
}
function b4() {
    var input = document.getElementById("t").value;
    var c_input ='echo "'+input+' : " . '+input+';';
    document.getElementById("t").value=c_input;
    bb();
}
function b5() {
    var input = document.getElementById("t").value;
    var c_input ='var_dump ("'+input+' : " . '+input+');';
    document.getElementById("t").value=c_input;
    bb();
}


function cc() {
    document.getElementById("t").value="";
}

// document.getElementById("c").addEventListener('click', function() {
//     var target = document.getElementById('t');
//     var range = document.createRange();
//     range.selectNode(target);
//     window.getSelection().addRange(range);
//
//     document.execCommand('copy');
// },false);

function execCopy(string){
    var temp = document.createElement('div');

    temp.appendChild(document.createElement('pre')).textContent = string;

    var s = temp.style;
    s.position = 'fixed';
    s.left = '-100%';

    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);

    var result = document.execCommand('copy');

    document.body.removeChild(temp);
    // true なら実行できている falseなら失敗か対応していないか
    return result;
}


function bb(){
    var textarea = document.getElementById('t');
    var button = document.getElementById('c');
    if(execCopy(textarea.value)){

        toastr.options.timeOut = 1500; // 3秒
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "100",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        Command: toastr["info"]("", "コピーしました");
        $('#linkButton').click(function() {
            toastr.success('click');
        });
    }
    else {

        toastr.options.timeOut = 1500; // 3秒
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "showDuration": "100",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        Command: toastr["info"]("", "このブラウザは非対応です");
        $('#linkButton').click(function() {
            toastr.success('click');
        });
    }
}

