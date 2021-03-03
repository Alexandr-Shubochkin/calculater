
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function reset () {
    document.form.textview.value = '';
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function result() {
    let rez = document.form.textview.value;
    if (rez) {
        document.form.textview.value = eval(rez);
    }
}