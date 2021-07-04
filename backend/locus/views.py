from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from geolib import geohash

# Resolution default to use for geocoding
resolution = 8
# Create your views here.

# 127.0.0.1:8000/geocode/?lat=25.204849&long=55.270782
@api_view(['GET'])
def geocode(request):
    latitude = request.GET.get('lat', '')
    longitude = request.GET.get('long', '')
    encoded_hash = geohash.encode(latitude, longitude, resolution)


    # if not in db add in db ? 
    return Response(encoded_hash)