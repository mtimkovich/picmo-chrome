# <img src="public/icons/icon_48.png" width="45" align="left"> Emoji Button Chrome

This is a Chrome extension to quickly search and copy emoji using the excellent [Emoji Button][eb] tool.

<img src="img/preview.png" width="400px">

## Features

- Emoji search.
- Recently used emoji.
- Completely keyboard accessible.
  - Open the picker with `Ctrl+Period`.
  - Navigate with Tab and the arrow keys.
- Completely open source, so I won't be selling your personal data.
  - Only requires the `clipboardWrite` permission.

## Installation Methods

1. [Download from the Chrome Web Store.](https://chrome.google.com/webstore/detail/emoji-button-chrome/ehmacpiolcofcljbiogbjbojdeiiekdi)
2. Download the latest version from [releases](https://github.com/mtimkovich/emoji-button-chrome/releases).
3. Build from source then load the unpacked extension:

```sh
$ git clone https://github.com/mtimkovich/emoji-button-chrome
$ npm install
$ npm run build
```

## Contribution

Suggestions and pull requests are welcomed!

## Acknowledgements

* [Emoji Button][eb] for doing all the hard work.
* [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli).
* I stole some ideas from [chromoji](https://github.com/smeeckaert/chromoji).

## Author

Max Timkovich

[eb]: https://emoji-button.js.org/
