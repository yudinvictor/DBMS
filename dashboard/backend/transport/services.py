from .models import Order


def get_last_order_address(order):
    last_shipping = order.shippings.last()
    if last_shipping is not None:
        last_address = last_shipping.destination_address
    else:
        last_address = order.departure_address

    return last_address


def get_orders_by_city(city: str):
    return list(filter(lambda x: get_last_order_address(x) == city, Order.objects.all()))
