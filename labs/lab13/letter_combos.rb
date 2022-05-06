# Given a string such as "abcd". Generate an array that gives every 2-letter combination that are adjacent so your code will generate:
# 1 | ["ab", "bc", "cd"]
# Given a string 123456: 1| ["12", "23", "34", "45", "56"]

# str = 'abcd'.split('')
str = '123456'.split('')
arr = []
for i in 0...str.length-1
    arr.push("#{str[i]}#{str[i+1]}")
end
p arr
