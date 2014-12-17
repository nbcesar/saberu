from rest_framework import serializers
from college.models import College

class CollegeSerializer(serializers.ModelSerializer):
	class Meta:
		model = College
		fields = ('id', 'nick_name', 'public_private','state', 'opportunity_program', 'need_met', 'test_optional', 'engineering',)