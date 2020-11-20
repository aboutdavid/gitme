# <%= metadata.title %>, the GitHub README generator.

### What is GitME?

<%= metadata.title %> is a README.md generator built with Node.js and Markdown, and you can render files using EJS, or Nunjucks.
You can get data from the `data` folder, such as making requests to an extenal API, generating random numbers, etc.

There are currently two files which the demo uses to set metadata and make sample icons that you can use in your README file,
like the Node.js icon or the golang icon.

<img src="<%= icons.markdown %>" width="22px" align="left">
<img src="<%= icons.nodejs %>" width="22px" align="left">
<img src="<%= icons.python %>" width="22px" align="left">
<img src="<%= icons.golang %>" width="22px" align="left">
<img src="<%= icons.php %>" width="22px" align="left">

### How does it work?

<%= metadata.title %> will render the README.md file, then, <%= metadata.title %> will push the rendered README file to your repo using Node.js and GitHub actions.

### How do you get started?

1. Click the "Use this template" on this repo.
2. Make the repo name Username/Username. For example, if your username is johndoe, then your repo would be called johndoe.
   **Note:** If you already have a repo with your username, then rename it to something else, then repeat steps 1 and 2.
3. Pull the repo locally, make changes, and push them to your repo. Or, you could use the Standard built-in GitHub editor.
4. Set your ENV vars. Leave the `GH_TOKEN` alone as that allows <%= metadata.title %> to push your README file.

```yml
name: gitme
on: [push]
jobs:
  gitme-compile-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - run: npm install
      - run: node index.js
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Leave this alone!
          REPO: username/repo # replace with your username and repo, keep the "/"
          BRANCH: main # Or whatever branch you want to use
          EMAIL: 62346025+aboutDavid@users.noreply.github.com # The email you use for Git Commits.
          NAME: aboutDavid # Your name or username
```

### How do you get data from stuff like APIs?

If you know about how 11ty and the `_data` file works, you can skip this as it is processed the same way/

1. Make a file in the data folder. The name of that file (minus the `.js`) will be what you refer to it as.
   For example, if you made a file called `test.js`, what you will refer to it as in your template file would be `test`. For this example, lets make it `test.js`.
2. Let's export a sample object with some data:

```js
module.exports = {
  sample: "Hello World!"
};
```

Great, we now have some data!

3. Lets get it in our template. By default, <%= metadata.title %> will render the index.md file using ejs.
   In the `config.js`, you can change `renderEngine` to `nunjucks` if you want to. Here are some ways you can access the demo file:

Nunjucks:

```hbs
# {{ text.sample }}
```

EJS:

```ejs
# <%%= text.sample %%>
```

Both of them would render:

# Hello World!

as you can use markdown.
