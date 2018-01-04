from django.db import models

# Create your models here.
class team(models.Model):
	teamName = models.CharField(max_length=20)
	teamDescription = models.CharField(max_length=100)
	teamIncharge = models.CharField(max_length=20)
    

	def __str__(self):
		return self.teamName
		return self.teamIncharge
		return self.teamDescription
    
class employee(models.Model):
    employeeName = models.CharField(max_length=20)
    employeeId = models.CharField(max_length=4,primary_key=True)
    employeeTenure = models.IntegerField()
    employeeTeam = models.ForeignKey(team,related_name="teammember",        on_delete=models.CASCADE,
)
    
    def __str__(self):
        return self.employeeName
        return self.employeeId
        return self.employeeTeam
        return self.employeeTenure
    
class task(models.Model):
    taskId = models.IntegerField()
    taskTeam = models.ForeignKey(team,related_name="teamtask",        on_delete=models.CASCADE,
)
    taskName = models.CharField(max_length=20)
    taskResourceRequired = models.IntegerField()
    taskRequester = models.CharField(max_length=20)
    
    def __str__(self):
        return self.taskName
        return self.taskRequester
        return self.taskResourceRequired

class comment(models.Model):
    commentSender=models.CharField(max_length=10)
    commentSubject = models.CharField(max_length=20)
    commentMessage = models.CharField(max_length=100)
    commentTeam = models.ForeignKey(team,related_name="teamcomments",        on_delete=models.CASCADE,
)
    
    def __str__(self):
        return self.commentSender
        return self.commentSubject
        return self.commentMessage


