FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código da aplicação para o container
COPY ./app/backend /app/backend

EXPOSE 5000

# Comando para iniciar a aplicação Flask
CMD ["python", "backend/app.py"]
