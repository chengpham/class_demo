# [Challenge] Chess Game Modelling
# Try to model a chess game using objects and classes model the pieces, the board, the players, the movements and provide ability to store state of board and ability to announce winner.
# Bonus: Make it functional so that you:
# Enforce the places that each piece can move.
# You can't move a piece outside the boundaries of the board.
# Enforces turns for players.
class Chess
    def initialize(player_1="red", player_2="black")
        @player_1=player_1
        @player_2=player_2
        @board = []
        # @board = ["_","_","_","_","_","_","_","_",]
    end
    def display
         1.upto(8).each{|i| @board << "#"}
        puts @board
        
    end
end


game1=Chess.new("red", "black")
game1.display