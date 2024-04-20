import os
from typing import Union
from fastapi.responses import JSONResponse
import google.generativeai as genai
import uvicorn
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title='chatBot')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

genai.configure(api_key='AIzaSyAa3_mjYL4FM0wYqEpj8OLVh7vsLdNfslU')
model = genai.GenerativeModel('gemini-pro')


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


