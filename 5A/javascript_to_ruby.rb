#[1,2,23,41,23].each_with_index do |ele, index|
#  puts ele
#  puts index
#end


def everyOtherElement(array)
  finalArray = []
  array.each_with_index do |element, index|
    if index % 2 == 1
      finalArray.push(element)
    end
  end
  return finalArray
end

  