
from vertexai.preview.generative_models import GenerativeModel, Image, Part
from typing import Union
from fastapi.responses import JSONResponse
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai

app = FastAPI(title='CityPass ChatBot')


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key='AIzaSyAa3_mjYL4FM0wYqEpj8OLVh7vsLdNfslU')
model = genai.GenerativeModel('gemini-pro')



def generate_text(prompt) -> str:
    response = model.generate_content(prompt)
    return response.text

@app.options("/")
async def options_root(request: Request):
    return Response(status_code=200)

@app.post('/{response}')
def get_response(response: str) -> dict:
    prompt = """
    Тема разговора: CityPass Astana - ваш ключ к незабываемым впечатлениям!
    Запрос: {responce}
    Дополнительно:
    Бот должен писать БЕЗ разметки
    Бот должен писать с смайликами
    Бот должен сделать акцент на том, что CityPass Astana предлагает доступ к эксклюзивным достопримечательностям, которые недоступны по отдельности.
    Бот должен привести несколько примеров таких достопримечательностей.
    Бот должен предложить пользователю ознакомиться с полным списком достопримечательностей на сайте CityPass Astana.
    Бот должен вежливо предложить ему помощь в случае возникновения вопросов.
    Пример ответа:
    "Текст отвечающий на вопрос {responce}"
    С уважением,
    CityPass Astana
    Важно:
    Бот должен быть вежливым и дружелюбным.
    Бот должен предоставлять точную и актуальную информацию.
    Бот должен быть лаконичным и не утомлять пользователя длинными текстами.
    Бот должен быть готов ответить на любые вопросы пользователя."""
    answer = generate_text(prompt)
    return JSONResponse(content={
        'text': answer,
        'isBotMessage': True
    })


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.post('/signup')
async def create_an_account():
    pass

@app.post('/login')
async def create_access_token():
    pass

@app.post('/ping')
async def validate_token():
    pass
