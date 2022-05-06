require "./animal.rb"
class Cat < Animal
    def eat
        super
        puts "Fish are yummy! "
        self
    end
end

garfield=Cat.new("Garfield", 'Orange')
garfield.eat