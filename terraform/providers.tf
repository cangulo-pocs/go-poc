provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = {
      Client       = var.client
      Stage        = var.stage
      IacRepo      = "https://github.com/cangulo-templates/tf-cicd-template"
      Service      = local.service_name
      ServiceGroup = var.service_group
    }
  }
}
