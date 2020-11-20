# This is <%= metadata.title %>

### What is GitME?

<%= metadata.title %> is a README.md generator built with Node.js and Markdown, and you can render files using EJS, or Nunjucks.
You can get data from the `data` folder, such as making requests to an extenal API, generating random numbers, etc.

There are currently two files which the demo uses to set metadata and make sample icons that you can use in your README file,
like the Node.js icon or the golang icon.

### How does it work?

<%= metadata.title %> will render the README.md file, then, <%= metadata.title %> will push the rendered README file to your repo using Node.js and GitHub actions.

<img src="<%= icons.markdown %>" width="22px" align="left">
<img src="<%= icons.nodejs %>" width="22px" align="left">

### How do you get data from stuff like APIs?
If you know about how 11ty and the `_data` file works, you can skip this as it is processed the same
1. Make a file in the data folder. The name of that file (minus the `.js`) will be what you refer to it as. 
For example, if you made a file called `test.js`, what you will refer to it as in your template file would be `test`. For this example, lets make it `test.js`.
2. Let's export a sample object with some data:
```js
module.exports = {
  sample: "Hello World!"
}
```
Great, we now have some data! Lets get it in our template. In 