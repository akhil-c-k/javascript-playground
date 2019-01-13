let userName = prompt('who is there ?', '');
if (userName == 'Admin') {
    let pass = prompt('enter password');

    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == '' || pass == null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
}

else if (userName = '' || userName == null) {
    alert('canceled');
}
else {
    alert('i dont know');
}