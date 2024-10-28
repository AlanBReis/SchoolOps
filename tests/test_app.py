import os
import pytest
from app.backend.app import app  

# Define o ambiente como 'testing'
os.environ['FLASK_ENV'] = 'testing'

@pytest.fixture
def client():
    """Fixture para criar um cliente de teste."""
    with app.test_client() as client:
        yield client

def test_homepage_status(client):
    """Testa se a rota '/' retorna um status 200."""
    response = client.get('/')
    assert response.status_code == 200  # Verifica se o status é 200

def test_homepage_template(client):
    """Testa se a rota '/' renderiza o template login.html."""
    response = client.get('/')
    assert b'login' in response.data.lower()  # Verifica se a palavra 'login' está no HTML
