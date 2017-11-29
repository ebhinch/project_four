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
    image: "http://www.madelinetelluride.com/img/images/index-itinerary-2.jpg"
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

breckenridge = Town.create({
    name: "Breckenridge, Colorado",
    lat: 39.4817,
    lng:106.0384,
    description: "Breckenridge has a mountain that speaks for itself with a town to match. As the largest historic district in Colorado, the town is framed by colorful Victorian architecture and defined by the spirit of its locals. Lined with coffee shops, locally owned shops and eateries, Breck's downtown also features the state's most unique arts district.",
    population: 4896,
    image: "http://www.gobreck.com/sites/default/files/PANO-1_2_4_fused.jpg"
})

vail = Town.create({
    name: "Vail, Colorado",
    lat: 39.6403,
    lng: 106.3742,
    description: "Vail is possibly the mountain town of your dreams. It’s located at the base of Vail Mountain, which is home to world renowned Vail Ski Resort. Vail sits within White River National Forest and every time you look around you, your mind is going to be blown! It’s a go-to travel spot for lovers of the outdoors, no matter the season! It’s a winter sport lover’s dream, a summer time spot for hiking, golfing, and festivals, and the autumn colors are postcard worthy. What are you waiting for?",
    population: 5483,
    image: "http://drvail.dhr.sabredemos.com/images/masthead/masthead-home.jpg"
})

ouray = Town.create({
    name: "Ouray, Colorado",
    lat: 38.0228,
    lng: 107.6714,
    description: "Ouray has a no-fancy-pants-needed vibe that’s lacking in other Colorado resort towns. The Victorian-era Main Street is a National Historic District lined with restored storefronts. Mandatory stops include Bloom, for boho-chic gifts and decorations, and Mouses Chocolates & Coffee. Looming above, the cliff-like peaks from the San Juan range surround the town on three sides and harbor the best winter ice climbing routes in the country.",
    population: 1033,
    image: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1470323829%2Fouray-MOUNT0716.jpg%3Fitok%3Dq1ozsE8g&w=1400&q=70"
})

durango = Town.create({
    name: "Durango, Colorado",
    lat: 37.2753,
    lng:107.8801,
    description: "Durango is basically Colorado’s year round playground. You will always find something to do in this majestic mountain town. The surrounding landscape is diverse and dramatic – from red sandstone bluffs of the Animas River Valley to the extreme jagged peaks of the San Juan Mountains. Some of these mountains are 14,000 feet in elevation! Durango is a vacation destination. Some people take the historic Durango and Silverton Narrow Gauge Railroad through the canyons of the San Juan National Forest for spectacular views.  Some come to take advantage of the outdoor activities, and some come for the arts and culture. We think you should come for all of these things. You won’t regret it!",
    population: 17577,
    image:"http://www.globaltravelerreview.com/wp-content/uploads/2015/04/durango_colorado_mountains1.jpg"
})

buffalo = Town.create({
    name: "Buffalo, Wyoming",
    lat: 44.3483,
    lng: 106.6989,
    description: "Buffalo is nestled in the foothills of the beautiful Big Horn Mountains. It’s located along the Cloud Peak Scenic Highway, which can bring you from Mount Rushmore to Yellowstone National Park. Main street has more than a dozen historical buildings and the town is filled with other historical sites – including the infamous “Hole in the Wall,”  the hideout of Butch Cassidy and the Sundance Kid with the rest of the “Wild Bunch.” Just like all the mountain towns, Buffalo is a great spot to go skiing, camping, hiking, boating, fishing, wildlife viewing, and more.",
    population: 4638,
    image: "http://roadslesstraveled.us/blog/wp-content/uploads/2017/08/00-851-Buffalo-Wyoming-River-Runs-Through-It-mural-seen-on-an-RV-trip-to-town.jpg"
})

trideEventOne = Event.create({
    name: "Telluride Ski Resort Opening Day",
    date: "November 23, 2017",
    season: "ws", 
    image: "https://www.telluride.com/sites/default/files/styles/banner_slide/public/images/blog/lift.jpg?itok=zroYGOT2",
    town_id: telluride.id
})

