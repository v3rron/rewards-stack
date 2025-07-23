# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# NOTE: Don't do this in real production!
Redemption.delete_all
Product.delete_all
User.delete_all

puts "Database reset"

[5000, 1000, 500, 200, 50].each_with_index do |user_points, idx|
  User.create!(
    email: "user#{idx + 1}@test.com",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    points: user_points
  )
end

puts "#{User.count} users created"

Product.create!(name: Faker::Commerce.product_name, price: 51, stock: 2)
Product.create!(name: Faker::Commerce.product_name, price: 100, stock: 0)
Product.create!(name: Faker::Commerce.product_name, price: 200, stock: 2)

7.times do
  Product.create!(name: Faker::Commerce.product_name, price: rand(100..1000), stock: rand(0..10))
end

puts "#{Product.count} products created"
