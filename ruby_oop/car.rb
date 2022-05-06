class Car
    def initialize(model, type='gas', capacity=4)
        @model = model
        @type = type
        @capacity = capacity
    end
    def details
        puts "this car is a #{@model} with #{@type} engine and seats #{@capacity}"
    end
    def self.max_speed
        puts "200"
    end
    attr_accessor :model
    attr_accessor :type
    attr_accessor :capacity
    def drive
        ignite_engine
        puts "I am driving"
        self
    end
    def stop
        puts "I am stopped"
        pump_gas
        self
    end
    def park
        puts "I am parked"
        self
    end
    private
    def ignite_engine
        puts "engine starting"
        self
    end
    def pump_gas
        puts "pumping gas into car"
        self
    end
end

# car1 = Car.new
# car1.drive.stop.park
# Car.max_speed
# car1.stop
# car1.park

car2 = Car.new("BMW", "Gas", 5)
puts car2.model
puts car2.type
puts car2.capacity
car2.model = 'Audi'
car2.type = 'Electric'
car2.capacity = '2'
puts car2.model
puts car2.type
puts car2.capacity
# car2.details