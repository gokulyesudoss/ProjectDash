# Generated by Django 2.0 on 2017-12-25 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashservice', '0003_auto_20171225_1548'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='taskId',
            field=models.IntegerField(),
        ),
    ]
