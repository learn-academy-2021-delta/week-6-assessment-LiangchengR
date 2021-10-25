# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can fix this mistake by using migrations. Migrations allow us to change the schema of our database overtime. The foreign key should be in snake_case like class_id. In this case it would be cohort_id. The foreign key should be on the Student model since it makes more sense for a cohort to be related to many students.

  Researched answer: Since the column was not added initially, we need to perform a migration. The name of the foreign key should always be named modelname_id and always goes on the belongs_to side. Detailed steps are as follows:
  
  Creating the new column
  1. add a timestamped ruby migrations file: $ rails g migration add_cohort_id_to_students
  2. edit the .rb file by adding
      def change
        add_column: :cohorts, :cohort_id, :integer
      end
  3 perform migration $rails db:migrate

  Creating the relationship
  1. edit the the class.rb files under app/models
      in cohort.rb -> has_many :students
      in student.rb -> belongs_to :cohort
  
  Creating records with a foreign key in rails c
  1. locate cohort: delta = Cohort.first
  2. make student related to cohort: delta.students.create <key:values>

  Reassigning existing records
  1. student.cohort_id = 1
        



2. Which RESTful routes must always be passed params? Why?

  Your answer: RESTful routes include destroy, update, index, show, new, create, edit. Destroy, update, show, create, and edit would need to be passed parameters so they know which specific hash they are referencing or making adjustments to.

  Researched answer: RESTful Routes go hand in hand with naming conventions of rails controller methods. Only show, edit, update, and destroy would need parameters. This is because show will display a specific item, edit will return an html form for editing a specific item, update also edits a specific item, and destroy deletes a specific photo so they all need to know what they're pointing to/referencing. I originally thought create may had needed an id because I originally though it may have been passed through new but create is the actual creation of a new id and therefore doesn't need one.



3. Name three rails generator commands. What is created by each?

  Your answer: The top 3 generator commands I can think of are
  1. rails g app_name -d postgresql -T -G 
    >> creates an app named app_name, -d postgresql: replaces database with postgres, -T: gets rid of the default testing environment, -G: prevents git initiation since rails has its own build in version tracking system

  2. rails g controller ControllerName
    >> creates a controller named ControllerName

  3. rails g migration <name_of_change>
    >> the first step of migration, this creates a migration file that is timed stamp for us to make edits to the existing schema. It creates some method based on the name we pass it?

  Researched answer: All rails generate commands that I can think of are as follows:
  1. rails g app_name -d postgresql -T -G 
    >> The explanation is similar to the one in line 49 in that it generates a new rails app. I will add that that the app name should be snake_case.

  2. rails g model Name Col:data1type, Col2:datatype
    >> this generate command creates a new model with whatever name we pass in which should be singular and uppercase. We also pass in the names of the columns and then assign their data types. We then must run rails db:migrate to create the schema.

  3. rails g controller Name
    >> similar to above, it creates a controller based on a name we pass in which will be located in app/controllers folders.

  4. rails g migration <name_of_change>
    >> similar to above, it creates a file in the migrations folder. The name of the migration should either be Pascal or snake cased. It should start with the specific action and end with the name of the table.

  5. rails g rspec:install
    >>this command generates the dependencies for RSpec testing environments




4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

CRUD                HTTP               Controller/RESTful
Create              Post               Create
Read                Get                Index/Show/New/Edit
Update              Put/Patch          Update
Delete              Delete             Destroy


method="GET"    /students              Index (shows all)

method="POST"   /students              Create

method="GET"    /students/new          New

method="GET"    /students/2            Show (shows specific item)

method="GET"    /students/2/edit       Edit

method="PATCH"  /students/2            Update

method="DELETE" /students/2            Destroy



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story: As a user, I can see a home page with my to do list with tasks that need to be done and a completed tasks table underneath it.
User Story: As a user, I can click on my task name and a window will pop up showing task title and description with a small pencil icon in the top right corner.
User Story: As a user, I can edit the title or description field by clicking on the pencil and anothoter pop up window with forms allows me to change title and description.
User Story: As a user, I want to be able to click a button 'submit' to make my changes. 
User Story: As a user, when I click on the 'submit' button, the input forms, submit button, and cancel button should disappear.
User Story: As a user, I should return to the original task pop up window and see my task with updated title and description values.
User Story: As a user, when I click on the 'cancel' button, the input forms, submit button, and cancel button should disappear.
User Story: As a user, I should return to the original task pop up window and see my task is unchanged.
User Story: As a user, I can close the task information pop up by clicking a button 'close'.
User Story: As a user, I should be able to see an empty check box next to each task.