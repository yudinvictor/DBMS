# Generated by Django 3.1.4 on 2020-12-17 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transport', '0003_auto_20201217_2254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(default='Создан', max_length=255, null=True),
        ),
    ]
