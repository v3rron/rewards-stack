module UuidPrimaryKey
  extend ActiveSupport::Concern

  included do
    before_create do
      self.id ||= SecureRandom.uuid
    end
  end
end