provider "aws" {
    region = "us-east-1"
}

resource "aws_instance" "schoolops_isntance" {
    ami = "ami-06b21ccaeff8cd686"
    instance_type = "t2.micro"
    key_name = "devops-bootcamp"
}

