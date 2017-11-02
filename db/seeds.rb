User.destroy_all
City.destroy_all
Post.destroy_all

    users = []
    cities = []
    
    5.times do 
        users << User.create(
            email: FFaker::Internet.email,
            password: 'blahblah'
        )
    end

    cities << City.create!({
    name: "Atlanta", 
    image:"https://i.imgur.com/ma1Eup5.jpg"
    })

    cities << City.create!({
    name: "London", 
    image:"https://i.imgur.com/yahfVTm.jpg"
    })

    cities << City.create!({
    name: "San Francisco", 
    image:"https://i.imgur.com/aFys868.jpg"
    })

    users.each do |user|
        cities.each do |city|
            Post.create(
                title: 'Nightlife',
                description: 'fun bars, lots of live music, good clubs',
                user_id: user.id,
                city_id: city.id
            )
        end
    end

    # User.create!({
    # email: "victoria@gmail.com", 
    # password: "blahblah"
    # })

    # User.create!({
    # email: "tom@gmail.com", 
    # password: "blahblah"
    # })

    # User.create!({
    # email: "andre@gmail.com", 
    # password: "blahblah"
    # })

    # Post.create!(
    # title: 'Parks',
    # description: 'great outdoor space, beautiful parks'
    # )
    
    # Post.create!(
    # title: 'Hotels',
    # description: 'amazing hotels - good prices and centrally located'
    # )
    
    # Post.create!(
    # title: 'Nightlife',
    # description: 'fun bars, lots of live music, good clubs'
    # )

    
 






