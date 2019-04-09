const actions_toolkit_1 = require("actions-toolkit");
const tools = new actions_toolkit_1.Toolkit({
    event: ['pull_request.opened', 'pull_request.synchronize'],
});

const list = await tools.github.pulls.listFiles();
console.log(list);