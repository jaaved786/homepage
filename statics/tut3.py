 # class in python

from html.entities import name2codepoint
from unicodedata import name


class Employee:
    def __init__(self,n,a,s,g):
           self.name= n
           self.age = a 
           self.salary=s
           self.gender = g

    def show_employee_details(self):
        print("name of employee is",self.name)
        print("age of employee is",self.age)
        print("salary of employee is ",self.salary)
        print("gender of employee is ",self.gender)

emp1 = Employee("javed",22,10000,"male")#instance example object creation  
emp1.show_employee_details() 
 

    
    



                  
   
    

 

