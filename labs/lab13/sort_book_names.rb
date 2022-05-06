# Write some code that keeps asking the user for book names until the user enters "exit". After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.

books = []
while book = gets.chomp
    if book == 'exit'
        break
    else
        books << book.split.map(&:capitalize).join(' ')
    end
end
p books.sort()

