# Generated by Django 5.0.3 on 2024-05-01 14:42

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_panier'),
    ]

    operations = [
        migrations.AddField(
            model_name='panier',
            name='size',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='panier',
            name='userId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.user'),
        ),
    ]
