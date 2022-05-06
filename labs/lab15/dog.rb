require "./animal.rb"
class Dog < Animal
    def bark
        puts "Woof"
        self
    end
    def eat
        super
        puts "Bones are yummy! "
        self
    end
end


sparky=Dog.new("Sparky", "Black")
sparky.eat.bark
