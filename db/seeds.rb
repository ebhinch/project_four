Town.destroy_all
Event.destroy_all
User.destroy_all
Comment.destroy_all


comments = []

telluride = Town.create({
    name: "Telluride, Colorado",
    lat: 37.9375,
    lng: 107.8123,
    description: "Telluride, a former Victorian mining town in Colorado’s Rocky Mountains, is set in a box canyon amid forested peaks at the base of a popular ski-and-golf resort. The town’s historic district houses landmarks like the Sheridan Opera House, a performing-arts venue originally built in 1913, and the Telluride Historical Museum, which showcases local history in a converted hospital built in 1896.",
    population: 2444,
    image: "http://www.momsformomscommunities.com/wp-content/uploads/2011/05/telluride-town-center.jpg"
})

taos = Town.create({
    name: "Taos, New Mexico",
    lat: 36.4072,
    lng: 105.5731,
    description: "Taos is a town in northern New Mexico’s high desert, bounded by the Sangre de Cristo Mountains. It’s known for historic adobe buildings such as Taos Pueblo, a multistory adobe complex inhabited by Native Americans for centuries. A longtime artist colony, Taos also offers many galleries and museums showcasing regional artwork, including the Harwood Museum of Art and the Taos Art Museum.",
    population: 5736,
    image: "http://www.mountainyahoos.com/SkiResorts/Taos-NM/StBernards_DSC03649_DSC03654-6-images_980x463.jpg"
})

jackson = Town.create({
    name: "Jackson, Wyoming",
    lat: 43.4799,
    lng: 110.7624,
    description: "Jackson is a town in Wyoming’s Jackson Hole valley, home to 3 ski areas: Jackson Hole Mountain Resort, Snow King Mountain Resort and Grand Targhee Resort. The Town Square features arches made of shed antlers from the nearby National Elk Refuge. The National Museum of Wildlife Art has works by Andy Warhol and Georgia O’Keeffe. North are the peaks of Grand Teton National Park, as well as vast Yellowstone National Park.",
    population: 10529,
    image: "https://www.etraveltrips.com/wp-content/uploads/2011/11/Jackson-Hole-Wyoming.jpg"
})

ogden = Town.create({
    name: "Ogden, Utah", 
    lat: 41.2230,
    lng: 111.9738,
    description: "There are no crowds, yet Ogden's teeming with boundless recreation, exciting attractions and fabulous events year round amid stunning natural beauty. Locals are passionate about the area and welcoming to visitors who come to explore the colorful character of Ogden City through a wide range of historic attractions, sites and buildings that celebrate the legends of this once rugged and still vibrant Crossroads of the West.",
    population: 86701,
    image: "https://media.deseretdigital.com/file/001f088444?crop=top:0|left:0|width:1260|height:670|gravity:Center&quality=55&interlace=none&resize=width:1260&order=resize,crop&c=14&a=e0f131f0"
})

trideEventOne = Event.create({
    name: "Telluride Ski Resort Opening Day",
    date: "November 23, 2017",
    season: "ws", 
    town_id: telluride.id
})

trideEventTwo = Event.create({
    name: "Telluride Ski Resort Closing Day",
    date: "April 8, 2018",
    season: "ws",
    town_id: telluride.id
})

trideEventThree = Event.create({
    name: "Telluride Bluegrass Festival",
    date: "June 21 - 24, 2018",
    season: "sf",
    town_id: telluride.id
})

trideEventFour = Event.create({
    name: "Telluride Jazz Festival",
    date: "August 3 - 5, 2018",
    season: "sf",
    town_id: telluride.id
})

trideEventFive = Event.create({
    name: "Bluebird See Forever Ski",
    date: "February 26, 2018",
    season: "ws",
    town_id: telluride.id
})

taosEventOne = Event.create({
    name: "Taos Ski Valley Opening Day",
    date: "November 23, 2017",
    season: "ws",
    town_id: taos.id
})

taosEventTwo = Event.create({
    name: "Taos Ski Valley Closing Day",
    date: "April 1, 2018",
    season: "ws",
    town_id: taos.id
})

