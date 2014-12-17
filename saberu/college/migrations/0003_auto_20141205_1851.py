# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0002_auto_20141114_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='public_private',
            field=models.CharField(default=b'Private', max_length=7, choices=[(b'Public', b'Public'), (b'Private', b'Private')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='college',
            name='state',
            field=models.CharField(default=b'NY', max_length=2, choices=[(b'NY', b'New York'), (b'NJ', b'New Jersey'), (b'MA', b'Massachusetts')]),
            preserve_default=True,
        ),
    ]
