const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

const list = await tools.github.pulls.listFiles();
console.log(list);
// Run your GitHub Action!
Toolkit.run(async tools => {
  tools.exit.success('We did it!')
})
