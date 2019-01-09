**Solution to Active Record exploration activity**

# 1. To update the record with the ID 3: 

```ruby
Tweet.find(3).update(:body => "Hello. I’m an updated Tweet.")
```

# 2. Find all Tweets with a body that's longer than 25 characters: 

```ruby
Tweet.where("length(body) > 25")
```

# 3. Find all records that have been updated or edited before

```ruby
Tweet.where("created_at != updated_at")
```

# 4. Finding all records created prior to the latest tweet

# As an example: 
# Time recorded: Jan 9, 2019 7:05 pm (19:05)

# Create a new Tweet at 7:06 
```ruby
Tweet.create({:body => "This is the latest tweet I'm writing. I had eggs for breakfast."})
```
# Find records: 
# This will return all records except the most recently created
```ruby
Tweet.where("created_at < ?", DateTime.new(2019, 1, 9, 19, 5))
```

