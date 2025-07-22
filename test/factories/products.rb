FactoryBot.define do
  factory :product do
    name { Faker::Commerce.product_name }
    price { rand(100..1000) }
    stock  { rand(0..10) }
  end
end
