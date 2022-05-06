
# repeat = 1
# for letter in "a".."z"
#     puts letter * repeat
#     repeat += 1
# end



# for letter in letters
#         puts letter.each()
# end
# puts letters.cycle(3).to_a.join(' ')

# alph = *:a..:z
# (0...alph.length).each { |i| i.times { puts alph[i]} }


# question = 3
# while question>0
#     score = 0
#     puts "How many sides does a hexagon have?\n1-five\n2-six\n3-seven"
#     answer=gets.chomp
#     if answer == 1
#         return score += 1
#     end
#     question-=1
#     puts "What colour is the sun?\n1-red\n2-orange\n3-yellow"
#     answer=gets.chomp
#     if answer == 3
#         return score += 1
#     end
#     question-=1
#     puts "What colour is the banana?\n1-red\n2-yellow\n3-blue"
#     answer=gets.chomp
#     if answer == 2
#         return score += 1
#     end
#     puts "You scored #{score/3}*100% "
# end

# puts "How many sides does a hexagon have?\n1-five\n2-six\n3-seven"
# answer_1=gets.chomp
# puts "What colour is the sun?\n1-red\n2-orange\n3-yellow"
# answer_2=gets.chomp
# puts "What colour is the banana?\n1-red\n2-yellow\n3-blue"
# answer_3=gets.chomp
# score=0
# if answer_1=="1"
#     score+=1
# end
# if answer_2=="3"
#     score+=1
# end
# if answer_3=="2"
#     score+=1
# end
# puts "You scored #{score*100/3}%, you got #{score} out of 3 questions correctly."



# arr=[]
# puts "Enter first letter"
# arr.push(gets.chomp)
# puts "Enter second letter"
# arr.push(gets.chomp)
# puts "Enter third letter"
# arr.push(gets.chomp)
# puts "\n\n"
# for i in arr.permutation(3).to_a
#     print "#{i.join(' ')}\n"
# end


# puts "Enter a num"
# num=gets.chomp.to_i
# puts "\n"
# num_range= 0..num
# require 'prime'
# arr=[]
# for n in num_range
#     if Prime.prime?(n)
#         arr.push(n)
#     end
# end
# puts arr

# puts "Please enter a number"
# x = gets.chomp.to_i
# for i in 2...x+1
#     for j in 2..i
#         break if i%j ==0
#     end
#     puts "#{i}" if i==j
# end


puts "Plese input number"
answer = gets.chomp.to_i
require 'prime'
puts Prime.first(answer)