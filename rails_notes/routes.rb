get '/patients/:id', to: 'patients#show'

# Adding URL and path helpers.
# The as option creates the url and path helpers.
get '/patients/:id', to: 'patients#show', as: 'patient' #=>  patient_path(@patient)

get '/clients/:status' => 'clients#index', foo: 'bar'
# you can set parameters that will be sent to the controller (i.e params[:foo] = 'bar')
# when a user opens the URL /clients/active, params[:status] will be set to "active". When this route is used, 
# params[:foo] will also be set to "bar" just like it was passed in the query string. In the same way params[:action] will contain "index".

# Resource Routing =====================================================================

# ********************************************

resources :photos
# Create seven different routes in your application, all mapping to the Photos controller:
# GET		/photos				index		display a list of all photos
# GET		/photos/new			new			return an HTML form for creating a new photo
# POST		/photos				create		create a new photo
# GET		/photos/:id			show		display a specific photo
# GET		/photos/:id/edit	edit		return an HTML form for editing a photo
# PATCH/PUT	/photos/:id			update		update a specific photo
# DELETE	/photos/:id			destroy		delete a specific photo

# Creates the following path helpers
# photos_path 			returns /photos
# new_photo_path 		returns /photos/new
# edit_photo_path(:id) 	returns /photos/:id/edit (for instance, edit_photo_path(10) returns /photos/10/edit)
# photo_path(:id) 		returns /photos/:id (for instance, photo_path(10) returns /photos/10)

# Creates the following url helpers
# photos_url 			returns /photos
# new_photo_url 		returns /photos/new
# edit_photo_url(:id) 	returns /photos/:id/edit (for instance, edit_photo_path(10) returns /photos/10/edit)
# photo_url(:id) 		returns /photos/:id (for instance, photo_path(10) returns /photos/10)

# you need to create routes for more than one resource,

# ****************************************

resources :photos, :books, :videos
# Create routes for more than one resource, you can save a bit of typing by defining them all with a single call to resources

# ****************************************

get 'profile', to: 'users#show'
# Passing a String to match will expect a controller#action

# ****************************************

resource :user do
  get 'profile', to: :show
end
# passing a Symbol will map directly to an action (ex. users#show)

# ****************************************

namespace :admin do
  resources :posts, :comments
end
# Used if the controller is under the Admin:: namespace and you want the /admin/ in the path
# This works if you group a number of administrative controllers under an Admin:: namespace and controllers under the app/controllers/admin file
# This will create a number of routes for each of the posts and comments controller. For Admin::PostsController, Rails will create:
# GET		/admin/posts			index		admin_posts_path
# GET		/admin/posts/new		new			new_admin_post_path
# POST		/admin/posts			create		admin_posts_path
# GET		/admin/posts/:id		show		admin_post_path(:id)
# GET		/admin/posts/:id/edit	edit		edit_admin_post_path(:id)
# PATCH/PUT	/admin/posts/:id		update		admin_post_path(:id)
# DELETE	/admin/posts/:id		destroy		admin_post_path(:id)

# ****************************************

scope module: 'admin' do
  resources :posts, :comments
end
#OR
resources :posts, module: 'admin'
# Used if the controller is under the Admin:: namespace but you DON'T want the /admin/ in the path
# If you want to route /posts (without the prefix /admin) to Admin::PostsController

# ****************************************

scope '/admin' do
  resources :posts, :comments
end
# OR
resources :posts, path: '/admin/posts'
# Used if the controller is NOT under the Admin:: namespace but you DO WANT the /admin/ in the path
# If you want to route /admin/posts to PostsController (without the Admin:: module prefix)

# ****************************************

resources :magazines do
  resources :ads
end
# A nested route allow you to capture a model relationship in your routing. ex: a has_many/belongs_to relationship
# In addition to the routes for magazines, this declaration will also route ads to an AdsController. 
# GET		/magazines/:magazine_id/ads				index		display a list of all ads for a specific magazine
# GET		/magazines/:magazine_id/ads/new			new			return an HTML form for creating a new ad belonging to a specific magazine
# POST		/magazines/:magazine_id/ads				create		create a new ad belonging to a specific magazine
# GET		/magazines/:magazine_id/ads/:id			show		display a specific ad belonging to a specific magazine
# GET		/magazines/:magazine_id/ads/:id/edit	edit		return an HTML form for editing an ad belonging to a specific magazine
# PATCH/PUT	/magazines/:magazine_id/ads/:id			update		update a specific ad belonging to a specific magazine
# DELETE	/magazines/:magazine_id/ads/:id			destroy		delete a specific ad belonging to a specific magazine

