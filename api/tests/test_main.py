from fastapi.testclient import TestClient
from api.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_the_answer_to_the_ultimate_question():
    question = "What is the answer to the ultimate question?"
    response = client.get("/answer", params={"question": question})
    assert response.status_code == 200
    assert response.json()["answer"] == 42


def test_the_answer_to_the_ultimate_question_not_a_question():
    question = "What is the answer to the ultimate question."
    response = client.get("/answer", params={"question": question})
    assert response.status_code == 422
    assert response.json() == {
        "detail": [
            {
                "loc": ["query", "question"],
                "msg": "must end with a question mark",
                "type": "value_error"
            }
        ]
    }