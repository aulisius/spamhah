
## spamhah
Spam people who spam you with s*r*h*h links

## Current Version
1.0.0

## Usage

```
git clone https://github.com/aulisius/spamhah.git
cd spamhah
npm install
touch keys.js app.js
```
### keys.js

Export the verification token and cookieString as an object.

```js
// Getting RequestVerificationToken from HTML
// let token = document.body.getElementsByTagName('script')[4].innerHTML.trim().split('\n')[22].trimLeft().substr(93, 155)

module.exports = {
  token: '...',
  cookieString: '.AspNetCore.Antiforgery.w5W7x28NAIs=<get from your browser>'
}
```

### app.js

```js
const spamHah = require('./spamhah')
const message = 'Stop annoying me!'
const times = 10
const user = 'annoyingidiot'

spamHah(user, message, times)
```

## Now

`npm start`

## Author
Aulisius

## License
WTFPL

Copyright © 2017 Faizaan <aulisius7@gmail.com>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.