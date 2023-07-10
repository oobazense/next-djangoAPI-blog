from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse

from dotenv import load_dotenv
import os

# .env ファイルを読み込む
load_dotenv()
api_key = os.getenv('openai_API_KEY')

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def chatgptFunc(request,prompt):
    import os
    import openai
    openai.api_key = api_key

    def chatMsg(prompt):
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-16k",
            messages=[
            #{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
            ]
        )
        return completion.choices[0].message["content"]

    chat_result = chatMsg(prompt)
    return HttpResponse(chat_result)

# def chatFunc(request,prompt):
#     import os
#     import openai
#     openai.api_key = "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"

#     def chatMsg(prompt):
#         completion = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             messages=[
#             #{"role": "system", "content": "You are a helpful assistant."},
#             {"role": "user", "content": prompt}
#             ]
#         )
#         return completion.choices[0].message["content"]

#     chat_result = chatMsg(prompt)
#     return HttpResponse(chat_result)