terraform {
  backend "s3" {
    bucket = "cangulo-pocs-tfm-states"
    # key            = # will be set by GH workflow in tf init -backend-config variable
    encrypt = "true"
  }
}
