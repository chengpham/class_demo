require "./food.rb"
class Pizza < Food
    def initialize(sugar,protein,fat, weight)
        super(sugar,protein,fat)
        @weight=weight
    end
    attr_accessor :weight
end

peperoni=Pizza.new(10,5,2,50)
puts peperoni.fat
puts peperoni.weight
peperoni.sugar=80
peperoni.weight=100
puts peperoni.sugar, peperoni.weight
