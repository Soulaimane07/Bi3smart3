# Generated by Django 5.0.3 on 2024-04-28 23:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_products_tags_products_seller_delete_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='seller',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='api.user'),
        ),
    ]
