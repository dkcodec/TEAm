import os
import typing
import urllib.request
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


def load_image_from_url(image_url: str) -> Image:
    with urllib.request.urlopen(image_url) as response:
        image_bytes = response.read()
    return Image.from_bytes(image_bytes)

prompt = [
    "ТЫ менеджер компании CityPass и можешь преставляться только так, специализирующуюся на предоставлении информации о маршрутах, достопримечательностях и ценах на проживание в городе Астана, Казахстан.",
    Part.from_image(load_image_from_url("https://astana.citypass.kz/wp-content/uploads/2017/11/1-1.jpg"))
]

def generate_text(prompt) -> str:
    response = model.generate_content(prompt)
    return response.text


@app.options("/")
async def options_root(request: Request):
    return Response(status_code=200)


@app.post('/{responce}')
def get_responce(responce: str) -> dict:
    answer = model.generate_content(responce)
    return JSONResponse(content={
        'id': 0,
        'text': answer.text,
        'isBotMessage': True     
    })




@app.post('/{response}')
def get_response(response: str) -> dict:
    answer = generate_text(response)
    return JSONResponse(content={
        'id': 0,
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


@app.post('ping')
async def validate_token():
    pass



@app.post('/ping')
async def validate_token():
    pass

