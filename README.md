# Hifumi
> Download media files from the terminal from YouTube, Vimeo, &amp; more!
>
> Based on [AquaDL](https://github.com/ohlookitsderpy/AquaDL) but as an NPM package to download media files in the terminal.

## Usage
#### Installing
```sh
# NPM
$ npm i -g hifumi

# Yarn
$ yarn global add hifumi
```

#### Terminal
```sh
$ hifumi download <url>
```

#### Normally
```js
const Hifumi = require('hifumi');
const downloader = new Hifumi.Downloader('url');

const path = downloader.download();
console.log(await path);
```

## License
> [Hifumi](https://github.com/auguwu/Hifumi) is made by auguwu & released under the MIT license.

```
<insert>license here</insert>
```
