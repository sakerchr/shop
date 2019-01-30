from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class ItemCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemCategory
        fields = ("name", "description")


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("name", "description", "number_in_stock", "price", "categories")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'groups')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ("items", "user")


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("rating", "text", "user", "item")