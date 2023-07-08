from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet,chatgptFunc

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('chatgpt/<prompt>', chatgptFunc, name='chatgpt'),
    #path('chat/<prompt>', chatFunc, name='chat'),
]