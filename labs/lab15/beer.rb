require "./food.rb"
class Beer < Food
    def initialize(sugar,protein,fat, volume)
        super(sugar,protein,fat)
        @volume=volume
    end
    attr_accessor :volume
end

molson=Beer.new(50,2000,10,50)
p molson.sugar, molson.protein, molson.fat, molson.volume