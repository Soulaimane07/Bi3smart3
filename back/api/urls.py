from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path("users/", views.UserListCreate.as_view()),
    path("users/<int:pk>/", views.UserRetriveUpdateDestroy.as_view()),
    path("users/login/", views.UserLogin.as_view(), name='login'),

    path("sellerrequests/", views.SellerRequestsList.as_view()),
    path("sellerrequests/<int:pk>/", views.SellerRequestsPk.as_view()),

    path("categorie/", views.CategorieReq.as_view()),
    path("categorie/<int:pk>", views.CategorieReqPk.as_view()),
    path("categorie/<str:title>", views.CategorieReqTitle.as_view()),

    path("products/", views.ProductsReq1.as_view()),
    path("products/<int:pk>", views.ProductsReqPk.as_view()),
    path("getproductbycategorie/<int:id>/", views.ProductsReq.as_view(), name="getproductbyCategory"),
    path("searchproducts/<str:searchTerm>/", views.Search.as_view()),
    path("getproductbyidseller/<int:sellerid>/", views.Productbyidseller.as_view(), name='get'),

    path("favoris/", views.getFav.as_view()),
    path("favoris/<int:pk>/", views.getFavPk.as_view()),
    path("favorisuser/<int:userid>/", views.getFav.as_view()),
    path("removefavoris/", views.removeFav.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

