from django.db import models

# Create your models here.
class College(models.Model):
	PUBLIC_PRIVATE = (
		('Public', 'Public'),
		('Private', 'Private'),
	)
	STATE = (
		('NY', 'New York'),
		('NJ', 'New Jersey'),
		('MA', 'Massachusetts'),
		('PA', 'Pennsylvania'),
		('ME', 'Maine'),
	)
	college_name = models.CharField(max_length=200)
	nick_name = models.CharField(max_length=200)
	public_private = models.CharField(max_length=7, choices=PUBLIC_PRIVATE, default='Private')
	state = models.CharField(max_length=2, choices=STATE, default='NY')
	opportunity_program = models.CharField(max_length=50)
	need_met = models.FloatField()
	test_optional = models.BooleanField(default=False)
	engineering = models.BooleanField(default=False)

	def __unicode__(self):
		return self.nick_name