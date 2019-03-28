# pushes
workflow "Push Event" {
  on = "push"
  resolves = ["Build", "Execute"]
}

# pull-requests
workflow "Pull Request" {
  on = "pull_request"
  resolves = ["Build", "Execute"]
}

# Run the magic
action "Execute" {
  uses = "skx/github-action-tester@master"
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}
