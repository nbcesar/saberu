from django.conf.urls import patterns, url

from college import views
from college import json_views

urlpatterns = patterns('',
    #url(r'^$', views.index, name='index'),
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^(?P<pk>\d+)/$', views.DetailView.as_view(), name='detail'),
    #url(r'^(?P<pk>\d+)/results/$', views.ResultsView.as_view(), name='results'),
    url(r'^api/v1/colleges/$', json_views.CollegeCollection.as_view(), name="college_collection"),
    #url(r'^api/v1/colleges/(?P<pk>[0-9]+)$', json_views.as_view()),

)