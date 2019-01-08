# Part 1 

# In JavaScript: 
# var myVariable = 7.4543;
# console.log(myVariable);
# A

my_variable = 7.4543

# B

puts my_variable

# Part 2 

# In JavaScript: 
# var mostSpokenLanguages = ['English', 'Mandarin Chinese', 'Spanish', 'Arabic', 'Hindi', 'Russian', 'Malay'];
# mostSpokenLanguages[0];
# mostSpokenLanguages[mostSpokenLanguages.length - 1]
# 
# mostSpokenLanguages.indexOf('Arabic'); 



most_spoken_languages = ['English', 'Mandarin Chinese', 'Spanish', 'Arabic', 'Hindi', 'Russian', 'Malay']

most_spoken_languages[0]
most_spoken_languages[most_spoken_languages.length - 1]

most_spoken_languages.index('Arabic')


# Part 3 

# JavaScript version: 
# var dogProfile = {
#   name: 'Fido',
#   age: 3, 
#   gender: 'male', 
#   breed: 'mixed', 
#   pattern: 'spotted'
# }

dog_profile = {
  :name => 'Fido',
  :age => 3, 
  :gender => 'male', 
  :breed => 'mixed', 
  :pattern => 'spotted'
}

dog_profile[:name] # 'Fido'

# Part 4 
=begin
function everyOtherElement(array) {
  var finalArray = []; 
  array.forEach(function(element, index) {
    if (index % 2 === 1) {
      finalArray.push(element);
    }
  });
  return finalArray;
}
=end

def every_other_element(array)
  final_array = []
  array.each_with_index do |element, index|
    if index % 2 == 1
      final_array.push(element)
    end
  end
  return final_array
end





