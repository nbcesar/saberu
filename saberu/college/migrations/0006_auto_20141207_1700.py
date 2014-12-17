# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0005_auto_20141207_1658'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='state',
            field=models.CharField(default=b'NY', max_length=2, choices=[(b'NY', b'New York'), (b'NJ', b'New Jersey'), (b'MA', b'Massachusetts'), (b'PA', b'Pennsylvania'), (b'ME', b'Maine')]),
            preserve_default=True,
        ),
    ]
