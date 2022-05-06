# Create a method, most_common_letter, that takes a string as an argument and returns the most common letter in the string. Ignore special characters and include numbers.

# Example usage:
# most_common_letter("aaaabbc") # => "a"
# most_common_letter("T a d c g d g d d n") # => "d"
# most_common_letter("1111 monkeys on the wall") # => "1"

def most_common_letter(str)
    hash = Hash.new(0)
    str.split('').select{|e| /[a-zA-Z0-9]/.match(e) }.each{|i| hash[i] +=1 }
    p hash.key(hash.values.max)
end
most_common_letter("aaaabbc")  # => "a"
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"


