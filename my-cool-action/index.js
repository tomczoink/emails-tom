const { Toolkit } = require('actions-toolkit')
const shell = require('shelljs');

const tools = new Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

// Run your GitHub Action!
Toolkit.run(async tools => {
  //console.log(tools.context.payload.pull_request)
  let num = tools.context.payload.number;

  const list = await tools.github.pulls.listFiles({'number': '2', 'owner': 'tomczoink', 'repo': 'emails-tom' });

  let files = Object.values(list.data);
  let regex = RegExp('product-updates/(.*?)\.mjml', 'g');
  let changedFiles = [];
  for (var i = 0; i < files.length; i++) {
    if(regex.test(files[i].filename)) {
      shell.exec('./my-cool-action/mjml-compile ./' + files[i].filename );
    }
  }
})
