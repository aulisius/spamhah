/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
const request = require('request');
const { token, cookieString } = require('./keys')
const { JSDOM } = require('jsdom');

const cookie = request.cookie(cookieString);
const jar = request.jar();

const postMessage = (url, text, token, userId, jar) => request.post(
  { url, form: { __RequestVerificationToken: token, userId, text }, jar },
  (err, res, body) => console.log(err, res.statusCode, body)
)

const spamHah = (user, text, length) => {
  const url = `https://${user}.sarahah.com`
  jar.setCookie(cookie, url)

  request(url, (err, res, body) => {
    if (!err) {
      const userId = (new JSDOM(body)).window.document.getElementById('RecipientId').value;
      Array.from({ length }, (v, i) => text).forEach(text => postMessage(`${url}/Messages/SendMessage`, text, token, userId, jar))
    }
  })
}

module.exports = spamHah