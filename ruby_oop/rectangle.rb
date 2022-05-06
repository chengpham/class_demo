class Rectangle
    attr_accessor :width, :height
    def initialize(width,height)
        @height=height
        @width=width
    end
    def area
        p @height*@width
    end
    def is_square?
        puts height==width
    end
end

c=Rectangle.new(4,4)
c.is_square?
c.area