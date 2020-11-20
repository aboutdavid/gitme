<h1>GitME, the GitHub README generator.</h1>
<h3>What is GitME?</h3>
<p>GitME is a <a href="http://README.md">README.md</a> generator built with Node.js and Markdown, and you can render files using EJS, or Nunjucks.
You can get data from the <code>data</code> folder, such as making requests to an extenal API, generating random numbers, etc.</p>
<p>There are currently two files which the demo uses to set metadata and make sample icons that you can use in your README file,
like the Node.js icon or the golang icon.</p>
<img src="https://cdn.glitch.com/17eaef8d-c248-49b5-81da-45e23cdc0b12%2Ficons8-markdown-24.png?v=1605831028200" width="22px" align="left">
<img src="https://cdn.glitch.com/17eaef8d-c248-49b5-81da-45e23cdc0b12%2Ficons8-nodejs-48.png?v=1605830531481" width="22px" align="left">
<img src="https://cdn.glitch.com/17eaef8d-c248-49b5-81da-45e23cdc0b12%2Ficons8-python-48.png?v=1605830851549" width="22px" align="left">
<img src="https://cdn.glitch.com/17eaef8d-c248-49b5-81da-45e23cdc0b12%2Ficons8-golang-48.png?v=1605835614356" width="22px" align="left">
<img src="https://cdn.glitch.com/17eaef8d-c248-49b5-81da-45e23cdc0b12%2Ficons8-php-logo-16.png?v=1605839056865" width="22px" align="left">
<br>
### How does it work?
<p>GitME will render the <a href="http://README.md">README.md</a> file, then, GitME will push the rendered README file to your repo using Node.js and GitHub actions.</p>
<h3>How do you get started?</h3>
<ol>
<li>Click the “Use this template” on this repo.</li>
<li>Make the repo name Username/Username. For example, if your username is johndoe, then your repo would be called johndoe.
<strong>Note:</strong> If you already have a repo with your username, then rename it to something else, then repeat steps 1 and 2.</li>
<li>Pull the repo locally, make changes, and push them to your repo. Or, you could use the Standard built-in GitHub editor.</li>
<li>Set your ENV vars. Leave the <code>GH_TOKEN</code> alone as that allows GitME to push your README file.</li>
</ol>
<pre><code class="language-yml">name: gitme
on: [push]
jobs:
  gitme-compile-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: &quot;12.x&quot;
      - run: npm install
      - run: node index.js
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Leave this alone!
          REPO: username/repo # replace with your username and repo, keep the &quot;/&quot;
          BRANCH: main # Or whatever branch you want to use
          EMAIL: 62346025+aboutDavid@users.noreply.github.com # The email you use for Git Commits.
          NAME: aboutDavid # Your name or username
</code></pre>
<h3>How do you get data from stuff like APIs?</h3>
<p>If you know about how 11ty and the <code>_data</code> file works, you can skip this as it is processed the same way/</p>
<ol>
<li>Make a file in the data folder. The name of that file (minus the <code>.js</code>) will be what you refer to it as.
For example, if you made a file called <code>test.js</code>, what you will refer to it as in your template file would be <code>test</code>. For this example, lets make it <code>test.js</code>.</li>
<li>Let’s export a sample object with some data:</li>
</ol>
<pre><code class="language-js">module.exports = {
  sample: &quot;Hello World!&quot;
};
</code></pre>
<p>Great, we now have some data!</p>
<ol start="3">
<li>Lets get it in our template. By default, GitME will render the <a href="http://index.md">index.md</a> file using ejs.
In the <code>config.js</code>, you can change <code>renderEngine</code> to <code>nunjucks</code> if you want to. Here are some ways you can access the demo file:</li>
</ol>
<p>Nunjucks:</p>
<pre><code class="language-hbs"># {{ text.sample }}
</code></pre>
<p>EJS:</p>
<pre><code class="language-ejs"># &lt;%= text.sample %&gt;
</code></pre>
<p>Both of them would render:</p>
<h1>Hello World!</h1>
<p>as you can use markdown.</p>
