# Generated by Django 3.1.4 on 2020-12-17 22:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transport', '0006_remove_order_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='manager',
        ),
        migrations.DeleteModel(
            name='Manager',
        ),
    ]
