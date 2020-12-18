from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Order(models.Model):
    status = models.CharField(max_length=255, default='Создан', blank=True)
    departure_address = models.TextField()
    destination_address = models.TextField()

    client = models.ForeignKey(Client, on_delete=models.PROTECT)

    def __str__(self):
        return 'от ' + self.client.name + ' из ' + self.departure_address + ' в ' + self.destination_address


class Payment(models.Model):
    amount = models.FloatField()
    type = models.CharField(max_length=255)
    status = models.CharField(max_length=255)

    order = models.OneToOneField(Order, on_delete=models.PROTECT)


class Branch(models.Model):
    address = models.TextField()


class CarPark(models.Model):
    address = models.TextField()

    branch = models.ForeignKey(Branch, on_delete=models.PROTECT)


class Transport(models.Model):
    type = models.CharField(max_length=255)
    number = models.CharField(max_length=255)

    car_park = models.ForeignKey(CarPark, on_delete=models.PROTECT)


class Driver(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=255)

    branch = models.ForeignKey(Branch, on_delete=models.PROTECT)


class Shipping(models.Model):
    start_time = models.DateTimeField()
    stop_time = models.DateTimeField(null=True)
    departure_address = models.TextField()
    destination_address = models.TextField()
    status = models.CharField(max_length=255)

    orders = models.ManyToManyField(Order)
    transport = models.ForeignKey(Transport, on_delete=models.PROTECT)
    driver = models.ForeignKey(Driver, on_delete=models.PROTECT)


class Cargo(models.Model):
    name = models.TextField()
    weight = models.FloatField()
    type = models.CharField(max_length=255)

    order = models.ForeignKey(Order, on_delete=models.PROTECT, related_name='order_cargos', null=True, blank=True)

    def __str__(self):
        return self.name + ' весом' + str(self.weight) + ' kg'
