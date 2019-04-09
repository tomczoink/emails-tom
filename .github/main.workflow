# pull-requests
workflow "Pull Request" {
  on = "pull_request"
  resolves = ["check"]
}

action "check" {
  uses = "./test/"
}
