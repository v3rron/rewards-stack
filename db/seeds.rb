# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# factory :user do
#   email { Faker::Internet.unique.email }
#   first_name { Faker::Name.first_name }
#   last_name  { Faker::Name.last_name }
#   points { rand(0..1000) }
# end

User.delete_all
Product.delete_all
Redemption.delete_all

[500, 200, 50].each_with_index do |points_num, idx|
  User.create!(
    email: "user#{idx + 1}@test.com",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    points: points_num
  )
end

10.times do |idx|
  Product.create!(name: Faker::Commerce.product_name, price: rand(100..1000), stock: rand(0..5))
end
