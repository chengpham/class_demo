class Knight < Piece
    def initialize(color, position=nil)
      super(color)
      @position = position
      case @color 
      when "black"
        @unicode = "\u2658"
      when "white"
        @unicode = "\u265E"
      end
    end
  
    def self.get_valid_moves(from_square, to_square)
      potentials = []
      potentials.push(
        [from_square.x + 2, from_square.y + 1],
        [from_square.x + 2, from_square.y - 1],
        [from_square.x + 1, from_square.y + 2],
        [from_square.x + 1, from_square.y - 2],
        [from_square.x - 2, from_square.y + 1],
        [from_square.x - 2, from_square.y - 1], 
        [from_square.x - 1, from_square.y + 2], 
        [from_square.x - 1, from_square.y - 2]
        )
  
      valid_children = potentials.select do |i|
        i[0].between?(0,8) &&
        i[1].between?(0,8)
      end
      valid_children.include? [to_square.x, to_square.y]
    end
  end