# Hifumi
> Download media files from the terminal from YouTube, Vimeo, &amp; more!
>
> Based on [AquaDL](https://github.com/ohlookitsderpy/AquaDL) but as an NPM package to download media files in the terminal or by a JavaScript file

## Usage
#### Installing
```sh
# NPM
$ npm i -g miyako

# Yarn
$ yarn global add miyako
```

#### Prompts
`$ miyako`:

```
Miyako CLI v0.0.1

━━ Usage ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
miyako [command]
━━ Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
miyako help [command] - This prompt or gets help on a command
miyako download <url> <path> - Downloads a video to a specified path
miyako version - Shows the current version of the CLI and NPM package of Miyako
```

`$ miyako help`:

```
$ miyako help

━━ Commands ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
miyako help [command] - This prompt or gets help on a command
miyako download <url> <path> - Downloads a video to a specific path
miyako version - Shows the current version of Miyako
```

`$ miyako download`:

```
$ miyako download

NoArgumentException: Missing <url> argument!

$ miyako download <url>

Miyako> Now downloading <url>

PathNotSpecifiedException: Missing a path

$ miyako download path/to/directory <url>

Miyako> Now downloading <url> in path/to/directory
Miyako> Downloaded! Process exiting...
```

`$ miyako version`

```sh
$ miyako version

Currently running v0.0.1 of Miyako
```

#### Normally
```js
```

## License
> [Miyako](https://github.com/auguwu/Miyako) is made by auguwu & released under the MIT license.

```
<insert>license here</insert>
```
