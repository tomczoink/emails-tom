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
  tools.exit.success('We did it!')
})