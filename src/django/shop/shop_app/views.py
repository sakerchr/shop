from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.template import loader
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Item, ItemCategory, Order, Review
from .serializers import ItemSerializer, ItemCategorySerializer, OrderSerializer, ReviewSerializer, UserSerializer

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes, schema
from rest_framework.reverse import reverse
from rest_framework.exceptions import AuthenticationFailed
import json


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def login_request(request):
    username = request.data["username"]
    password = request.data["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return Response(status=status.HTTP_202_ACCEPTED)
    else:
        raise AuthenticationFailed()

@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def logout_request(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def logged_in(request):
    is_authenticated = request.user.is_authenticated if request.user is not None else False
    return JsonResponse(json.dumps(is_authenticated), safe=False)
    

class ItemCategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = ItemCategory.objects.all()
    serializer_class = ItemCategorySerializer


class ItemViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = ItemSerializer

    def get_queryset(self):
        queryset = Item.objects.all()

        order_id = self.request.query_params.get("order_id", None)
        if order_id is not None:
            order_items = Order.objects.get(pk=order_id).items.all()
            queryset = queryset.filter(id__in=order_items)
        
        return queryset

    

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = OrderSerializer
    
    def get_queryset(self):
        queryset = Order.objects.all()
        
        user_id = self.request.query_params.get("from_user", None)
        if user_id is not None:
            queryset = queryset.filter(user=self.request.user)

        return queryset


class ReviewViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = ReviewSerializer

    def get_queryset(self):
        queryset = Review.objects.all()
        item_id =self.request.query_params.get("item_id", None)
        if item_id is not None:
            queryset = queryset.filter(item=item_id)
        
        user_id = self.request.query_params.get("from_user", None)
        if user_id is not None:
            queryset = queryset.filter(user=self.request.user)
        return queryset
        

