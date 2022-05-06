# You are given an array with numbers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one? Can you think of a way to do it using little extra memory?
# Solve it in two ways: one using hashes and one without.


arr = 1.upto(100).map{|i| i.to_s}
dups = ["13", "2", "68", "86"].each{ |v| arr.insert(rand(0..arr.length), v)}

require 'benchmark'
n=100000
Benchmark.bm do |x|
    x.report do
        n.times do
        arr.group_by{|e| e}.select{|k,v| v.count>1}.map{|i| i[0]}
        # arr.select{|e| arr.count(e) > 1 }.uniq
        end
    end
 end
# p arr.group_by{|e| e}.select{|k,v| v.count>1}.map{|i| i[0]}
# p arr.select{|e| arr.count(e) > 1 }.uniq

