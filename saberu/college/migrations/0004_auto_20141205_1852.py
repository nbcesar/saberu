# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0003_auto_20141205_1851'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='engineering',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='college',
            name='test_optional',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