trideEventTwo = Event.create({
    name: "Telluride Ski Resort Closing Day",
    date: "April 8, 2018",
    season: "ws",
    image: "http://www.tellurideskiresort.com/uploaded/page-hero/live-cams.jpg",
    town_id: telluride.id
})

trideEventThree = Event.create({
    name: "Telluride Bluegrass Festival",
    date: "June 21 - 24, 2018",
    season: "sf",
    image: "http://marqueemag.com/wp-content/uploads/2015/06/IMG_9974-700x336.jpg",
    town_id: telluride.id
})

trideEventFour = Event.create({
    name: "Telluride Jazz Festival",
    date: "August 3 - 5, 2018",
    season: "sf",
    image: "https://www.telluride.com/sites/default/files/styles/banner_slide/public/TTD%20Slider%20-%20Jazz%20Fess-3.jpg?itok=BMDP-ywJ",
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
    image: "https://static01.nyt.com/images/2008/01/24/travel/escapes/taosspan.600.jpg",
    town_id: taos.id
})

taosEventTwo = Event.create({
    name: "Taos Ski Valley Closing Day",
    date: "April 1, 2018",
    season: "ws",
    image: "http://www.skitaos.com/uploaded/header%20photos/HERO_Taos_Events.jpg",
    town_id: taos.id
})

taosEventThree = Event.create({
    name: "Taos Winter Wine Festival",
    date: "February 2018",
    season: "ws",
    image: "http://www.bellavitae.com/wp-content/uploads/2012/01/Winter-Wine-Festival.jpg",
    town_id: taos.id
})

taosEventFour = Event.create({
    name: "Las Fiestas de Taos",
    date: "July 20 - 22, 2018",
    season: "sf",
    image: "https://www.elmontesagrado.com/sites/elmontesagrado.com/files/website/images/Top-El-Monte-Sagrado-Taos-Explore-Events.jpg",
    town_id: taos.id
})

taosEventFive = Event.create({
    name: "Summer Full Moon Hike",
    date: "September 6, 2018",
    season: "sf",
    image: "https://s-media-cache-ak0.pinimg.com/originals/5c/8c/62/5c8c6207937ff32e91c4c988c98cc665.jpg",
    town_id: taos.id
})

jacksonEventOne = Event.create({
    name: "Jackson Hole Mountain Resort Opens",
    date: "November 25, 2017",
    season: "ws",
    image: "https://www.jacksonhole.com/images/general/tommy-moe-1200w-20160119_ES.jpg",
    town_id: jackson.id
})

jacksonEventTwo = Event.create({
    name: "New Year's Eve Torchlight Parades",
    date: "December 31, 2017",
    season: "ws",
    image: "http://snowbrains.com/wp-content/uploads/2016/12/VailResorts_FIREWORKS-min.jpg",
    town_id: jackson.id
})

jacksonEventThree = Event.create({
    name: "Closing weekend at Jackson Hole Mountain Resort",
    date: "April 6 - 8, 2017",
    season: "ws",
    image: "https://www.jacksonhole.com/images/hero/Ski-Groomer-1345x517.jpg",
    town_id: jackson.id
})

jacksonEventFour = Event.create({
    name: "Wyoming Stargazing at Rendezvous Park",
    date: "Fridays",
    season: "sf",
    image: "https://www.wyomingstargazing.org/wp-content/uploads/2014/02/header-stargazing.jpg",
    town_id: jackson.id
})

jacksonEventFive = Event.create({
    name: "Jackson Hole Fall Arts Festival",
    date: "September 6 - 17, 2018",
    season: "sf",
    image: "http://jacksonhole-traveler-production.s3.amazonaws.com/wp-content/uploads/2014/11/jackson-hole-fall-arts-festival-1280x601.jpg",
    town_id: jackson.id
})

ogdenEventOne = Event.create({
    name: "Snowbasin Resort Opening Day",
    date: "November 22, 2017",
    season: "ws",
    image: "https://static.rootsrated.com/image/upload/s--7uWcQyfA--/t_rr_large_natural/hlegjqv9zcjbkf5mrhyn.jpg",
    town_id: ogden.id
})

