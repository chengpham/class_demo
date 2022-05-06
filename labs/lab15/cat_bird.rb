# [Lab] Cat & Bird
# Model the following in Ruby Classes & Objects: The cat catches the bird and eats it
# Stretch 1: Use inheritance
# Stretch 2: Give the cat and the bird names.
# Stretch 3: Make the chances of the cat catching the bird 50%.
# Stretch 4: Simulate having 100 cats trying to catch and eat 100 birds.
# Stretch 5: Create a module called HelperMethods in a separate file that has a method called `random_number`. Include the module in your classes and use the `random_number` method if it makes sense.
require "./animal.rb"
require "./module.rb"
class Cat < Animal
    include HelperMethods
    def catch(bird)
        if random_number
            puts "caught #{bird.name} and eat it"
        else
            puts "missed"
        end
    end
end
class Bird < Animal
    include HelperMethods
end
garfield=Cat.new("Garfield")
tweety=Bird.new("Tweety Bird")
1.upto(100){ |i| garfield.catch(tweety) }