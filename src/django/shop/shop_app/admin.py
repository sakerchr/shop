from django.contrib import admin
from .models import Item, ItemCategory, Order, Review

# Register your models here.

admin.site.register(Item)
admin.site.register(ItemCategory)
admin.site.register(Order)
admin.site.register(Review)