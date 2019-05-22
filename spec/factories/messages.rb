FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/spec/test/test_image.jpeg")}
    user
    group
  end
end
