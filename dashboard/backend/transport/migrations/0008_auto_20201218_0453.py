# Generated by Django 3.1.4 on 2020-12-18 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transport', '0007_auto_20201218_0159'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipping',
            name='orders',
            field=models.ManyToManyField(related_name='shippings', to='transport.Order'),
        ),
    ]