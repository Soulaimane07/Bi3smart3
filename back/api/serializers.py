from rest_framework import serializers
from .models import User, SellerRequests, Categorie, Products


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SellerRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerRequests
        fields = '__all__'

class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie  
        fields = '__all__'    

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
         model = Products
         fields = '__all__'

