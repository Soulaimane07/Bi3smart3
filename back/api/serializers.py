from rest_framework import serializers
from .models import User, SellerRequests, Categorie, Products, Favoris


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

#class TagSerializer(serializers.ModelSerializer):
   # class Meta:
      #  model = Tag
      # fields = '__all__'
        
class ProductsSerializer(serializers.ModelSerializer):
   # tags = TagSerializer(many=True)
    class Meta:
         model = Products
         fields = '__all__'

class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoris 
        fields = '__all__'  



