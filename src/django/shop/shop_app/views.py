from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.template import loader
from .models import *

# Create your views here.

def index(request):
    items = Item.objects.all()
    context = {
        'items': items,
    }
    return render(request, 'shop_app/index.html', context)

def login(request):
    return HttpResponse("Login page.")

def items(request):
    items = Item.objects.all()
    items_output = ', '.join([item.name for item in items])
    return HttpResponse("Items: %s" % items_output)

def categories(request):
    categories = ItemCategory.objects.all()
    categories = ', '.join([category.name for category in categories])
    return HttpResponse("Categories: %s" % categories)

def items_from_category(request, category):
    items = ItemCategory.objects.get(pk=category).item_set.all()
    items = ', '.join([item.name for item in items]) 
    return HttpResponse("Items from category: %s" % items)

def item(request, item):
    item = get_object_or_404(Item, pk=item)
    return render(request, "shop_app/detail.html", {"item": item})

def user_orders(request):

    return HttpResponse("user orders.")

def reviews_for_item(request, item):
    reviews = Review.objects.filter(item=item)
    reviews = ', '.join([review.text for review in reviews])

    return HttpResponse("reviews for item %s" % reviews)

def reviews_by_user(request):

    return HttpResponse("reviews by user")