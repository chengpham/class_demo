# [demo] Pizza & Beer
# Create a Pizza class and a Beer class. They both should have sugar, protein and fat attributes. The Pizza class should have weight attribute and the beer class should have volume attribute. Create a parent Food class and use inheritance.
class Food
    def initialize(sugar,protein,fat)
        @sugar=sugar
        @protein=protein
        @fat=fat
    end
    attr_accessor :sugar, :protein, :fat
end




