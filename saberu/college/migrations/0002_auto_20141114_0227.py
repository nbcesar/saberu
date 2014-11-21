# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='college',
            name='undergraduate_enrollment',
        ),
        migrations.AddField(
            model_name='college',
            name='opportunity_program',
            field=models.CharField(default='N/A', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='college',
            name='public_private',
            field=models.CharField(default='Public', max_length=7),
            preserve_default=False,
        ),
    ]
