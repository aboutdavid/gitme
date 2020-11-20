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

### How do you get 