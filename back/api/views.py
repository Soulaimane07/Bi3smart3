from django.shortcuts import render
from rest_framework import generics, status
from .serializers import UserSerializer, SellerRequestsSerializer, CategorieSerializer, ProductsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User, SellerRequests ,Categorie, Products


class UserListCreate(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, format=None):
        email = request.data.get("email") 
        fname = request.data.get("fname") 
        lname = request.data.get("lname") 
        password = request.data.get("password") 
        role = request.data.get("role", "client") 

        if email and fname and lname and password :
            try:
                user = User.objects.create(
                    email=email,
                    fname=fname,
                    lname=lname,
                    password=password,
                    role=role
                )
                serializer = UserSerializer(user) 
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response("User not created", status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response("Parameters missing", status=status.HTTP_400_BAD_REQUEST)      

class UserRetriveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"

class UserLogin(APIView):
    def post(self, request, format=None):
        email = request.data.get("email", "") 
        
        if email:
            try:
                user = User.objects.get(email=email) 
                userSerializer = UserSerializer(user)
                serializer_data = userSerializer.data

                if user.role == "client" :
                    try:
                        isRequested = SellerRequests.objects.get(userId=user.id)
                        requestSerializer = SellerRequestsSerializer(isRequested)

                        if requestSerializer.data['id']:
                            serializer_data['isRequested'] = 1
                        else:
                            serializer_data['isRequested'] = 0
                    except SellerRequests.DoesNotExist:
                        serializer_data['isRequested'] = 0

                return Response(serializer_data, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response( status=status.HTTP_404_NOT_FOUND)
        else:
            return Response("Email parameter missing", status=status.HTTP_400_BAD_REQUEST)
        




class SellerRequestsList(generics.ListCreateAPIView):
    queryset = SellerRequests.objects.all()
    serializer_class = SellerRequestsSerializer

class SellerRequestsPk(generics.RetrieveUpdateDestroyAPIView):
    queryset = SellerRequests.objects.all()
    serializer_class = SellerRequestsSerializer
    lookup_field = "pk"




class CategorieReq(generics.ListCreateAPIView):
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer 

class CategorieReqPk(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categorie.objects.all()
    serializer_class = CategorieSerializer
    lookup_field = "pk"
    



class ProductsReq(generics.ListCreateAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


class ProductsReqPk(generics.RetrieveUpdateDestroyAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    lookup_field = "pk"
    

    # def post(self, request, *args, **kwargs):
    #     posts_serializer = ProductsSerializer(data=request.data)
    #     print(posts_serializer.data)
        # if posts_serializer.is_valid():
        #     posts_serializer.save()
        #     return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        # else:
        #     print('error', posts_serializer.errors)
        #     return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)




