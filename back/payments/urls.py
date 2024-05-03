from django.urls import path
from .views import CreateCheckoutSessionView

urlpatterns = [
    path('checkout/', CreateCheckoutSessionView.as_view()),
]