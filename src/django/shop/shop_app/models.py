from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ItemCategory(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    number_in_stock = models.PositiveSmallIntegerField()
    price = models.DecimalField(max_digits=8, decimal_places=2) # 6 + 2
    categories = models.ManyToManyField(ItemCategory)

    def __str__(self):
        return self.name

class Order(models.Model):
    date = models.DateField()
    items = models.ManyToManyField(Item)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Review(models.Model):
    rating = models.PositiveSmallIntegerField()
    text = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    item = models.ForeignKey(Item, on_delete=models.CASCADE, null=True)