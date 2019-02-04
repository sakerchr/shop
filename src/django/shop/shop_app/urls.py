from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

app_name="shop_app"

router = DefaultRouter()
router.register(r'categories', views.ItemCategoryViewSet)
router.register(r'items', views.ItemViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'orders', views.OrderViewSet, base_name="orders")
router.register(r'reviews', views.ReviewViewSet, base_name="reviews")

urlpatterns = [
    path('', include(router.urls)),
    path("login/", views.login_request),
]

'''
item_category_list = views.ItemCategoryViewSet.as_view({
    "get": "list",
    "post": "create",
})

item_category_detail = views.ItemCategoryViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy"
})

item_list = views.ItemViewSet.as_view({
    "get": "list",
    "post": "create",
})

item_detail = views.ItemViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy"
})

user_list = views.UserViewSet.as_view({
    "get": "list"
})

user_detail = views.UserViewSet.as_view({
    "get": "retrieve"
})

order_list = views.OrderViewSet.as_view({
    "get": "list",
    "post": "create",
})

order_detail = views.OrderViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy"
})

review_list = views.ReviewViewSet.as_view({
    "get": "list",
    "post": "create",
})

review_detail = views.ReviewViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy"
})



urlpatterns = [
    path('', views.api_root),
    path("items/", item_list, name="item_list"),
    path("items/<int:pk>/", item_detail, name="item_detail"),
    path("categories/", item_category_list, name="item_category_list"),
    path("categories/<int:pk>/", item_category_detail, name="item_category_detail"),
    path("users/", user_list, name="user_list"),
    path("users/<int:pk>/", user_detail, name="user_detail"),
    path("orders/", order_list, name="order_list"),
    path("orders/<int:pk>/", order_detail, name="order_detail"),
    path("reviews/", review_list, name="review_list"),
    path("reviews/<int:pk>", review_detail, name="review_detail"),
]
explicit binding of urls to views
'''