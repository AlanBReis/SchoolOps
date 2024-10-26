import pytest
from app.backend.app import app  # Certifique-se de que o caminho esteja correto

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_hello(client):
    """Testa a rota '/'."""
    response = client.get('/')
    assert response.data == b"Hello, SchoolOps!"  # Verifica se a resposta é a esperada
