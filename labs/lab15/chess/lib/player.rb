class Player
    attr_accessor :color, :pieces, :captured_pieces
    def initialize(color)
      @color = color
      @captured_pieces = []
      @pieces = [Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Pawn.new(color),
                 Rook.new(color),
                 Rook.new(color),
                 Knight.new(color),
                 Knight.new(color),
                 Bishop.new(color),
                 Bishop.new(color),
                 Queen.new(color),
                 King.new(color)
                ]
    end
  
    def valid_move?(from_square, to_square, piece)
      if piece.class == Pawn && (to_square.x == from_square.x) && to_square.piece_on_square.nil?
        piece.get_valid_moves(from_square, to_square)
      elsif piece.class == Pawn && (to_square.x == from_square.x) && !to_square.piece_on_square.nil?
        false
      elsif piece.class == Pawn && (to_square.x != from_square.x) && !to_square.piece_on_square.nil? && (to_square.piece_on_square.color != piece.color)
        piece.get_valid_captures(from_square, to_square)
      elsif piece.class == Pawn && (to_square.x != from_square.x) && (to_square.piece_on_square.nil? || to_square.piece_on_square.color == piece.color)
        false
      else
       piece.class.get_valid_moves(from_square, to_square)
      end
    end
  
    def en_passant_move?(from_square, to_square, piece)
      piece.class == Pawn ? piece.get_en_passant_moves(from_square, to_square) : false
    end
  
    def promote_pawn(square, piece)
      square.piece_on_square = Object.const_get(piece).new(color, square.coordinates)
      @pieces << square.piece_on_square
    end
  
    def choose_player_piece(type)
      @pieces.find {|i| i.class == type && i.position == nil}
    end
  
    def king
      @pieces.find {|i| i.class == King}
    end
  
    def short_side_rook
      self.color == "white" ? @pieces.find {|i| i.position == "h1"} : @pieces.find {|i| i.position == "h8"}
    end
  
    def long_side_rook
      self.color == "white" ? @pieces.find {|i| i.position == "a1"} : @pieces.find {|i| i.position == "a8"}
    end
  
    def bishop_and_king_only?
      @pieces.all? {|i| i.class == King || i.class == Bishop}
    end
  
    def knight_and_king_only?
      @pieces.all? {|i| i.class == King || i.class == Knight}
    end
  
    def bishop_origin
      @pieces.find {|i| i.class == Bishop}.origin
    end
  
    def set_position(piece, to_square)
      piece.position = to_square.coordinates
    end
  
    def pieces_on_initial_square?
      if self.long_side_rook.on_initial_square && self.king.on_initial_square
        true
      elsif self.short_side_rook.on_initial_square && self.king.on_initial_square
        true
      else  
        false
      end
    end
  end