taosEventThree = Event.create({
    name: "Taos Winter Wine Festival",
    date: "February 2018",
    season: "ws",
    town_id: taos.id
})

taosEventFour = Event.create({
    name: "Las Fiestas de Taos",
    date: "July 20 - 22, 2018",
    season: "sf",
    town_id: taos.id
})

taosEventFive = Event.create({
    name: "Summer Full Moon Hike",
    date: "September 6, 2018",
    season: "sf",
    town_id: taos.id
})

jacksonEventOne = Event.create({
    name: "Jackson Hole Mountain Resort Opens",
    date: "November 25, 2017",
    season: "ws",
    town_id: jackson.id
})

jacksonEventTwo = Event.create({
    name: "New Year's Eve Torchlight Parades",
    date: "December 31, 2017",
    season: "ws",
    town_id: jackson.id
})

jacksonEventThree = Event.create({
    name: "Closing weekend at Jackson Hole Mountain Resort",
    date: "April 6 - 8, 2017",
    season: "ws",
    town_id: jackson.id
})

jacksonEventFour = Event.create({
    name: "Wyoming Stargazing at Rendezvous Park",
    date: "Fridays",
    season: "sf",
    town_id: jackson.id
})

jacksonEventFive = Event.create({
    name: "Jackson Hole Fall Arts Festival",
    date: "September 6 - 17, 2018",
    season: "sf",
    town_id: jackson.id
})

ogdenEventOne = Event.create({
    name: "Snowbasin Resort Opening Day",
    date: "November 22, 2017",
    season: "ws",
    town_id: ogden.id
})

ogdenEventTwo = Event.create({
    name: "Nordic Valley Ski Resort Opening Day",
    date: "December 9, 2017",
    season: "ws",
    town_id: ogden.id
})

ogdenEventThree = Event.create({
    name: "Nordic Valley Ski Resort Closing Day",
    date: "April 7, 2018",
    season: "ws",
    town_id: ogden.id
})

ogdenEventFour = Event.create({
    name: "Blues, Brews & BBQ Summer Concert Series",
    date: "Sundays - June through September",
    season: "sf",
    town_id: ogden.id
})

ogdenEventFive = Event.create({
    name: "Harvest Moon Celebration",
    date: "September 24, 2018",
    season: "sf",
    town_id: ogden.id
})

ogdenEventSix = Event.create({
    name: "Witchstock",
    date: "October 29, 2018",
    season: "sf",
    town_id: ogden.id
})

erica = User.create({
    email: "erica@gmail.com",
    password: "password",
    password_confirmation: "password"
})

olive = User.create({
    email: "olive@gmail.com",
    password: "password",
    password_confirmation: "password"
})

missy = User.create({
    email: "missy@gmail.com",
    password: "password",
    password_confirmation: "password"
})

mimi = User.create({
    email: "mimi@gmail.com",
    password: "password",
    password_confirmation: "password"
})

ericaCommentOne = Comment.create({
    title: "Bluebird Skiing!",
    text: "See Forever's a great run on a day like the 26th should be. Let's get lunch while we're out. Gorrono's or Giuseppe's? Or y'all feeling fancy and want to go to Alpino Vino?",
    user_id: erica.id,
    event_id: trideEventOne.id
})


oliveCommentOne = Comment.create({
    title: "Dog Friendly!",
    text: "We did this hike last year and brought our puppy...she loved it!",
    user_id: olive.id,
    event_id: taosEventFive.id
})

missyCommentOne = Comment.create({
    title: "Dinner Beforehand?",
    text: "Would anyone like to grab dinner before the event? We could also bring picnic. Let me know..",
    user_id: missy.id,
    event_id: jacksonEventFour.id
})

mimiCommentOne = Comment.create({
    title: "Need to Relax After First Day on the Slopes?",
    text: "Swing by Aromatherapy Day Spa for a massage and do some holiday shopping while here.",
    user_id: mimi.id,
    event_id: trideEventOne.id
})

missyCommentTwo = Comment.create({
    title: "First Time to Ogden",
    text: "What runs are most popular for a strong blue / groomed black skiier?",
    user_id: missy.id,
    event_id: ogdenEventTwo.id
})