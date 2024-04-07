from django.db import models
from django.contrib.auth.hashers import make_password

class User(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('client', 'Client'),
        ('seller', 'Seller'),
    ]

    email = models.CharField(max_length=100, unique=True)
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    role = models.CharField(max_length=100, choices=ROLE_CHOICES, default='client')

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.email
    
class SellerRequests(models.Model):
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.BooleanField()

    def __str__(self):
        return self.userId