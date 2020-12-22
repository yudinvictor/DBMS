from rest_framework import serializers
from .models import *
from .services import get_last_order_address, get_orders_by_city


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


class ShippingCreatingSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='completed', max_length=255)

    class Meta:
        model = Shipping
        fields = '__all__'

    def validate(self, attrs):
        orders = attrs.get('orders')
        for order in orders:
            last_address = get_last_order_address(order)
            if last_address != attrs.get('departure_address'):
                raise serializers.ValidationError('Вы не можете перевезти груз из места, где он не находится')
        return attrs

    def create(self, validated_data):
        orders = validated_data.pop('orders')
        instance = Shipping.objects.create(**validated_data)
        instance.orders.set(orders)
        for order in orders:
            if order.destination_address == validated_data.get('destination_address'):
                order.status = 'completed'
                order.save()
            elif order.status == 'created':
                order.status = 'in_progress'
                order.save()
        return instance


class ShippingSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='completed', max_length=255)

    class Meta:
        model = Shipping
        depth = 2
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_cargos = CargoSerializer(many=True)
    shippings = ShippingSerializer(many=True, required=False)

    status = serializers.CharField(default='created', max_length=255)

    class Meta:
        model = Order
        depth = 1
        fields = ['id', 'status', 'departure_address', 'destination_address', 'order_cargos', 'shippings']

    def create(self, validated_data):
        cargos = validated_data.pop('order_cargos')
        instance = Order.objects.create(**validated_data, client=Client.objects.first())
        for cargo in cargos:
            Cargo.objects.create(**cargo, order=instance)

        return instance


class CitySerializer(serializers.Serializer):
    orders = OrderSerializer(many=True, required=False)
    city = serializers.CharField(max_length=255)

    class Meta:
        fields = ['city']
        read_only_fields = ['orders']

    def validate(self, data):
        data['orders'] = get_orders_by_city(data.get('city'))

        return data
