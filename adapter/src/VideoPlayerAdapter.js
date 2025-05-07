const AudioPlayer = require('./AudioPlayer');
const VideoPlayer = require('./VideoPlayer');

class VideoPlayerAdapter extends AudioPlayer {
    constructor() {
        super();
        this.videoPlayer = new VideoPlayer();
    }

    playAudio(filename) {
        console.log("Adapting the playAudio method to use the VideoPlayer's playMedia method")
        this.videoPlayer.playMedia(filename);
    }
}

module.exports = VideoPlayerAdapter;
