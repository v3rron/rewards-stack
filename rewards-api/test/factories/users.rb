FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    first_name { Faker::Name.first_name }
    last_name  { Faker::Name.last_name }
    points { rand(0..1000) }
  end
end
