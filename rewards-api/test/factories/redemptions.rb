FactoryBot.define do
  factory :redemption do
    association :user
    association :product
  end
end