ogdenEventTwo = Event.create({
    name: "Nordic Valley Ski Resort Opening Day",
    date: "December 9, 2017",
    season: "ws",
    image: "https://static.rootsrated.com/image/upload/s--7uWcQyfA--/t_rr_large_natural/hlegjqv9zcjbkf5mrhyn.jpg",
    town_id: ogden.id
})

ogdenEventThree = Event.create({
    name: "Nordic Valley Ski Resort Closing Day",
    date: "April 7, 2018",
    season: "ws",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/10/c4/78/9e/snowbasin-resort-in-all.jpg",
    town_id: ogden.id
})

ogdenEventFour = Event.create({
    name: "Blues, Brews & BBQ Summer Concert Series",
    date: "Sundays - June through September",
    season: "sf",
    image: "https://www.skiutah.com/blog/authors/yeti/mountain-music-ogden-area/pictures/snowbasin_concert.jpg/hero--xl",
    town_id: ogden.id
})

ogdenEventFive = Event.create({
    name: "Harvest Moon Celebration",
    date: "September 24, 2018",
    season: "sf",
    image: "https://coupons4utah.com/wp-content/uploads/2013/09/harvest-moon.jpg",
    town_id: ogden.id
})

ogdenEventSix = Event.create({
    name: "Witchstock",
    date: "October 29, 2018",
    season: "sf",
    image: "https://static.wixstatic.com/media/ce0bb1_1f7c14d9530742a6b056378f3fc1f0f8~mv2_d_2048_1366_s_2.jpg/v1/crop/x_0,y_503,w_2048,h_863/fill/w_808,h_343,al_c,q_80,usm_0.66_1.00_0.01/ce0bb1_1f7c14d9530742a6b056378f3fc1f0f8~mv2_d_2048_1366_s_2.webp",
    town_id: ogden.id
})

breckEventOne = Event.create({
    name: "Race of the Santas",
    date: "December 2, 2017",
    season: "ws",
    image: "http://www.gobreck.com/sites/default/files/styles/secondary_hero/public/race-of-santas.jpg?itok=yQmlc3m2",
    town_id: breckenridge.id
})

breckEventTwo = Event.create({
    name: "Sledding at Carter Park",
    date: "Daily",
    season: "ws", 
    image: "http://www.gobreck.com/sites/default/files/styles/secondary_hero/public/IMG_7553.JPG?itok=ZPP7zNkF",
    town_id: breckenridge.id
})

breckEventThree = Event.create({
    name: "Breck Summer Beer Festivals",
    date: "July 9, 2018",
    season: "sf",
    image: "http://images.ski.com/media/SMT/breckbeerfest.jpg",
    town_id: breckenridge.id
})

breckEventFour = Event.create({
    name: "BREK EPIC",
    date: "August 12 - 17, 2018",
    season: "sf",
    image: "https://i2.wp.com/breckepic.com/wp-content/uploads/2016/04/EClark_150809_8675.jpg?zoom=2&fit=1200%2C799&ssl=1",
    town_id: breckenridge.id
})

vailEventOne = Event.create({
    name: "Ski Opening Day",
    date: "November 23, 2017",
    season: "ws",
    image: "http://www.henryrealty.com/wp-content/uploads/2012/12/vail_trails.jpg",
    town_id: vail.id
})

vailEventTwo = Event.create({
    name: "Story Time Skating",
    date: "November 29, 2017",
    season: "ws",
    image: "https://cdn.allvail.com/images/content/6361_w4IPF_Beaver_Creek_Ice_Rink_lg.jpg",
    town_id: vail.id
})

vailEventThree = Event.create({
    name: "Vail Arts Festival",
    date: "June 24 - June 26, 2018",
    season: "sf",
    image: "http://freshharvestfoodbank.org/wp-content/uploads/2016/06/vail-arts-festival-8.jpg",
    town_id: vail.id
})

vailEventFour = Event.create({
    name: "Vail Dance Festival",
    date: "July 28 - August 11, 2018",
    season: "sf",
    image: "https://images1.westword.com/imager/u/original/8981884/artists-of-colorado-ballet-in-serenade---photo-by-mike-watson---4.png",
    town_id: vail.id
})

ourayEventOne = Event.create({
    name: "23rd Ouray Ice Festival",
    date: "January 18 - 21, 2018",
    season: "ws",
    image: "https://static1.squarespace.com/static/5588cbb3e4b086577bcb0c31/t/55f9eebde4b00964f1c25d12/1442442941134/oip_websiteheader.jpg",
    town_id: ouray.id
})

