%{Hello} #This is an alernative syntax for double quotes

# Unit Tests are tests for the models

# if a instance of a class doesn't get created, you can call .invalid? on it, as well as 
# .errors[:attrubute].any?
product = Product.create
assert product.invalid?
assert product.errors
assert product.errors[:title]
assert product.errors[:title].any?
#errors is an object. this is where validates stores error messages.


root to: 'store#index', as: 'store' # last argument creates a store_path

# To order model in a certain way, use the default_scope method in the model
class Product < ActiveRecord::Base
  default_scope order: 'title'
end


sanitize(product.description) #Allows you to safely add HTML stylings to make the description more interesting



number_to_currency(product.price) #This is a rails helper method that converts number in to currency



has_many :line_items, dependent: :destroy # This will destroy all line items when cart is destroyed

#Tip: if a table has foreign keys, the corresponding model should have a belongs_to for each

# What is a hook method
# A method that rails calls automatically at a given point in an objects life
# for example
class Product < ActiveRecord::Base
  before_destroy :ensure_not_referenced_by_any_line_item

  def ensure_not_referenced_by_any_line_item
    if line_items.empty?
      return true
    else
      errors.add(:base, 'Line items present') # we are associating the error with the basic Error object.
      return false
    end
  end

end


#the default HTTP method for a link is GET, the default HTTP method for a button is POST.
button_to 'Add to Cart', line_items_path(:product_id => product )


# What is the params object
# the params object is important inside Rails applications. It holds all of the parameters 
# passed in a browser request


find_by_column_name #this is an active record method. one of the dynamic finders

#What is a flash message?
# Rails convenient way of dealing with errors and error reporting. It defines a 
# structure called a flash. A flash is a bucket 
# ( or hash) in which you can store stuff as you process a request. The contents of the 
# flash are available to the next request in teh 
# session beore being deleted automatically
# Typically used to collect error messages


#How to handle errors in Rails

def show
	begin
	  @cart = Cart.find(params[:id])
	rescue ActiveRecord::RecordNotFound # This is the error that we get when app cannot find the attribute eith an id
	  logger.error "Attempt to access invalid cart #{params[:id]}" #This is the message that gets logged. Every controller has a logger attribute
	  redirect_to store_url, :notice => 'Invalid Cart' #The notice get persisted to our next view
	else
	  respond_to do |format|
	  format.html # show.html.erb
	  format.json { render json: @cart }
	  end
	end
end


# What is the log file


# What is a partial
# Partials are a kind of method for views. A partial is simply a chunk of view in its own seperate file
# You can invoke (render) them from another template or from a controller. As with methods, 
# you can pass paramaters to a partial, so the same partial can render different results

# you can pass a collection to a render method, and it will find the corresponding partial 
# and loop through each collection item and render the partial
# Change this:
  <% @cart.line_items.each do |item| %>
      <tr>
        <td><%= item.quantity %> &times;</td>
        <td><%= item.product.title %></td>
        <td class="item_price"><%= number_to_currency(item.total_price)%></td>
        <td>
          <%= link_to item, :method => :delete, :confirm => "Are you sure"  do%>
              <i class="icon-trash"></i>
          <% end %>
        </td>
      </tr>
  <% end 

##to
  <%= render (@cart.line_items) 
# Then create this partial in /views/line_items/_line_item.html.erb . 
<tr>
  <td><%= line_item.quantity %> &times;</td>
  <td><%= line_item.product.title %></td>
  <td class="item_price"><%= number_to_currency(line_item.total_price)%></td>
  <td>
    <%= link_to line_item, :method => :delete, :confirm => "Are you sure"  do%>
        <i class="icon-trash"></i>
    <% end %>
  </td>
</tr>
## How to name partials:
# The partial template itself is simply another template file (by default in the same 
# directory as the object being rendered and with the name of the table as the name). 
# Howerver to keep the names of partials distrinct from regualt templates, Rails automatically  
# prepends an undrscore to the partial name when looking for the file. That means we need to 
# name our partial _line_item.html.erb and place it in the app/views/line_items directory

#Can do the same thing with cart partial
render @cart
# in views/carts/_cart.html.erb
<div class="cart_title">Your Cart</div>
<table>
  <%= render (cart.line_items) %>

  <tr>
    <td colspan="2">Total</td>
    <td class="total_cell"><%= number_to_currency(cart.total_price)%></td>
  </tr>
</table>

<%= button_to 'Empty Cart', cart, method: :delete, :confirm => 'Are you sure you want to delete your cart?'


# How to use AJAX in Rails
# add remote: true to the link or button that send the post request
<%= button_to 'Add to Cart', line_items_path(:product_id => product), remote: true%
#have our application return a response. Tell it what to do when we request the .js remplate.
respond_to do |format|
  if @line_item.save
    format.html { redirect_to store_path}
    format.js 
#then create a file views/line_items/create.js.erb and put this in it
$('#cart').html("<%= escape_javascript(render(@cart)) %>")
OR
$('#cart').html("<%= j render(@cart) %>") # j is short for escape javascript



# What is a mailer
# A class that's sotred in the app/mailers directory. It containes one or more methods 
# wtih each mehtod corresponding to an email template. To create the body of the email, these 
# methods in turn use views. rails g mailer Notifier order_received order_shipped

# in mailer, we have mail instead of render
# mail takes parameters like to:

