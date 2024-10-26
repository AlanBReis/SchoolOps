# SchoolOps

![Sistema em Ação](https://user-images.githubusercontent.com/74038190/213910842-5a320d6b-e48f-4d41-a901-0e6a357e8dae.gif)


School Ops é um projeto de exemplo voltado para a gestão escolar, desenvolvido para ilustrar práticas e ferramentas de DevOps em uma infraestrutura de cloud computing. Este projeto oferece uma API básica que permite gerenciar informações essenciais, como alunos, notas, frequência e matrículas.

Com o School Ops, você poderá explorar a integração de tecnologias modernas e a implementação de melhores práticas no desenvolvimento e na operação de aplicações, proporcionando uma experiência educacional mais eficiente e acessível.


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


