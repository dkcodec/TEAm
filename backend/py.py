import os
from typing import Union
import google.generativeai as genai
import uvicorn
from fastapi import FastAPI

app = FastAPI(title='chatBot')

genai.configure(api_key='AIzaSyAa3_mjYL4FM0wYqEpj8OLVh7vsLdNfslU')
model = genai.GenerativeModel('gemini-pro')

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get('/{responce}')
def get_responce(responce: str) -> dict:
    answer = model.generate_content(responce)
    return {'message': answer.text}

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


