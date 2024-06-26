# Generated by Django 5.0.3 on 2024-05-02 23:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('api', '0020_alter_panier_quantite'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commande',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantite', models.IntegerField(default=1)),
                ('prix', models.FloatField(default=0)),
                ('size', models.CharField(max_length=100)),
                ('productId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.products')),
                ('userId', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.user')),
            ],
        ),
    ]
