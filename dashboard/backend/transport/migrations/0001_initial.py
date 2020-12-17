# Generated by Django 3.1.4 on 2020-12-17 19:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='CarPark',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField()),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.branch')),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.branch')),
            ],
        ),
        migrations.CreateModel(
            name='Manager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='Создан', max_length=255)),
                ('type', models.CharField(max_length=255)),
                ('departure_address', models.TextField()),
                ('destination_address', models.TextField()),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.client')),
            ],
        ),
        migrations.CreateModel(
            name='Transport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
                ('number', models.CharField(max_length=255)),
                ('car_park', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.carpark')),
            ],
        ),
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('stop_time', models.DateTimeField(null=True)),
                ('departure_address', models.TextField()),
                ('destination_address', models.TextField()),
                ('status', models.CharField(max_length=255)),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.driver')),
                ('orders', models.ManyToManyField(to='transport.Order')),
                ('transport', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='transport.transport')),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.FloatField()),
                ('type', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=255)),
                ('order', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='transport.order')),
            ],
        ),
        migrations.AddField(
            model_name='client',
            name='manager',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='transport.manager'),
        ),
        migrations.CreateModel(
            name='Cargo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('weight', models.FloatField()),
                ('type', models.CharField(max_length=255)),
                ('order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='order_cargos', to='transport.order')),
            ],
        ),
    ]
