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


Post.create!(
    title: 'Parks',
    description: 'great outdoor space, beautiful parks',
    user_id: 1,
    city_id: 1
)

Post.create!(
    title: 'Hotels',
    description: 'amazing hotels - good prices and centrally located',
    user_id: 2,
    city_id: 1
)

Post.create!(
    title: 'Nightlife',
    description: 'fun bars, lots of live music, good clubs',
    user_id: 3,
    city_id: 1
)

cities.each do |city|
    users.each do |user|


