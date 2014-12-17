# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0004_auto_20141205_1852'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='state',
            field=models.CharField(default=b'NY', max_length=2, choices=[(b'NY', b'New York'), (b'NJ', b'New Jersey'), (b'MA', b'Massachusetts'), (b'PA', b'Pennsylvania')]),
            preserve_default=True,
        ),
    ]
