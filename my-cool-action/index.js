const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

// Run your GitHub Action!
Toolkit.run(async tools => {
  //console.log(tools.context.payload.pull_request)
  let num = tools.context.payload.number;
  console.log(tools.context.payload);
  console.log(tools.context.payload.number);

  //const list = await tools.github.pulls.listFiles('tomczoink', 'emails-tom', num);
  //console.log(list);
  tools.exit.success('We did it!')
})