ourayEventTwo = Event.create({
    name: "Ouray Ice Park: Kids' Climbing College",
    date: "Saturdays through March",
    season: "ws",
    image: "https://mtnguide.net/wp-content/uploads/2012/10/ouray-ice-park-banner.jpg",
    town_id: ouray.id
})

ourayEventThree = Event.create({
    name: "Ouray Hot Air Ballooning",
    date: "Throughout summer",
    season: "sf",
    image: "https://www.telluride.com/sites/default/files/styles/banner_slide/public/TTD%20Slider%20-%20Balloon%20Fest-13.jpg?itok=4vG2CZRJ",
    town_id: ouray.id
})

ourayEventFour = Event.create({
    name: "Horseback Riding",
    date: "Throughout summer",
    season: "sf",
    image: "http://horseback.actionadventures.net/images/horseback_vacations.jpg",
    town_id: ouray.id
})

durangoEventOne = Event.create({
    name: "43rd Holiday Arts and Crafts Festival",
    date: "December 1, 2017",
    season: "ws",
    image: "https://www.durango.com/wp-content/uploads/2009/11/christmas-durango-500.jpg",
    town_id: durango.id
})

durangoEventTwo = Event.create({
    name: "13th Annual Durango Independent Film Festival",
    date: "February 28, 2017",
    season: "ws",
    image: "https://storage.googleapis.com/ff-storage-p01/festivals/cover_photos/000/002/857/original/cover_photo.jpg?1497549813",
    town_id: durango.id
})

durangoEventThree = Event.create({
    name: "Durango & Silverton Narrow Gauge Railroad", 
    date: "Throughout Summer and Fall",
    season: "sf",
    image: "https://www.telluride.com/sites/default/files/styles/banner_slide/public/train.jpg?itok=vPd_Guhd",
    town_id: durango.id
})

durangoEventFour = Event.create({
    name: "Music in the Mountains Festival and Conservatory", 
    date: "July 8 - 29, 2018",
    season: "sf",
    image: "http://www.musicinthemountains.com/images/mitmlogo.jpg",
    town_id: durango.id
})

buffaloEventOne = Event.create({
    name: "Big Horn Mountain Festival",
    date: "July 7 - 9, 2018",
    season: "sf",
    image: "http://www.bighornmountainfestival.com/images/bands/2017/PrairieWildfire.jpg",
    town_id: buffalo.id
})

buffaloEventTwo = Event.create({
    name: "Meadowlark Ski Lodge Opening Day",
    date: "December 15, 2017",
    season: "ws",
    image: "http://wyofile.com/wp-content/uploads/2010/12/hometown-hills-telemark.jpg",
    town_id: buffalo.id
})

buffaloEventThree = Event.create({
    name: "Longmire Days",
    date: "July 8-10, 2018",
    season: "sf",
    image: "http://www.rmimarketing.com/main/wp-content/uploads/sites/10/2017/01/cropped-Grand-Tetons-Wyoming-1.jpg",
    town_id: buffalo.id
})

buffaloEventFour = Event.create({
    name: "Christmas in Buffalo",
    date: "December 2, 2017",
    season: "ws", 
    image: "http://www.chandleraz.gov/content/SE_ParadeOfLights_3.png",
    town_id: buffalo
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

ericaCommentTwo = Comment.create({
    title: "Must Do!",
    text: "This is a must-do attraction...especially if you are visiting with children. Summer or fall, are both great seasons for the ride. I will note, you won't miss anything if you only ride railroad one direction and drive back.",
    user_id: erica.id,
    event_id: durangoEventThree.id
})

oliveCommentTwo = Comment.create({
    title: "It's finally here!",
    text: "Can't wait for opening day! This season's snowfall is supposed to be epic.",
    user_id: olive.id, 
    event_id: buffaloEventTwo
})

oliveCommentThree = Comment.create({
    title: "Sunset Ride?",
    text: "Planning a sunset ride one Thursday evening coming up. If you're interested, leave a comment here.",
    user_id: olive.id,
    event_id: ourayEventFour
})