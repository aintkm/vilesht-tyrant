<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play Audio</title>
</head>
<body>
    <audio id="myAudio" src="path/to/your/audiofile.mp3" preload="auto"></audio>

    <script>
        window.onload = function() {
            var audio = document.getElementById('myAudio');
            audio.play().catch(function(error) {
                console.log('Audio playback failed:', error);
            });
        };
    </script>
</body>
</html>