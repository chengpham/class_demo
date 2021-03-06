class Board
    attr_accessor :square_hash, :history, :last_move
    Letters = ("a".."h").to_a
    Numbers = (1..8).to_a
    Letters_hash = {1=>"a", 2=>"b", 3=>"c", 4=>"d", 5=>"e", 6=>"f", 7=>"g", 8=>"h"}
    def initialize
      @history = History.new
      @square_hash = Hash.new
      assign_coordinate_names
      @white_background = false
    end
  
    def deep_copy(i)
      Marshal.load(Marshal.dump(i))
    end
  
    def assign_coordinate_names
      Letters.each_with_index do |letter,index|
        Numbers.each do |n|
          @square_hash["#{letter}#{n}"] = Square.new(index+1,n,"#{letter}#{n}")
        end
      end
    end
  
    def to_s
      board_string = "\t  a  b  c  d  e  f  g  h  \n\t"
      Numbers.each_with_index do |number, index|
        board_string += "#{Numbers[7 - index]}"
        Letters.each do |letter|
          if !@square_hash["#{letter}#{9 - number}"].piece_on_square.nil?
            board_string += color_background(" #{@square_hash["#{letter}#{9 - number}"].piece_on_square.unicode} ")
          else 
            board_string += color_background("   ")
          end
          @white_background = !@white_background
        end
        @white_background = !@white_background
        board_string += " #{Numbers[7 - index]}\n\t"
      end
      board_string += "  a  b  c  d  e  f  g  h  \n"
      board_string
    end
  
    def color_background(string)
      @white_background ? string = string.on_black : string = string.on_white
      string
    end
  
    def simplified_board
      @simplified_board = {}
      @square_hash.each do |k,v|
        v.piece_on_square.nil? ? @simplified_board[k] = nil : @simplified_board[k] = v.piece_type.to_s
      end
      @simplified_board
    end
  
    def store_board
      @history.snapshot.push(simplified_board)
    end 
  
    def store_move(from_square, to_square)
      @history.last_move = {}
      @history.last_move["#{from_square.piece_type}"] = [from_square, to_square]
    end 
  
    def place_piece(from_square, to_square)
      to_square.piece_on_square = from_square.piece_on_square
      from_square.piece_on_square = nil
    end
  
    def square_free?(square, board_hash=@square_hash)
      board_hash[square].piece_on_square.nil?
    end
  
    def same_color_on_square?(square, player_color, board_hash=@square_hash)
      !square_free?(square, board_hash) && board_hash[square].piece_on_square.color == player_color ? true : false
    end
  
    def diagonal_up_right?(from_square, to_square)
      (from_square.x < to_square.x) && (from_square.y < to_square.y) ? true : false
    end
  
    def diagonal_down_right?(from_square, to_square)
      (from_square.x < to_square.x) && (from_square.y > to_square.y) ? true : false
    end
  
    def diagonal_up_left?(from_square, to_square)
      (from_square.x > to_square.x) && (from_square.y < to_square.y) ? true : false
    end
  
    def diagonal_down_left?(from_square, to_square)
      (from_square.x > to_square.x) && (from_square.y > to_square.y) ? true : false
    end
  
    def horizontal_right?(from_square, to_square)
      from_square.x < to_square.x ? true : false
    end
  
    def horizontal_left?(from_square, to_square)
      from_square.x > to_square.x ? true : false
    end
  
    def up?(from_square, to_square)
      from_square.y < to_square.y ? true : false
    end
  
    def down?(from_square, to_square)
      from_square.y > to_square.y ? true : false
    end
  
    def pawn_promotion?
      @square_hash.any? do |_,v|
        (v.y == 8 && v.piece_type == Pawn) || (v.y == 1 && v.piece_type == Pawn)
      end
    end
  
    def pawn_advance_two_squares?
      if (@history.last_move.key? "Pawn") && @history.last_move["Pawn"][0].y == 7 && @history.last_move["Pawn"][1].y == 5
        true
      elsif (@history.last_move.key? "Pawn") && @history.last_move["Pawn"][0].y == 2 && @history.last_move["Pawn"][1].y == 4
        true
      else
        false
      end
    end
  
    def valid_en_passant?(from_square, to_square, piece)
      piece.class == Pawn && pawn_advance_two_squares? && adjacent_to_piece?(to_square, piece) ? true : false
    end
  
    def adjacent_to_piece?(to_square, piece)
      if piece.color == "white" && (@history.last_move["Pawn"][1].y == to_square.y - 1)
        true
      elsif piece.color == "black" && (@history.last_move["Pawn"][1].y == to_square.y + 1)
        true
      else
        false
      end
    end
  
    def valid_castle?(castle_side, player_color)
      if castle_side == "short" && player_color == "white" && square_free?("f1") && square_free?("g1")
        true
      elsif castle_side == "short" && player_color == "black" && square_free?("f8") && square_free?("g8")
        true
      elsif castle_side == "long" && player_color == "white" && square_free?("b1") && square_free?("c1") && square_free?("d1")
        true
      elsif castle_side == "long" && player_color == "black" && square_free?("b8") && square_free?("c8") && square_free?("d8")
        true
      else 
        false
      end
    end
  
    def castle(castle_side, player)
      if castle_side == "short" && player.color == "white"
        @square_hash["g1"].piece_on_square = player.king
        @square_hash["f1"].piece_on_square = player.short_side_rook
        @square_hash["e1"].piece_on_square = nil
        @square_hash["h1"].piece_on_square = nil
      elsif castle_side == "short" && player.color == "black"
        @square_hash["g8"].piece_on_square = player.king
        @square_hash["f8"].piece_on_square = player.short_side_rook
        @square_hash["e8"].piece_on_square = nil
        @square_hash["h8"].piece_on_square = nil
      elsif castle_side == "long" && player.color == "white"
        @square_hash["c1"].piece_on_square = player.king
        @square_hash["d1"].piece_on_square = player.long_side_rook
        @square_hash["e1"].piece_on_square = nil
        @square_hash["a1"].piece_on_square = nil
      elsif castle_side == "long" && player.color == "black"
        @square_hash["c8"].piece_on_square = player.king
        @square_hash["d8"].piece_on_square = player.long_side_rook
        @square_hash["e8"].piece_on_square = nil
        @square_hash["a8"].piece_on_square = nil
      end
    end
  
    def path_clear?(from_square, to_square, player_color, board_hash=@square_hash)
      if from_square.piece_type == Knight && (square_free?(to_square.coordinates, board_hash) || !same_color_on_square?(to_square.coordinates, player_color, board_hash))
        true
      elsif from_square.piece_type == Knight && same_color_on_square?(to_square.coordinates, player_color, board_hash)
        false
      elsif diagonal_up_right?(from_square, to_square)
         (to_square.x - from_square.x).times do |i| 
          i += 1
          if square_free?("#{Letters_hash[from_square.x + i]}#{from_square.y + i}", board_hash)
            true
          elsif (from_square.x + i  == to_square.x) && (from_square.y + i  == to_square.y) && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true 
          else 
            break false
          end
        end
      elsif diagonal_down_right?(from_square, to_square)
        (to_square.x - from_square.x).times do |i| 
          i += 1
          if square_free?("#{Letters_hash[from_square.x + i]}#{from_square.y - i}", board_hash)
            true
          elsif (from_square.x + i  == to_square.x) && (from_square.y - i  == to_square.y) && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else 
            break false
          end
        end
      elsif diagonal_down_left?(from_square, to_square)
        (from_square.x - to_square.x).times do |i|
          i += 1
          if square_free?("#{Letters_hash[from_square.x - i]}#{from_square.y - i}", board_hash)
            true
          elsif (from_square.x - i == to_square.x) && (from_square.y - i == to_square.y) && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else
            break false
          end
        end
      elsif diagonal_up_left?(from_square, to_square)
        (from_square.x - to_square.x).times do |i|
          i += 1
          if square_free?("#{Letters_hash[from_square.x - i]}#{from_square.y + i}", board_hash)
            true
          elsif (from_square.x - i == to_square.x) && (from_square.y + i == to_square.y) && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else  
            break false
          end
        end
      elsif horizontal_left?(from_square, to_square)
        (from_square.x - to_square.x).times do |i| 
          i += 1
          if square_free?("#{Letters_hash[from_square.x - i]}#{from_square.y}", board_hash)
            true
          elsif from_square.x - i == to_square.x && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else 
            break false
          end
        end
      elsif horizontal_right?(from_square, to_square)
        (to_square.x - from_square.x).times do |i|
          i += 1
          if square_free?("#{Letters_hash[from_square.x + i]}#{from_square.y}", board_hash)
            true
          elsif from_square.x + i == to_square.x && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else 
            break false
          end
        end
      elsif down?(from_square, to_square) 
        (from_square.y - to_square.y).times do |i|
          i += 1
          if square_free?("#{Letters_hash[from_square.x]}#{from_square.y - i}", board_hash)
            true
          elsif from_square.y - i == to_square.y && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else 
            break false
          end
        end
      elsif up?(from_square, to_square)
         (to_square.y - from_square.y).times do |i|
          i += 1
          if square_free?("#{Letters_hash[from_square.x]}#{from_square.y + i}", board_hash)
            true
          elsif from_square.y + i == to_square.y && !same_color_on_square?(to_square.coordinates, player_color, board_hash)
            true
          else 
            break false
          end
        end
      else 
        puts "Error"
        false
      end
    end
  end