# Generated by Django 3.1.4 on 2020-12-18 02:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transport', '0008_auto_20201218_0453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipping',
            name='driver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='shippings', to='transport.driver'),
        ),
    ]