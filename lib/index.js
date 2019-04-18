const Downloader = require('./downloader');

module.exports = {
    create: (url) => new Downloader(url),
    version: require('../package').version
};
