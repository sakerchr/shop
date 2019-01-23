from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("Hello world. You are at the shop index.")

def login(request):
    return HttpResponse("Login page.")

def items(request):

    return HttpResponse("Items.")

def categories(request):

    return HttpResponse("Categories.")

def items_from_category(request, category_name):

    return HttpResponse("items from category %s" % category_name)

def item(request, item_name):

    return HttpResponse("item. %s" % item_name)

def user_orders(request):

    return HttpResponse("user orders.")

def reviews_for_item(request, item_name):

    return HttpResponse("reviews for item %s" % item_name)

def reviews_by_user(request):

    return HttpResponse("reviews by user")