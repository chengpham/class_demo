# Implement a map_over_hash method that can be use to map over a hash returning an array. The block passed to the method must be passed the key and value of the mapped over pairs. You are not allowed to use Ruby Hash's each & map or any other similar method.

def map_over_hash(arr)
    new_arr = []
    for i,j in arr
        new_arr << yield(i,j)
    end
    p new_arr
end


map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
  "Her #{key.to_s} is #{value}"
end
# # => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]

map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
# # => [ "22222", "1010", "555555" ]

