const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

// Run your GitHub Action!
Toolkit.run(async tools => {
  console.log(tools)
  //const list = await tools.github.pulls.listFiles();
 //console.log(list);
  tools.exit.success('We did it!')
})