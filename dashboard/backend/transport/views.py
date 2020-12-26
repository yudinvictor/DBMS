from rest_framework import viewsets, views
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response

from .serializers import *


class ClientViewSet(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


class PaymentViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()


class CargoViewSet(viewsets.ModelViewSet):
    serializer_class = CargoSerializer
    queryset = Cargo.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()


class BranchViewSet(viewsets.ModelViewSet):
    serializer_class = BranchSerializer
    queryset = Branch.objects.all()


class CarParkViewSet(viewsets.ModelViewSet):
    serializer_class = CarParkSerializer
    queryset = CarPark.objects.all()


class TransportViewSet(viewsets.ModelViewSet):
    serializer_class = TransportSerializer
    queryset = Transport.objects.all()


class DriverViewSet(viewsets.ModelViewSet):
    serializer_class = DriverSerializer
    queryset = Driver.objects.all()


class ShippingViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Shipping.objects.all()
        serializer = ShippingSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Shipping.objects.all()
        shipping = get_object_or_404(queryset, pk=pk)
        serializer = ShippingSerializer(shipping)
        return Response(serializer.data)

    def create(self, request):
        serializer = ShippingCreatingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)


class CityView(views.APIView):

    def get(self, request, city=None):
        serializer = CitySerializer(data={'city': city})
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.data)