# This will also create routing helpers such as 
# magazine_ads_url 
# edit_magazine_ad_path.
# magazine_ads_url(@magazine) #=> # These helpers take an instance of Magazine as the first parameter

# ** Resources should never be nested more than 1 level deep.

# ****************************************

resources :posts do
  resources :comments, only: [:index, :new, :create]
end
resources :comments, only: [:show, :edit, :update, :destroy]
# Same as
resources :posts do
  resources :comments, shallow: true
end

# GET		    /posts/:post_id/comments(.:format)		  post_comments_path
# POST		  /posts/:post_id/comments(.:format)		  post_comments_path
# GET		    /posts/:post_id/comments/new(.:format)	new_post_comment_path
# GET		    /comments/:id/edit(.:format)			      edit_comment_path
# GET		    /comments/:id(.:format)					        comment_path
# PATCH/PUT	/comments/:id(.:format)					        comment_path
# DELETE	  /comments/:id(.:format)					        comment_path

# Actions prefixed with parent resource:
# index
# new
# create

# Actions NOT prefixed with parent resource:
# show
# edit
# update
# destroy


resources :posts, shallow: true do
  resources :comments
  resources :quotes
  resources :drafts
end
# Same as above

shallow do
  resources :posts do
    resources :comments
    resources :quotes
    resources :drafts
  end
end
#same as above

# ****************************************

scope shallow_path: "sekret" do
  resources :posts do
    resources :comments, shallow: true
  end
end
# customize shallow routes

# ****************************************

scope shallow_path: "sekret" do
  resources :posts do
    resources :comments, shallow: true
  end
end
# :shallow_path prefixes member paths with the specified parameter:

# GET		     /posts/:post_id/comments(.:format)		   post_comments_path
# POST		   /posts/:post_id/comments(.:format)		   post_comments_path
# GET		     /posts/:post_id/comments/new(.:format)	 new_post_comment_path
# GET		     /sekret/comments/:id/edit(.:format)		 edit_comment_path
# GET		     /sekret/comments/:id(.:format)			     comment_path
# PATCH/PUT	 /sekret/comments/:id(.:format)			     comment_path
# DELETE	   /sekret/comments/:id(.:format)			     comment_path

scope shallow_prefix: "sekret" do
  resources :posts do
    resources :comments, shallow: true
  end
end
# The :shallow_prefix option adds the specified parameter to the named helpers:

# GET       /posts/:post_id/comments(.:format)      post_comments
# POST      /posts/:post_id/comments(.:format)      post_comments
# GET       /posts/:post_id/comments/new(.:format)  new_post_comment
# GET       /comments/:id/edit(.:format)            edit_sekret_comment
# GET       /comments/:id(.:format)                 sekret_comment
# PATCH/PUT /comments/:id(.:format)                 sekret_comment
# DELETE    /comments/:id(.:format)                 sekret_comment

# ****************************************

# Routing Concerns allows you to declare common routes that can be reused inside others resources and routes. 

concern :commentable do
  resources :comments
end 
concern :image_attachable do
  resources :images, only: :index
end
# This is how you define concerns

resources :messages do
  resources :comments
end
resources :posts do
  resources :comments
  resources :images, only: :index
end
# Same as:
resources :messages, concerns: :commentable
resources :posts, concerns: [:commentable, :image_attachable]
# This is how you use concerns

namespace :posts do
  concerns :commentable
end
# you can use them in any place that you want inside the routes,

# Paths ======================================================================================

resources :magazines do
  resources :ads
end
# With the above nested resource, you can use the following link helpers

link_to 'Ad details', magazine_ad_path(@magazine, @ad)
# you can pass in instances of Magazine and Ad instead of the numeric IDs:

link_to 'Ad details', url_for([@magazine, @ad])
# can also use url_for with a set of objects, and Rails will automatically determine which route you want

link_to 'Ad details', [@magazine, @ad]
# In helpers like link_to, you can specify just the object in place of the full url_for call:

link_to 'Magazine details', @magazine
# If you wanted to link to just a magazine:

link_to 'Edit Ad', [:edit, @magazine, @ad]
# For other actions, you just need to insert the action name as the first element of the array:

