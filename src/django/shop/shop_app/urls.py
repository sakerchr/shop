from django.urls import path

from . import views

app_name="shop_app"
urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('items/', views.items, name='items'),
    path('item/<int:item>/', views.item, name='item'),
    path('categories/', views.categories, name='categories'),
    path('category/<str:category>', views.items_from_category, name='category_items'),
    path('orders/', views.user_orders, name='orders'),
    path('item/<int:item>/reviews/', views.reviews_for_item, name='review_for_item'),
    path('reviews/', views.reviews_by_user, name='reviews_by_user')
]