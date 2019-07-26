import requests
import json
from django.http import HttpResponse

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'lion_site/login.html')

@csrf_exempt
def keystroke(request):
    res = requests.post("http://api:5000/keystroke", json=json.loads(request.body.decode('utf-8')))
    print(res.content)

    return HttpResponse(res, status=res.status_code)