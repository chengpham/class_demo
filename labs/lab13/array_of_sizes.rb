arr = ['Hello world, my name is cheng. I believe it hard work and determination!']
array = []
hash = {}
arr[0].split(' ').map{ |word|
    array.push(word.length)
    hash[word] = word.length
}
p array
p hash