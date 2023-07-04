# Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.

class AncestralStories:
    def __init__(self, length, moral_lessons, age_group, title, content):
        self.title = title
        self.length = length
        self.moral_lessons = moral_lessons
        self.age_group = age_group
        self.content = content


class Stories(AncestralStories):
    def __init__(self, length, moral_lessons, age_group, title, content):
        super().__init__(length, moral_lessons, age_group, title, content)

    def records(self):
        print(f"{self.title} is a book best suited for {self.age_group} with good {self.moral_lessons} and it's {self.length} pages long.")


class Translator(AncestralStories):
    def __init__(self, length, moral_lessons, age_group, title, content, language):
        super().__init__(length, moral_lessons, age_group, title, content)
        self.language = language

    def translate(self, target_language):
        print(f"{self.title} is translating a story from {self.language} to {target_language}")
       



translator1 = Translator(200, "Courage", "Adults", "Tales of Bravery", "Long ago, in a kingdom of knights...", "Spanish")
translator1.translate("French")

story1 = Stories(100, "Kindness", "Children", "The Magical Forest", "Once upon a time, in a magical forest...")
story1.records()
story2 = Stories(50, "Perseverance", "Teenagers", "The Journey of Dreams", "In a land far away, there lived a young dreamer...")
story2.records()
story3 = Stories(80, "Friendship", "Children", "The Lost Treasure", "Deep in the jungle, a group of friends embarked on an adventure...")
story3.records()

# **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.

class Recipe:
    def __init__(self, name, country, ingredients, preparation_time, cooking_method, nutritional_value):
        self.name = name
        self.country = country
        self.ingredients = ingredients
        self.preparation_time = preparation_time
        self.cooking_method = cooking_method
        self.nutritional_value = nutritional_value

    def display_recipe(self):
        print(f"{self.name}")
        print(f"{self.country}")
        print("Ingredients:")
        for ingredient in self.ingredients:
            print(f"- {ingredient}")
        print(f"{self.preparation_time}")
        print(f"{self.cooking_method}")
        print("Nutritional Information:")
        for key, value in self.nutritional_value.items():
            print(f"- {key}: {value}")


class MoroccanRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_value, spicing_level):
        super().__init__(name, "Morocco", ingredients, preparation_time, cooking_method, nutritional_value)
        self.spicing_level = spicing_level

    def display_recipe(self):
        super().display_recipe()
        print(f"Spicing Level: {self.spicing_level}")


class EthiopianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_value, add_injera):
        super().__init__(name, "Ethiopia", ingredients, preparation_time, cooking_method, nutritional_value)
        self.add_injera = add_injera

    def display_recipe(self):
        super().display_recipe()
        print(f"Injera Required: {self.add_injera}")


class NigerianRecipe(Recipe):
    def __init__(self, name, ingredients, preparation_time, cooking_method, nutritional_value, yams_fufu):
        super().__init__(name, "Nigeria", ingredients, preparation_time, cooking_method, nutritional_value)
        self.yams_fufu = yams_fufu

    def display_recipe(self):
        super().display_recipe()
        print(f"Yams Fufu: {self.yams_fufu}")


# Creating a Moroccan recipe
moroccan_recipe = MoroccanRecipe(
    name="Moroccan Tajine",
    ingredients=["Chicken", "Onions", "Carrots", "Potatoes", "Spices"],
    preparation_time="30 minutes",
    cooking_method="Deep frying",
    nutritional_value={"Calories": 350, "Protein": 25, "Fat": 10, "Carbs": 40},
    spicing_level="Medium"
)
moroccan_recipe.display_recipe()

# Creating an Ethiopian recipe
ethiopian_recipe = EthiopianRecipe(
    name="Doro Wat",
    ingredients=["Chicken", "Onions", "Berbere Spice Mix", "Niter Kibbeh (Spiced Butter)"],
    preparation_time="1 hour",
    cooking_method="Shallow frying",
    nutritional_value={"Calories": 400, "Protein": 30, "Fat": 15, "Carbs": 45},
    add_injera=True
)
ethiopian_recipe.display_recipe()

# Creating a Nigerian recipe
nigerian_recipe = NigerianRecipe(
    name="Jollof Rice",
    ingredients=["Rice", "Tomatoes", "Peppers", "Onions", "Chicken"],
    preparation_time="45 minutes",
    cooking_method="boiling",
    nutritional_value={"Calories": 400, "Protein": 30, "Fat": 15, "Carbs": 45},
    yams_fufu="Well boiled"
)
nigerian_recipe.display_recipe()

# African Music Festival:** You're in charge of organizing a Pan-African music
# // festival. Many artists from different countries, each with their own musical style
# // and instruments, are scheduled to perform. You need to write a program to
# // manage the festival lineup, schedule, and stage arrangements. Think about how
# // you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# // how you might use inheritance if there are different types of performances or
# // stages.

class Artist:
    def __init__(self,musicStyle, instruments):
        self.musicStyle = musicStyle
        self.instruments = instruments
        self.schedules = []
        
    def displayDetails(self):
        print(f"{self.musicStyle}")
        print(f"{self.instruments}")
        print(f"{self.schedules}")

class Performance(Artist):
    def __init__(self, musicStyle, instruments,lineup):
        super().__init__(musicStyle, instruments)
        self.lineup = lineup
        
    def displayDetails(self):
        super().displayDetails()
        print(f"{self.lineup}")
    
    def eventPlanner(self, event):
      find = next((index for index, schedule in enumerate(self.schedules) if schedule == event), -1)
      if find != -1:
        addEvent = self.lineup.push(find)
        return f"{addEvent} has been added to the line up"
      else:
        return 'No scheduled event found'
    
class Stage(Artist):
    def __init__(self, musicStyle, instruments,arrangements):
        super().__init__(musicStyle, instruments)
        self.arrangements = arrangements
    def displayDetails(self):
        super().displayDetails()
        print(f"{self.arrangements}")
    
    def stageStyle(self):
        if self.musicStyle == self.arrangement:
           return f'The music style "{self.musicStyle}" matches the stage arrangement.'
        elif self.musicStyle in self.arrangement:
           return f'The music style "{self.musicStyle}" is included in the stage arrangement.'
        else:
            return f'The music style "{self.musicStyle}" does not match the stage arrangement.'


# Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.

    
class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity


product1 = Product("Apples", 1.99, 10)
product2 = Product("Bananas", 0.99, 15)
product3 = Product("Oranges", 2.49, 5)


total_value = product1.calculate_total_value() + product2.calculate_total_value() + product3.calculate_total_value()

print(f"The total value of the products is: {total_value}")

# Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average(self):
        total_grades = sum(self.grades)
        number_of_grades = len(self.grades)
        total_average = total_grades/number_of_grades
        return total_average
        
    def student_info(self):
        print(f"{self.name}")
        print(f"{self.age}")
        print(f"{self.grades}")
        
    def student_passed(self):
        average_grade = self.calculate_average
        return average_grade
    
  
student1 = Student("Eliud", 18, [85, 92, 78, 90, 87])
student2 = Student("Monica", 20, [75, 80, 92, 88, 85])
student3 = Student("Kelvin", 19, [95, 88, 92, 90, 85])

average_grade = student1.calculate_average()
student1.student_info()
print(average_grade)

