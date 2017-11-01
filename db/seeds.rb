User.destroy_all
Post.destroy_all
City.destroy_all

    User.create!(
    email: "victoria@gmail.com", 
    password: "blahblah"
    )

    User.create!(
    email: "tom@gmail.com", 
    password: "blahblah"
    )

    User.create!(
    email: "andre@gmail.com", 
    password: "blahblah")

     parks = Post.create!(
        title: 'Parks',
        description: 'great outdoor space, beautiful parks',
    )
    
     hotels = Post.create!(
        title: 'Hotels',
        description: 'amazing hotels - good prices and centrally located',
    )
    
     nightLife = Post.create!(
        title: 'Nightlife',
        description: 'fun bars, lots of live music, good clubs',
    )

    City.create!(
    name: "Atlanta", 
    image:"https://i.imgur.com/ma1Eup5.jpg",
    posts: [parks, hotels, nightLife]
    )

    City.create!(
    name: "London", 
    image:"https://i.imgur.com/yahfVTm.jpg",
    posts: [parks, hotels, nightLife]
    )

    City.create!(
    name: "San Francisco", 
    image:"https://i.imgur.com/aFys868.jpg",
    posts: [parks, hotels, nightLife]
    )






