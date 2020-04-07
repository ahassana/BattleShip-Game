var audio = document.getElementById('audio')
navigator.getUserMedia({video: false, audio: true}, function (stream) {
    audio.srcObject = stream

},function (err) {
    console.log(err)
})