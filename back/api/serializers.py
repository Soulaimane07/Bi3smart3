from rest_framework import serializers
from .models import User, SellerRequests

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class SellerRequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellerRequests
        fields = '__all__'