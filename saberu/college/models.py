from django.db import models

# Create your models here.
class College(models.Model):
	college_name = models.CharField(max_length=200)
	nick_name = models.CharField(max_length=200)
	public_private = models.CharField(max_length=7)
	state = models.CharField(max_length=2)
	opportunity_program = models.CharField(max_length=50)
	need_met = models.FloatField()
	test_optional = models.BooleanField()
	engineering = models.BooleanField()

	def __unicode__(self):
		return self.nick_name