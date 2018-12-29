//UTILITY FUNCTIONS

const utils = {};

utils.getVideoName = (url) => {
    if (url.includes('https://youtu.be/') === true) {
        return url.slice(17)
    } else if (url.includes('https://www.youtube.com/watch?v=') === true) {
        return url.slice(32);
    } else if (url.includes('https://www.youtube.com/embed/') === true) {
        return url.slice(30);
    } else {
        console.log('video source may not be recognized')
    }
}

module.exports = utils;
