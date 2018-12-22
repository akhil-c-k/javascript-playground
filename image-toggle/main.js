var myImage = document.querySelector("img");
console.log(myImage)
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === './images/1.jpg') {
        myImage.setAttribute('src', './images/2.jpg');
    } else {
        myImage.setAttribute('src', './images/1.jpg');
    }
}