class City < ApplicationRecord
    has_many :posts, dependent: :destroy

    def order_posts
        posts
         .order(Post.arel_table['created_at'].desc)
         .first
    end
  
end

# class User < ActiveRecord::Base
#     has_many :status_changes
  
#     def latest_status_change
#       status_changes
#        .order(StatusChange.arel_table['created_at'].desc)
#        .first
#     end
#   end
