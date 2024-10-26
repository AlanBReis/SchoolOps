# SchoolOps

![Sistema em Ação](https://user-images.githubusercontent.com/74038190/213910842-5a320d6b-e48f-4d41-a901-0e6a357e8dae.gif)

School Ops é um projeto de exemplo para gestão de escolas, criado para demonstrar práticas e ferramentas DevOps em uma infraestrutura de cloud computing. Ele fornece uma API básica para gerenciar alunos, notas, frequência e matrículas.


## Arquitetura e Ferramentas Utilizadas

- **AWS (Amazon Web Services)**: Provedor de infraestrutura em nuvem, usando EKS para Kubernetes e RDS para banco de dados.
- **Docker**: Containerização da aplicação para garantir portabilidade e facilitar o deploy.
- **Kubernetes**: Orquestração de contêineres para escalabilidade e gerenciamento de recursos.
- **Terraform**: Provisionamento de infraestrutura como código, configurando recursos na AWS.
- **Ansible**: Automação de configuração e gerenciamento de dependências.
- **New Relic**: Monitoramento e observabilidade para garantir a saúde e desempenho do sistema.
- **GitHub Actions**: CI/CD para integração contínua e deploy contínuo.

## Funcionalidades da API

- Autenticação de usuários
- Gestão de Alunos, Professores, Disciplinas e Notas
- Sistema de Frequência e Matrículas


## Executando o Projeto

### Pré-requisitos
- Docker e Docker Compose
- Terraform e Ansible
- AWS CLI configurada
- Conta no New Relic

### Passos
1. Clonar o repositório.
2. Executar o Terraform para provisionar o cluster.
3. Configurar o deploy via GitHub Actions.


---


