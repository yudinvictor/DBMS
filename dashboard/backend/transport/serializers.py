from rest_framework import serializers
from .models import *


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branch
        fields = '__all__'


class CarParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarPark
        fields = '__all__'


class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = '__all__'


class DriverSerializer(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = '__all__'


class CargoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cargo
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_cargos = CargoSerializer(many=True)

    status = serializers.CharField(default='created', max_length=255)

    class Meta:
        model = Order
        depth = 1
        fields = ['id', 'status', 'departure_address', 'destination_address', 'order_cargos']

    def create(self, validated_data):
        cargos = validated_data.pop('order_cargos')
        instance = Order.objects.create(**validated_data, client=Client.objects.first())
        for cargo in cargos:
            Cargo.objects.create(**cargo, order=instance)

        return instance


class ShippingCreatingSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='completed', max_length=255)

    class Meta:
        model = Shipping
        fields = '__all__'

    def create(self, validated_data):
        orders = validated_data.pop('orders')
        instance = Shipping.objects.create(**validated_data)
        instance.orders.set(orders)
        for order in orders:
            if order.destination_address == validated_data.get('destination_address'):
                order.status = 'completed'
                order.save()

        return instance


class ShippingSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='completed', max_length=255)

    class Meta:
        model = Shipping
        depth = 2
        fields = '__all__'

