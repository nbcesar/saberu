# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('college_name', models.CharField(max_length=200)),
                ('nick_name', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=2)),
                ('need_met', models.FloatField()),
                ('test_optional', models.BooleanField()),
                ('engineering', models.BooleanField()),
                ('undergraduate_enrollment', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
