const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

// Run your GitHub Action!
Toolkit.run(async tools => {
  //console.log(tools.context.payload.pull_request)
  let num = tools.context.payload.number;
  console.log(tools.context.payload.pull_request._links.commits);

  const list = await tools.github.pulls.listFiles({'number': '2', 'owner': 'tomczoink', 'repo': 'emails-tom' });
  console.log(list);

  let files = Object.values(list);
  let regex = RegExp('.mjml', 'g');
  for (var i = 0; i < files.length; i++) {
    console.log(files[i].filename);
    console.log(regex.test(files[i].filename));
  }

})