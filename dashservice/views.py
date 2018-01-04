from django.shortcuts import render
from django.views.generic import TemplateView # Import TemplateView


# Create your views here.
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import team,employee,task,comment
from . serializers import teamserializer,employeeserializer,commentserializer,taskserializer

class IndexPageView(TemplateView):
    template_name = "index.html"

class teamslist(APIView):
	def get(self,request):
		teamObj = team.objects.all()
		serializer = teamserializer(teamObj,many = True)
		return Response(serializer.data)

	def post(self):
		pass
    
class employeelist(APIView):
    def get(self,request):
        employeeObj = employee.objects.all()
        serializer = employeeserializer(employeeObj,many=True)
        return Response(serializer.data)
    
    def post(self):
        pass
    
class tasklist(APIView):
    def get(self,request):
        taskObj = task.objects.all()
        serializer = taskserializer(taskObj,many=True)
        return Response(serializer.data)
    
    def post(self):
        pass
    
class commentlist(APIView):
    def get(self,request):
        commentObj = comment.objects.all()
        serializer = commentserializer(commentObj,many=True)
        return Response(serializer.data)
    
    def post(self):
        pass
