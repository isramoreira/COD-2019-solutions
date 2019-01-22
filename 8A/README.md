**Rails Review**

*Activity 1a: Generating Tables for Continents and Countries*

Create model files:
```bash
$ rails generate model Continent continent_name:string
$ rails generate model Country country_name:string current_population:integer
```
Migrate to database: 
```bash
$ rails db:migrate
```

*Activity 1b: Seed the tables*

To populate the Continents table, students should just copy-and-paste the following code into their db/seeds.rb file:
```ruby
continents = ["North America", "South America", "Africa", "Europe", "Asia", "Australia",  "Antarctica"]
continents.each do |cont| 
	Continent.create({continent_name: cont})
end 
```

On the command line, run: 
```bash
$ rails db:seed
```

Populate the Countries table with the following: 
* United States, population: 325700000
* Canada, population: 36710000
* Singapore, 5612000
* Nigeria, 190900000
* Italy, 60590000
* Japan, 126800000
* Peru, 32170000

Students should go into
```bash
$ rails console
```

and populate the table:
```ruby
Country.create({country_name: 'Canada', current_population: 36710000})
#alternatively, you can teach them this shortcut: 
Country.create([{country_name: 'Canada', current_population: 36710000}, 
                {country_name: 'Singapore', current_population: 5612000} # and so on....
                ])
```

*Activity 2: Link the models*

1. Update the Country table schema:
```bash
$ rails generate migration AddContinentIdToCountries continent_id:integer
$ rails db:migrate
```

2. Update the country records (students can do this manually, or they can write a script, but with 7 entries, it shouldn't be faster either way)
```ruby
Country.find(1).update(continent_id: '1')
# ... and so on
```

3. Finally, update the model files themselves for both models:

In *country.rb*, add
```ruby
  belongs_to :continent
```

In *continent.rb*, add
```ruby
  has_many :countries
```
