from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from locus import views

urlpatterns = [
    path('geocode/', views.geocode),
]

urlpatterns = format_suffix_patterns(urlpatterns)