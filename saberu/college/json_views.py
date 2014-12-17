from college.serializers import CollegeSerializer
from college.models import College
from rest_framework import mixins
from rest_framework import generics

class CollegeCollection(mixins.ListModelMixin,
						mixins.CreateModelMixin,
						generics.GenericAPIView):
	
	queryset = College.objects.all()
	serializer_class = CollegeSerializer

	def get(self, request):
		return self.list(request)

	def post(self, request):
		return self.create(request)

class CollegeMember(mixins.RetrieveModelMixin,
					mixins.UpdateModelMixin,
					mixins.DestroyModelMixin,
					generics.GenericAPIView):

	queryset = College.objects.all()
	serializer_class = CollegeSerializer

	def get(self, request, *args, **kwargs):
		return self.retrieve(request, *args, **kwargs)

	def put(self, request, *args, **kwargs):
		return self.update(request, *args, **kwargs)

	def delete(self, request, *args, **kwargs):
		return self.destroy(request, *args, **kwargs)