from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
from django.http import HttpResponse

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

def chatgptFunc(request,prompt):
    import os
    import openai
    openai.api_key = "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"

    def chatMsg(prompt):
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
            #{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
            ]
        )
        return completion.choices[0].message["content"]

    chat_result = chatMsg(prompt)
    return HttpResponse(chat_result)