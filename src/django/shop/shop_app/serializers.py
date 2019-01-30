from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCategory
        fields = ("id", "name", "description")


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "name", "description", "number_in_stock", "price", "categories")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", 'username', 'email', 'groups')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("id", "date", "items", "user")


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("id", "rating", "text", "user", "item")