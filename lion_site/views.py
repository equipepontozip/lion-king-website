import requests
import json
import os
from django.http import HttpResponse

from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def index(request):
    return render(request, 'lion_site/login.html')


@csrf_exempt
def password(request, user):
    print(user)

    return render(request, 'lion_site/password.html')


@csrf_exempt
def keystroke(request):
    res = requests.post(os.environ.get('API') + 'keystroke', json=json.loads(request.body.decode('utf-8')))
    classification = json.loads(res.content)

    return  HttpResponse(json.dumps({'classification': classification['classification']}), content_type="application/json", status=200)

@csrf_exempt
def validate_login(request):
    dt = json.loads(request.body.decode('utf-8'))

    if(dt['password'] == '.tie5Roanl'):
        print("valido")
        return HttpResponse(json.dumps({'valide': 'true'}), content_type="application/json", status=200)
    else:
        print("invalido")
        return HttpResponse(json.dumps({'valide': 'false'}), content_type="application/json", status=400)


def after_login(request):

    return render(request, 'lion_site/after_login.html')