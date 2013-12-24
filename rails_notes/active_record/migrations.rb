class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
 
      t.timestamps
    end
  end
end

class ChangeProductsPrice < ActiveRecord::Migration
  def change
    reversible do |dir|
      change_table :products do |t|
        dir.up   { t.change :price, :string }
        dir.down { t.change :price, :integer }
      end
    end
  end
end

class ChangeProductsPrice < ActiveRecord::Migration
  def up
    change_table :products do |t|
      t.change :price, :string
    end
  end
  def down
    change_table :products do |t|
      t.change :price, :integer
    end
  end
end
#===================================================
# $ rails generate migration AddPartNumberToProducts
#===================================================

class AddPartNumberToProducts < ActiveRecord::Migration
  def change
  end
end

#===================================================
# $ rails generate migration AddPartNumberToProducts part_number:string
#===================================================

class AddPartNumberToProducts < ActiveRecord::Migration
  def change
    add_column :products, :part_number, :string
  end
end

#===================================================
# $ rails generate migration AddPartNumberToProducts part_number:string:index
#===================================================

class AddPartNumberToProducts < ActiveRecord::Migration
  def change
    add_column :products, :part_number, :string
    add_index :products, :part_number
  end
end

#===================================================
# $ rails generate migration RemovePartNumberFromProducts part_number:string
#===================================================

class RemovePartNumberFromProducts < ActiveRecord::Migration
  def change
    remove_column :products, :part_number, :string
  end
end

#===================================================
# $ rails generate migration AddDetailsToProducts part_number:string price:decimal
#===================================================

class AddDetailsToProducts < ActiveRecord::Migration
  def change
    add_column :products, :part_number, :string
    add_column :products, :price, :decimal
  end
end

#===================================================
# $ rails generate migration CreateProducts name:string part_number:string
#===================================================

class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :part_number
    end
  end
end

#===================================================
# $ rails generate migration AddUserRefToProducts user:references
#===================================================

class AddUserRefToProducts < ActiveRecord::Migration
  def change
    add_reference :products, :user, index: true
  end
end

#===================================================
# $ rails g migration CreateJoinTableCustomerProduct customer product
#===================================================

class CreateJoinTableCustomerProduct < ActiveRecord::Migration
  def change
    create_join_table :customers, :products do |t|
      # t.index [:customer_id, :product_id]
      # t.index [:product_id, :customer_id]
    end
  end
end

#===================================================
# $ rails generate model Product name:string description:text
#===================================================

class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
 
      t.timestamps
    end
  end
end

#===================================================
# $ rails generate migration AddDetailsToProducts price:decimal{5,2} supplier:references{polymorphic}
#===================================================

class AddDetailsToProducts < ActiveRecord::Migration
  def change
    add_column :products, :price, :decimal, precision: 5, scale: 2
    add_reference :products, :supplier, polymorphic: true, index: true
  end
end

# Writing a migration =============================================================================

create_table :products do |t|
  t.string :name
end

create_table :products, options: "ENGINE=BLACKHOLE" do |t|
  t.string :name, null: false
end

create_join_table :products, :categories

create_join_table :products, :categories, table_name: :categorization

create_join_table :products, :categories, column_options: {null: true}

create_join_table :products, :categories do |t|
  t.index :product_id
  t.index :category_id
end

change_table :products do |t|
  t.remove :description, :name
  t.string :part_number
  t.index :part_number
  t.rename :upccode, :upc_code
end

Products.connection.execute('UPDATE `products` SET `price`=`free` WHERE 1')


class ExampleMigration < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :category
    end
    reversible do |dir|
      dir.up do
        #add a foreign key
        execute <<-SQL
          ALTER TABLE products
            ADD CONSTRAINT fk_products_categories
            FOREIGN KEY (category_id)
            REFERENCES categories(id)
        SQL
      end
      dir.down do
        execute <<-SQL
          ALTER TABLE products
            DROP FOREIGN KEY fk_products_categories
        SQL
      end
    end
    add_column :users, :home_page_url, :string
    rename_column :users, :email, :email_address
  end
end


class ExampleMigration < ActiveRecord::Migration
  def up
    create_table :products do |t|
      t.references :category
    end
    # add a foreign key
    execute <<-SQL
      ALTER TABLE products
        ADD CONSTRAINT fk_products_categories
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
    SQL
    add_column :users, :home_page_url, :string
    rename_column :users, :email, :email_address
  end
  def down
    rename_column :users, :email_address, :email
    remove_column :users, :home_page_url
 
    execute <<-SQL
      ALTER TABLE products
        DROP FOREIGN KEY fk_products_categories
    SQL
    drop_table :products
  end
end


require_relative '2012121212_example_migration' 
class FixupExampleMigration < ActiveRecord::Migration
  def change
    revert ExampleMigration
    create_table(:apples) do |t|
      t.string :variety
    end
  end
end

class SerializeProductListMigration < ActiveRecord::Migration
  def change
    add_column :categories, :product_list
    reversible do |dir|
      dir.up do
        # transfer data from Products to Category#product_list
      end
      dir.down do
        # create Products from Category#product_list
      end
    end
    revert do
      # copy-pasted code from ExampleMigration
      create_table :products do |t|
        t.references :category
      end
       reversible do |dir|
        dir.up do
          #add a foreign key
          execute <<-SQL
            ALTER TABLE products
              ADD CONSTRAINT fk_products_categories
              FOREIGN KEY (category_id)
              REFERENCES categories(id)
          SQL
        end
        dir.down do
          execute <<-SQL
            ALTER TABLE products
              DROP FOREIGN KEY fk_products_categories
          SQL
        end
      end
      # The rest of the migration was ok
    end
  end
end


#===================================================
# $ rake db:migrate VERSION=20080906120000
#===================================================

#===================================================
# $ rake db:rollback
#===================================================

#===================================================
# $ rake db:rollback STEP=3
#===================================================

#===================================================
# $ rake db:migrate:redo STEP=3
#===================================================

#===================================================
# $ rake db:migrate:up VERSION=20080906120000
#===================================================

#===================================================
# $ rake db:migrate RAILS_ENV=test
#===================================================

#===================================================
# $ rake db:migrate:redo STEP=3
#===================================================

class AddInitialProducts < ActiveRecord::Migration
  def up
    5.times do |i|
      Product.create(name: "Product ##{i}", description: "A product.")
    end
  end
  def down
    Product.delete_all
  end
end

5.times do |i|
  Product.create(name: "Product ##{i}", description: "A product.")
end
