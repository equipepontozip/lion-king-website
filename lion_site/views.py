import requests
import json
import os
from django.http import HttpResponse

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return render(request, 'lion_site/login.html')

def facial(request):
    return render(request, 'lion_site/facial.html')

@csrf_exempt
def keystroke(request):
    res = requests.post(os.environ.get('API') + 'keystroke', json=json.loads(request.body.decode('utf-8')))
    print(res.content)

    return HttpResponse(res, status=res.status_code)