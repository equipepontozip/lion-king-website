from django.http import HttpResponse

from django.shortcuts import render

def index(request):
    return render(request, 'lion_site/login.html')

def facial(request):
    return render(request, 'lion_site/facial.html')