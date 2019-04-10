# pull-requests
workflow "Pull Request" {
  on = "pull_request"
  resolves = ["check"]
}

action "check" {
  uses = "./my-cool-action/"
  secrets = ["GITHUB_TOKEN"]
}
