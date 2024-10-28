terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.70.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_security_group" "allow_http_https_ssh" {
  name        = "allow_http_https_ssh"
  description = "Permite trafego HTTP, HTTPS e SSH"
  
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Acesso SSH aberto
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Acesso HTTP aberto
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Acesso HTTPS aberto
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow_http_https_ssh"
  }
}

resource "aws_instance" "schoolops" {
  ami           = "ami-0866a3c8686eaeeba"  # Amazon Linux 2
  instance_type = "t2.micro"
  key_name      = "devops-bootcamp"  # Usa a chave existente

  vpc_security_group_ids = [aws_security_group.allow_http_https_ssh.id]

  user_data = <<-EOF
              #!/bin/bash
              # Atualizar pacotes
              yum update -y
              # Instalar o Docker
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              # Instalar Docker Compose
              curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
              chmod +x /usr/local/bin/docker-compose
              # Clonar o repositório da aplicação
              yum install -y git
              git clone https://github.com/usuario/repositorio.git /home/ec2-user/app
              cd /home/ec2-user/app
              # Executar Docker Compose
              docker-compose up -d
            EOF

  tags = {
    Name = "schoolops"
  }
}
