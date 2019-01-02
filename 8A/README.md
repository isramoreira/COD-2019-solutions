**Solution code for the activity:**

In *cars_controller.rb*:

```ruby
def index
  if params[:max_price] && params[:brand]
    @cars = Car.where("price < ? AND brand = ?", params[:max_price], params[:brand])
  elsif params[:max_price]
    @cars = Car.where("price < ?", params[:max_price])
  elsif params[:brand]
    @cars = Car.where("brand = ?", params[:brand])
  else 
    @cars = Car.all
  end
  
  render :json => @cars
end
```

Alternatively, and perhaps for a little cleaner and more idiomatic controller file, you can add scopes to the car.rb model file, and have the following. However, given the amount of knowledge students will have, the LESS IDIOMATIC code might actually be easier to understand. Students will have encountered if-else-if/elsif chains in both JavaScript and Ruby, and it’s easy to understand conceptually. Having to teach scopes might just complicate the lesson. The alternative code is included for the instructor’s benefit. 

In *car.rb*: 

```ruby
class Car < ActiveRecord::Base
  scope :price_and_under, -> (max_price) { where("price <= ?", max_price) }
  scope :brand, -> (brand) { where(brand: brand) }
end
```

In *cars_controller.rb*:

```ruby
def index
  @cars = Car.all
  @cars = @cars.brand(params[:brand]) if params[:brand].present?
  @cars = @cars.price_and_under(params[:max_price]) if params[:max_price].present?
  
  render :json => @cars
end
```


*Resources:*
https://api.rubyonrails.org/classes/ActiveRecord/Scoping/Named/ClassMethods.html#method-i-scope
https://www.justinweiss.com/articles/search-and-filter-rails-models-without-bloating-your-controller/


