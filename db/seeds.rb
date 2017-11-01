User.destroy_all
Post.destroy_all
City.destory_all

users = []
cities = []


users << User.create!(
    email: "victoria@gmail.com", 
    password: "blahblah"
    )

users << User.create!(
    email: "tom@gmail.com", 
    password: "blahblah"
)

users << User.create!(
    email: "andre@gmail.com", 
    password: "blahblah"}



cities << City.create!(
    name: "Atlanta", 
    image:"https://i.imgur.com/ma1Eup5.jpg"
    )

cities << City.create!(
    name: "London", 
    image:"https://i.imgur.com/yahfVTm.jpg"
    )

cities << City.create!(
    name: "San Francisco", 
    image:"https://i.imgur.com/aFys868.jpg"
    )

