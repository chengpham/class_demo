# Given an array of questions like this:

# 1 | questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]
# Generate an array of questions whose total character count is greater than 15.

# Bonus: Do it in two ways, one of them using select method for Ruby Arrays.

questions = ["What is your name", "How are you?", "Is that right?", "Are you John?", "How is everything?"]

p questions.select{|i|i.size>15}