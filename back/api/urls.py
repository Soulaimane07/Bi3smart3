from django.urls import path
from . import views

urlpatterns = [
    path("users/", views.UserListCreate.as_view()),
    path("users/<int:pk>/", views.UserRetriveUpdateDestroy.as_view()),
    path("users/login/", views.UserLogin.as_view(), name='login'),

    path("sellerrequests/", views.SellerRequestsList.as_view()),
    path("sellerrequests/<int:pk>/", views.SellerRequestsPk.as_view()),

    path("categorie/", views.CategorieReq.as_view()),
    path("categorie/<int:pk>", views.CategorieReqPk.as_view()),

    path("products/", views.ProductsReq.as_view() ),
    path("products/<int:pk>", views.ProductsReqPk.as_view()),
    path("getproductbycategorie/",views.getproductby)
    

]

