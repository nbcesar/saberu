from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views import generic

from college.models import College

# Create your views here.

class IndexView(generic.ListView):
	template_name = 'college/index.html'
	context_object_name = 'college_list'

	def get_queryset(self):
		'''Return the list of colleges.'''
		return College.objects.all()

class DetailView(generic.DetailView):
	model = College
	template_name = 'college/detail.html'
