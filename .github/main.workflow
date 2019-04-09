# pushes
workflow "Push Event" {
  on = "push"
  resolves = ["check"]
}

# pull-requests
workflow "Pull Request" {
  on = "pull_request"
}

action "check" {
  uses = "./check/"
}
