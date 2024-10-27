FROM python:3.6-slim-buster

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r requirements.txt

# Copia o código da aplicação para o container
COPY ./app/backend /app/backend  

EXPOSE 5000

CMD [ "flask", "run", "--host=0.0.0.0", "--port=5000"]