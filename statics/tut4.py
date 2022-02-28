import re


class Phone:
    def assign_color(self,c1):#methods adding
        self.color=c1 # assigning the value

    def assign_cost(self,cst):
        self.cost=cst

    def show_color(self):
        return self.color# returning the value 

    def show_cost(self):
        return self.cost

p1 = Phone() # object
p1.assign_color("red")
p1.assign_cost(123)
p1.show_color()
p1.show_cost()
