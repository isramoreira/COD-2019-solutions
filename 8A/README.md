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