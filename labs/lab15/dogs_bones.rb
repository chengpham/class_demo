# [Lab] Dogs & Bones
# Make two classes dog and bones. The dog class must have an initialize method that takes dog's colour and type. The bone must have an initialize method that assigns a size for the bone.

# The dog class must have a give method that takes a bone object and adds it to an array of bones for the dog. The dog can take a maximum of three bones so if you give it more than three it will will print, I have too many bones.

# The dog class must have an eat bone method so that when you call it it removes a bone from the array of bones and prints "yummy! I ate 'big' bone" the 'big' part comes from the size attribute of bone.

class Dogs
    def initialize(colour, type)
        @colour=colour
        @type=type
        @bones = []
    end
    attr_accessor :colour, :type, :bones
    def add_bone(bone)
        unless bone.is_a? Bones
            raise ArgumentError.new("Must only eat bones")
        end
        if @bones.length >= 3
            puts "I have too many bones."
        else
            @bones << bone.size
        end
    end
    def eat_bone()
        if @bones.length == 0
            puts "No bones left"
        else
            puts "yummy! I ate #{@bones[-1]} bone."
            @bones.pop
        end
        self
    end
end

class Bones
    def initialize(size)
        @size=size
    end
    attr_accessor :size
end

sparky=Dogs.new("Brown", "Lab")

sparky.add_bone(Bones.new('small'))
sparky.add_bone(Bones.new('large'))
sparky.eat_bone.eat_bone.eat_bone
