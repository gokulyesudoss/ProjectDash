from rest_framework import serializers
from . models import team,comment,employee,task

class teamserializer(serializers.ModelSerializer):
    class Meta:
        model = team
        fields =('teamName','teamDescription','teamIncharge')
        
class employeeserializer(serializers.ModelSerializer):
    employeeTeam = teamserializer()
    class Meta:
        model = employee
        fields =('employeeName','employeeId','employeeTenure','employeeTeam')
        
class taskserializer(serializers.ModelSerializer):
    taskTeam = teamserializer()
    class Meta:
        model = task
        fields =('taskId','taskTeam','taskName','taskResourceRequired','taskRequester')
        
class commentserializer(serializers.ModelSerializer):
    commentTeam = teamserializer()
    class Meta:
        model = comment
        fields =('commentSender','commentSubject','commentMessage','commentTeam')
        		