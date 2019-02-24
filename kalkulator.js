function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
    document.getElementById('history-value').innerHTML = document.form.textview.value;
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);

    }
}

function spesial(num) {
    if (num == 1) {
        var sin = document.form.textview.value;
        if (sin) {
            document.form.textview.value = Math.sin(sin);
        }
    } else if (num == 2) {
        var cos = document.form.textview.value;
        if (cos) {
            document.form.textview.value = Math.cos(cos);
        }
    } else if (num == 3) {
        var tan = document.form.textview.value;
        if (tan) {
            document.form.textview.value = Math.tan(tan);
        }
    } else if (num == 4) {
        var ex = document.form.textview.value;
        if (ex) {
            document.form.textview.value = Math.sqrt(ex);
        }

    }

}


function clean() {
    document.getElementById('history-value').innerHTML = document.form.textview.value;
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}


function displayother() {
    document.getElementById('calcu').style.width = '420px';
    document.getElementById('output').style.width = '353px';
    document.getElementById('history').style.marginRight = '36px';
}


function displaybegin() {
    document.getElementById('calcu').style.width = '332px';
    document.getElementById('output').style.width = '275px';
    document.getElementById('history').style.marginRight = '27px';

}