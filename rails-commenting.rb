# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)the creation of a controller class named BlogPostsController that inherits from the ApplicationController class
class BlogPostsController < ApplicationController
  def index
    # ---2)the declaration of an instance variable called posts initialized by calling the active record command .all on the class BlogPost. It will store all the BlogPost objects in an array.
    @posts = BlogPost.all
  end

  def show
    # ---3)declaration of instance variable post initalized by calling the .find active record command on the class BlogPost. It will find a single post depending on an id param that will be passed in and stored in @post.
    @post = BlogPost.find(params[:id])
  end

  # ---4)the creation of a RESTful routes/controller method named 'new'. Where .new generates a HTML form that expects input.
  def new
    @post = Post.new
  end

  def create
    # ---5)declaration of instance variable post initalized by calling the .create active record command on the class BlogPost and passing in a strong params method blog_post_params. This will actually submit the user data to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)the creation of a RESTful routes/controller method 'edit'. Where .edit  will generate a HTML form that expects input for editing a specific item. 
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)calling the .update active record command on instance variable post and will update the variable based on the user input params in the strong params method blog_post_params.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)will redirect or send the user to a route with an alias blog_post_path which is a page that shows a specfic blog post depending on what the id params is.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)private is a key word that prevents the below items from being referenced outside of the current controller class. 
  private
  def blog_post_params
    # ---10)requires that the params have a BlogPost object and it will permit params title and content and prevent other parameters from being changed
    params.require(:blog_post).permit(:title, :content)
  end
end
