# pushes
workflow "Push Event" {
  on = "push"
  resolves = ["Test"]
}

# pull-requests
workflow "Pull Request" {
  on = "pull_request"
  resolves = ["Test"]
}
action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

# Run the magic
action "Test" {
  needs = "Build"
  uses = "skx/github-action-tester@master"
}
