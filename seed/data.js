import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {

  await db.dropDatabase()

  const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    username: 'bianca',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    username: 'enzo',
    email: 'n.zo@super.gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    username: 'kumi',
    email: 'kumi@super.gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()

  const products = [
  {
    "name": "TETON Sports Sierra 16 12 Person Family Canvas Tent - Khaki Tan/ Brown",
    "imgURL": "https://i.imgur.com/lXXtaSc.jpg",
    "description": "TETON Sports Sierra 16 12 Person Family Canvas Tent - The Sierra 16 Canvas Tent is a beautiful bell tent with all the great features you’d expect from a canvas tent; stability, breathability, and water-resistance. The coolest feature is the zip-away floor that transforms your tent into a canopy for outdoor events such as festivals, weddings, and group campouts. It’s an easy single person set up.",
    "type": "tents",
    "price": 629.99
  },
  {
    "name": "Big Agnes Tiger Wall UL1 Solution Dye - 1 Person Tent",
    "imgURL": "https://i.imgur.com/1xtCsSK.jpg",
    "description": "Big Agnes Tiger Wall UL1 Solution Dye - 1 Person Tent - The Tiger Wall UL tents are our lightest two door/two vestibule, technical backcountry shelters yet. The two doors make tent life a little easier, and the weight savings is especially nice when out for multi-day trip and gram counting. Combining simple, yet strong single pole architecture with DAC Featherlite materials, interior storage pockets, and comforts around every corner, these tents are poised to be a backcountry favorite.",
    "type": "tents",
    "price": 359.95
  },
  {
    "name": "Marmot Catalyst 2 Person Tent",
    "imgURL": "https://i.imgur.com/GLtYygg.jpg",
    "description": "Marmot Catalyst 2 Person Tent - The Catalyst 2 Person Tent is a 3-season, lightweight 2-person tent that features a seam-taped catenary cut floor, color-coded poles for easy setup and 2 D-shaped doors and 2 vestibules with plenty of room to stash gear. It also has interior pockets so you can store your smaller gear and a lamp shade pocket that securely holds your headlamp and provide ambient light.",
    "type": "tents",
    "price": 183
  },
  {
    "name": "ALPS Mountaineering Meramac 3 Person Camping Tent",
    "imgURL": "https://i.imgur.com/PNaFQSY.jpg",
    "description": "ALPS Mountaineering Meramac 3 Person Camping Tent - The Meramac series tents are all free standing 2-pole designs with shock corded fiberglass with aluminum ferrules. The ferrules are the \"connectors\" that hold the poles together and we use aluminum, rather than steel, because aluminum can never rust. Fiberglass poles are also normally one size larger than normal to offer you a sturdier, stronger tent. Lightweight but strong polyester fabrics. The side walls are uncoated so the tent can \"breathe\" under the urethane coated fly. The fly uses a pole in the top, which gives you an awning over each door for excellent rain protection. The fly is full length on the sides, not 3/4 length like some others, for better weather protection. Factory seal seams on the floor and fly for maximum water repellency. Entry and exit are enhanced with 2 doors, which means if you have to get out at night, you don't need to crawl over the others to get to the only door. The second door is also nice for extra ventilation in hot, muggy weather. Door zippers are a #8, which is one size larger than most, for extra durability. Mesh storage pockets and a gear loft are included to help you keep your gear organized. ",
    "type": "tents",
    "price": 129.99
  },
  {
    "name": "Kelty Ashcroft 1 - 1 Person Backpacking Tent - Elm/Winter Moss",
    "imgURL": "https://i.imgur.com/xvcfWXY.jpg",
    "description": "Kelty Ashcroft 1 - 1 Person Backpacking Tent - Elm/Winter Moss - ",
    "type": "tents",
    "price": 99.99
  },
  {
    "name": "Mystery Ranch Terraframe 3-Zip 50 Backpack",
    "imgURL": "https://i.imgur.com/865i9KQ.jpg",
    "description": "Finally, a pack built for general outdoor, backpacking, and mountaineering use featuring our patented OVERLOAD feature. Your new secret weapon when carrying awkward, excessive loads. 3-Zip access meets load-hauling OVERLOAD feature for mountain use. Blending two of Mystery Ranch's most crucial designs – the 3-ZIP and OVERLOAD features – the redesigned TERRAFRAME 50 3-ZIP is for mountain zealots who need the option of going light or going big. Mystery Ranch offered the OVERLOAD feature in hunting and military packs for years, yet backcountry climbers, fisherman, guides, and others have been asking for a mountain-inspired version of this versatile, load-taming design. Featuring rigid, carbon fiber frame stays, the suspension allows an ideal amount of torsional flex while providing ample support for loads up to 150 lbs. This functional expandability, the OVERLOAD, is your secret weapon when carrying awkward, excessive loads.",
    "type": "backpacks",
    "price": 350
  },
  {
    "name": "TETON Sports Scout 3400 Internal Frame Backpack",
    "imgURL": "https://i.imgur.com/Cjb59ct.jpg",
    "description": "TETON Sports Scout 3400 Internal Frame Backpack - Incredible views and remote trails are just some of the rewards you’ll enjoy when you’re backpacking in the wilderness. And because backpacking can push you to your limits, you need a backpack that can keep up with you and your latest adventure. The Scout 3400 is a high-quality backpack that is loaded with features like a sleeping bag compartment, compression straps, and multiple compartments and pockets for strategic packing. Comfort features include a padded back panel that is channeled for optimal airflow, padded lumbar and waist and shoulder straps that help carry the load. Adjust the torso, waist, chest and shoulders to fit men, women and youth. The Scout 3400 Internal Frame Backpack was designed with you in mind. But don’t take our word for it—read the reviews! The Scout 3400 is helping thousands of backpackers enjoy The Great Outdoors.",
    "type": "backpacks",
    "price": 79.99
  },
  {
    "name": "Gregory Amber 65 Liter Women's Pack - Arctic Grey",
    "imgURL": "https://i.imgur.com/W60iL0K.jpg",
    "description": "Gregory Amber 65 Liter Women's Pack - Large enough for big treks (and all the luxuries) with an adjustable suspension. The Amber 70 provides the space needed for mega-treks of all types. Easy to use top-loading and bottom access, and the breathable Trailflex suspension make for a fully featured, adjustable fit pack.",
    "type": "backpacks",
    "price": 209.99
  },
  {
    "name": "Osprey Rook 50 Liter Men's Backpacking Pack - Black",
    "imgURL": "https://i.imgur.com/2mWp3uZ.jpg",
    "description": "Osprey Rook 50 Liter Men's Backpacking Pack - Just like all Osprey packs, the Rook 50 delivers. This time with user-friendly and capable features that combine to make your next weekend in the woods a success—no matter your experience level. Featuring phenomenal ventilation, a capable and comfortable carrying system, a zippered sleeping bag compartment, an integrated and removable raincover, and side hipbelt pockets. The refined features you’ve come to expect from all Osprey backpacks. Amateur or ace, we have a feeling you’ll be looking for any excuse to hit the trail with the Rook by your side.",
    "type": "backpacks",
    "price": 154.95
  },
  {
    "name": "Osprey Hikelite 32 Backpacking Pack - Blue Baca",
    "imgURL": "https://i.imgur.com/lyyfVNL.jpg",
    "description": "Osprey's Hikelite 32 is an unassuming technical pack that is perfect for both day hikes and everyday use. A well-ventilated AirSpeed backpanel means you’ll never have to deal with hoisting a sweaty pack onto your back, and an integrated raincover has you—and your pack—covered on less-than-bluebird days. No matter your daily destination, if you're looking for a simple pack that provides excellent comfort, supreme ventilation, and extra features, the Hikelite 32 is the right pack for you.",
    "type": "backpacks",
    "price": 109.95
  },
  {
    "name": "Sierra Designs Cloud 20 Degree Sleeping Bag - Regular",
    "imgURL": "https://i.imgur.com/QvcpXzD.jpg",
    "description": "So light and so comfortable....It's like sleeping on a cloud. The patented self-sealing foot vent allows fast and easy ventilation. An insulated shoulder pocket keeps comforter wrapped around you sealing out drafts. Also an oversized integrated comforter resembles all the comforts of your bed at home.",
    "type": "sleepingBags",
    "price": 319.95
  },
  {
    "name": "ALPS Mountaineering Radiance Quilt",
    "imgURL": "https://i.imgur.com/N9EhnRz.jpg",
    "description": "If you're looking for a lightweight option without sacrificing warmth or comfort, the Radiance Quilt provides the ultimate weight-saving opportunity, weighing only 2.5 lbs and packing small. The oversized quilt accommodates users up to 6'3\" and can be used as a stand-alone bag or over any mummy bag for those extra chilly nights. The included quilt retention system can be used in various arrangements and adjusted to use with most sleeping pads.",
    "type": "sleepingBags",
    "price": 99.99
  },
  {
    "name": "Teton Sports Trailhead +20 degree Ultralight Mummy Sleeping Bag",
    "imgURL": "https://i.imgur.com/TdTohZz.jpg",
    "description": "Teton Sports Trailhead +20 degree Ultralight Mummy Sleeping Bag - Innovative PolarLite insulation keeps you warm even though entire bag is thin and light. 87L x 32W (at widest point) provides shoulder and leg room while foot box design lets you lie with toes up and still be comfortable. Zipper pullers inside and outside of bag for easy closure. Mummy-style hood with shoulder baffle and drawstring. Taped, anti-snag zippers and full-length zipper draft tube. Zippered inner pocket for valuables. Weighs 2.9 lbs.",
    "type": "sleepingBags",
    "price": 69.99
  },
  {
    "name": "ALPS Mountaineering Blaze 20° XL Sleeping Bag",
    "imgURL": "https://i.imgur.com/b1UHhUv.jpg",
    "description": "Alps Mountaineering Blaze 20° XL Sleeping Bag - The Blaze uses two-layer off-set construction featuring a contoured hood and mummy shape, which help seal in your warmth. For added heat retention, the Blaze boasts an insulated chest and zipper baffle keeping the warmth in and the cold night air out. The Blaze is offered in multiple sizes and temperatures to accommodate most people. The Blaze is a great bag to add to your camping essentials.",
    "type": "sleepingBags",
    "price": 129.99
  },
  {
    "name": "Big Agnes Echo Park 0° - Synthetic Fill - Wide & Long Size Mummy Bag - Olive",
    "imgURL": "https://i.imgur.com/oFdtk1n.jpg",
    "description": "Big Agnes Echo Park - Echo Park Series synthetic bags are cut tall and wide, ideal for campers of a larger stature, barrel-chested strong men, or for folks who just want more room to move around at night. Ideal for hunting camps, base camping, or road-tripping. Slip one of our 25 or 30-inch wide pads into these Big Agnes System bags, which utilize our Flex Pad Sleeve design. With double zippers that zip completely off to create a comforter affect, or zip together into a mummy bag with the Park Series Wedgie, plus top corner hand pockets that feel just like your comforter at home, the Park bags’ unique quilt-like construction turns your bag into a backcountry bed. So comfortable, you won’t want to go home!",
    "type": "sleepingBags",
    "price": 219.95
  },
  {
    "name": "Coleman Elite Perfectflow Instastart Propane Lantern",
    "imgURL": "https://i.imgur.com/Pg2VHbq.jpg",
    "description": "Coleman Elite Perfectflow Instastart Propane Lantern - PerfectFlow propane pressure control system regulates pressure for consistent performance regardless of weather. Metal guard rails helps prevent globe breakage. Porcelainized steel ventilator resists corrosion and rust. A snap-on reflector is also included, that stores on the collar when not in use.",
    "type": "lighting",
    "price": 84.99
  },
  {
    "name": "Streamlight SL Protac HL 5-X Flashlight",
    "imgURL": "https://i.imgur.com/4CVGbKY.jpg",
    "description": "Streamlight SL PROTAC HL 5-X FLASHLIGHT -The 3,500 lumen ProTac HL 5-X is available two ways: The ProTac HL 5-X USB is a complete rechargeable system that includes two of our new 18650 USB batteries with an integrated USB charge port. The ProTac HL 5-X includes two CR123A lithium batteries. Both feature MULTI-FUEL innovation that allows them to accept Streamlight's 18650 USB battery or CR123A lithium batteries, ensuring you'll always have a beam when you need it.",
    "type": "lighting",
    "price": 129.99
  },
  {
    "name": "Cyclops Rechargeable LED Spotlight",
    "imgURL": "https://i.imgur.com/85y9O2A.jpg",
    "description": "Cyclops Rechargeable LED Spotlight - Features a super bright Cree XM-L2 10 Watt LED bulb to light your outdoor adventure.",
    "type": "lighting",
    "price": 64.99
  },
  {
    "name": "Motorola Water Resistant Lantern / Flashlight / Outdoor LED Tent Light / Camping Torch / Compass",
    "imgURL": "https://i.imgur.com/7YKNQpf.jpg",
    "description": "Motorola Water Resistant Lantern / Flashlight / Outdoor LED Tent Light / Camping Torch / Compass - The LUMO 150 lantern + flashlight is a compact light source. It is versatile, lightweight and bright. Different smart modules are available which provide multiple functions for your outdoor needs.",
    "type": "lighting",
    "price": 9.99
  },
  {
    "name": "Streamlight The Siege LED Lantern",
    "imgURL": "https://i.imgur.com/r2XShxS.jpg",
    "description": "Streamlight The Siege LED Lantern - The Streamlight Siege Lantern will is the perfect addition to your outdoor gear. It's rugged performance offers 340 lumens on high, 12 plus run time on low and drop tested to 2 meters. The Siege is extremely versatile with 3 white light settings, will hang anywhere, two D-rings clip anywhere and a removable top for direct illumination. It is engineered to float, waterproof and resistant to battery corrosion makes it the best outdoor lantern on the market for any application. The Siege also has a red LED light that shines solid and has a built in rescue Morse Code S.O.S signal that last 18 days. The Siege has a battery level indicator changes from green, to yellow, to red, then to flashing red when batteries reach the end of their useable life, taking the guess work out of changing batteries.",
    "type": "lighting",
    "price": 47.99
  },
  {
    "name": "Coleman Utensil Pocket Knife",
    "imgURL": "https://i.imgur.com/A4aq01L.jpg",
    "description": "Coleman Utensil Pocket Knife - Includes folding knife, fork, spoon, and bottle opener. Separates into two sections for easy use. Stainless steel with decorative handle. Made in China Includes folding knife, fork, spoon, and bottle opener",
    "type": "campCooking",
    "price": 9.99
  },
  {
    "name": "Jetboil Flash Cooking System Carbon",
    "imgURL": "https://i.imgur.com/COGXHFq.jpg",
    "description": "Jetboil Flash Cooking System - Boiling water may not be rocket science, but doing it in 100 seconds takes a lot more than rubbing two sticks together. To create the new Flash, Jetboil challenged every aspect of thier already iconic stove, modeling the combustion and selecting materials to optimize efficiency, speed and precision. The result is our fastest-ever stove: a backcountry cooking system that cuts a full minute off our best boil time. Prepare for liftoff.",
    "type": "campCooking",
    "price": 109.95
  },
  {
    "name": "Camp Chef Explorer 2-Burner Stove",
    "imgURL": "https://i.imgur.com/XPF8JNz.jpg",
    "description": "Camp Chef Explorer 2-Burner Stove - When adventure calls, are you prepared to answer? With the Explorer 2x Stove, you will be. The durable, versatile stove packs enough power in its 30,000 BTU burners to boil water and cook your food, whether you’re tailgating at the football stadium or camping with the family. Portability is no problem with the removable legs, and a three-sided windscreen makes outdoor cooking easy. As one of our 14” cooking systems, you can add a griddle, BBQ box, steam pot and more to this stove for every meal. You’ll be up for anything when you have the Explorer 2x Stove—now with a clean, stainless steel faceplate—so add it to your collection today.",
    "type": "campCooking",
    "price": 149.99
  },
  {
    "name": "Camp Chef Sportsman's 2X Exclusive Combo Stove",
    "imgURL": "https://i.imgur.com/1AKNzs8.jpg",
    "description": "Camp Chef Sportsman's 2X Exclusive Combo Stove - As one of Camp Chef's 14 inch cooking systems, you can mix and match stove top accessories for every meal, whether you're cooking chicken in the BBQ Box or baking pizza in the Italia Artisan Oven. Features a three-sided windscreen, removable legs for easy portability. Great for camping, hunting, tailgating, enjoy at home on the patio, you'll want to bring this stove on every adventure.",
    "type": "campCooking",
    "price": 299.99
  },
  {
    "name": "Deluxe BBQ Grill Box 30 Accessory",
    "imgURL": "https://i.imgur.com/4TC5Ldw.jpg",
    "description": "Camp Chef Deluxe BBQ Box - Camp Chef's unique grill systems cook better than ordinary grills. Using infrared technology, internal heat-diffuser plates improve cooking quality, eliminate flare-ups, and instantly vaporize drippings. A pre-seaseoned cast iron grilling surface holds and distributes heat consistently, cooking your meat more evenly. The BB30L covers one burner and is designed to fit most Camp Chef one, two, and three burner stoves.",
    "type": "campCooking",
    "price": 139.99
  }
  ]
  
    // insert products into database
    await Product.insertMany(products)
    console.log('Created users & products!')
  
    // close database connection. done.
    db.close()
}

insertData()