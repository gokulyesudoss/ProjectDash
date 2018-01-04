from django.conf.urls import url, include
from dashservice import views

urlpatterns = [
    url(r'^$', views.IndexPageView.as_view(), name='index'), # Notice the URL has been named
]
