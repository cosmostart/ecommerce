from rest_framework import generics
from ..models import Customer
from ..serializers import CustomerDetailSerializer


class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailSerializer
