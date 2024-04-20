import openai


openai.api_key = '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'


respone = openai.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
  ]
)

print(respone)