# Adding More RESTful Actions =======================================================================

# You are not limited to the seven routes that RESTful routing creates by default. If you like, 
# you may add additional routes that apply to the collection or individual members of the collection.

resources :photos do
  member do
    get 'preview'
  end
end
# OR
resources :photos do
  get 'preview', on: :member
end
# To add a member route, which is any route the is prefixed with one instance with an id (ex. /photos/1/preview)
# /photos/1/preview will route to PhotosController#preview 
# with the resource id value passed in params[:id]. 
# It will also create these route helpers
# preview_photo_url 
# preview_photo_path

resources :photos do
  get 'preview'
end
# You can leave out the :on option, this will create the same member route except that the 
# resource id value will be available in params[:photo_id] instead of params[:id].

resources :photos do
  collection do
    get 'search'
  end
end
# OR
resources :photos do
  get 'search', on: :collection
end
# To add a collection  route, which is any route the is prefixed with the root of the resource (ex. /photos/search)
# /photos/search with GET, and route to the search action of PhotosController. 
#It will also create these route helpers: 
# search_photos_url
# search_photos_path

resources :comments do
  get 'preview', on: :new
end
# adds an alternate new action
# /comments/new/preview will route to the preview action of CommentsController. 
# It will also create these route helpers: 
# preview_new_comment_url
# preview_new_comment_path

# Non-Resourceful Routes ===============================================

#==================================================================================
# TODO: Need to finish documentation 
#==================================================================================

get ':controller(/:action(/:id))'

get ':controller/:action/:id/:user_id'

get ':controller(/:action(/:id))', controller: /admin\/[^\/]+/

get ':controller/:action/:id/with_user/:user_id'

get ':controller/:action/:id'

get 'photos/:id', to: 'photos#show'

get 'photos/:id', to: 'photos#show', defaults: { format: 'jpg' }

get 'exit', to: 'sessions#destroy', as: :logout

get ':username', to: 'users#show', as: :user

match 'photos', to: 'photos#show', via: [:get, :post]

match 'photos', to: 'photos#show', via: :all

get 'photos/:id', to: 'photos#show', constraints: { id: /[A-Z]\d{5}/ }

get 'photos/:id', to: 'photos#show', id: /[A-Z]\d{5}/

get '/:id', to: 'posts#show', constraints: {id: /^\d/}

get '/:id', to: 'posts#show', constraints: { id: /\d.+/ }
get '/:username', to: 'users#show'

get 'photos', constraints: {subdomain: 'admin'}

namespace :admin do
  constraints subdomain: 'admin' do
    resources :photos
  end
end

get 'photos/*other', to: 'photos#unknown'

get 'books/*section/:title', to: 'books#show'

get '*a/foo/*b', to: 'test#index'

get '*pages', to: 'pages#show', format: false

get '*pages', to: 'pages#show', format: true

get '/stories', to: redirect('/posts')

get '/stories/:name', to: redirect('/posts/%{name}')

get '/stories/:name', to: redirect {|params, req| "/posts/#{params[:name].pluralize}" }
get '/stories', to: redirect {|p, req| "/posts/#{req.subdomain}" }

match '/application.js', to: Sprockets, via: :all

root to: 'pages#main'
root 'pages#main' # shortcut for the above

namespace :admin do
  root to: "admin#index"
end

get 'こんにちは', to: 'welcome#index'

# Customizing Resourceful Routes ======================================

resources :photos, controller: 'images'

resources :user_permissions, controller: 'admin/user_permissions'

resources :photos, constraints: {id: /[A-Z][A-Z][0-9]+/}

constraints(id: /[A-Z][A-Z][0-9]+/) do
  resources :photos
  resources :accounts
end

resources :photos, as: 'images'

resources :photos, path_names: { new: 'make', edit: 'change' }

scope path_names: { new: 'make' } do
  # rest of your routes
end

scope 'admin' do
  resources :photos, as: 'admin_photos'
end 
resources :photos

scope 'admin', as: 'admin' do
  resources :photos, :accounts
end
resources :photos, :accounts

scope ':username' do
  resources :posts
end

resources :photos, only: [:index, :show]

resources :photos, except: :destroy

scope(path_names: { new: 'neu', edit: 'bearbeiten' }) do
  resources :categories, path: 'kategorien'
end

resources :magazines do
  resources :ads, as: 'periodical_ads'
end





