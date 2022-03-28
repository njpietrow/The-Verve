# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
ProductCategory.destroy_all
Product.destroy_all
Category.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('product_categories')
ActiveRecord::Base.connection.reset_pk_sequence!('products')
ActiveRecord::Base.connection.reset_pk_sequence!('categories')

User.create(email: "DemoUser@gmail.com", password: "password", first_name: "Nick", last_name: "Pietrow")

coffee = Category.create(name: "all-coffee")
single_origin = Category.create(name: "single-origin")
new_arrivals = Category.create(name: "new-arrivals")
blend = Category.create(name: "blends")
instant = Category.create(name: "instant")
gear = Category.create(name: "gear")
merch = Category.create(name: "merch")
mugs = Category.create(name: "mugs")
brew = Category.create(name: "brew")



puts "starting coffee"

nubia_loaiza = Product.create(
  product_name: "NUBIA LOAIZA",
  ingredients: "PEAR · CANDIED ORANGE · LIME LEAF",
  location: "COLOMBIA",
  price: 21.25,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Designated by a lavender label for March, this month's Single Origin coffees are produced by our female coffee partners. \n \n Nubia's coffee is similar to drinking a glass of fresh-pressed juice. It has a pear-like sweetness, and with each sip, you'll notice a citrus component of candied orange, followed by a lime tang in the finish—fruit-forward but highly balanced. \n \n In a male-dominated landscape, Nubia not only creates delicious coffees but showcases an era of hard work and immense skill at what she does. Those who like Amparo Maya from Colombia will enjoy this coffee.",
)

ProductCategory.create(product_id: nubia_loaiza.id, category_id: coffee.id)
ProductCategory.create(product_id: nubia_loaiza.id, category_id: single_origin.id)
ProductCategory.create(product_id: nubia_loaiza.id, category_id: new_arrivals.id)

# nubia_loaiza_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Nubianewcoffee_2048x2048.webp')
# nubia_loaiza.photo.attach(io: nubia_loaiza_photo, filename: 'nubia_loaiza_photo.jpg')
# roast3 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_3.webp')
# nubia_loaiza.roast_level_photo.attach(io: roast3, filename: 'roast3.jpg')

amparo_maya = Product.create(
  product_name: "AMPARO MAYA",
  ingredients: "DRIED APRICOT · CHESTNUT · COCOA POWDER",
  location: "COLOMBIA",
  price: 22.00,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Designated by a lavender label for March, this month's Single Origin coffees are produced by our female coffee partners. \n \n Sweet notes of dried apricot are the first impressions of Amparo Maya. Followed by a remarkable nuttiness that reminded us of chestnuts, finishing with a cocoa powder sweetness. \n \n Those who enjoyed previous year's Maria Cristina Cordoba from Colombia will be fans of this year's Amparo Maya.",
)

ProductCategory.create(product_id: amparo_maya.id, category_id: coffee.id)
ProductCategory.create(product_id: amparo_maya.id, category_id: single_origin.id)
ProductCategory.create(product_id: amparo_maya.id, category_id: new_arrivals.id)

# amparo_maya_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Amparonewcoffee_2048x2048.webp')
# amparo_maya.photo.attach(io: amparo_maya_photo, filename: 'amparo_maya_photo.jpg')
# roast4 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_4.webp')
# amparo_maya.roast_level_photo.attach(io: roast4, filename: 'roast4.jpg')

bedhatu_jibicho = Product.create(
  product_name: "BEDHATU JIBICHO",
  ingredients: "MELON · NOUGAT · PERSIMMON",
  location: "ETHIOPIA",
  price: 21.25,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Designated by a lavender label for March, this month's Single Origin coffees are produced by our female coffee partners. \n \n Fruit-forward sweetness is the first thing that hits your palette. Bedhatu Jibicho has tasting notes of juicy melon paired with notes of persimmon. Both flavors balance with a taste of dense nougat that lingers as you keep sipping through your morning. \n \n Another powerhouse coffee from Ethiopia, we recommend this for fans of Worka. Coming from a similar region, Bedhatu Jibicho is sure to be a favorite.",
)

ProductCategory.create(product_id: bedhatu_jibicho.id, category_id: coffee.id)
ProductCategory.create(product_id: bedhatu_jibicho.id, category_id: single_origin.id)
ProductCategory.create(product_id: bedhatu_jibicho.id, category_id: new_arrivals.id)

# bedhatu_jibicho_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Bedhatunewcoffee_2048x2048.webp')
# bedhatu_jibicho.photo.attach(io: bedhatu_jibicho_photo, filename: 'bedhatu_jibicho_photo.jpg')
# roast3 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_3.webp')
# bedhatu_jibicho.roast_level_photo.attach(io: roast3, filename: 'roast3.jpg')

maria_baide = Product.create(
  product_name: "MARIA BAIDE",
  ingredients: "WHITE PLUM · NECTARINE · SPICED CHOCOLATE",
  location: "HONDURAS",
  price: 22.75,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Designated by a lavender label for March, this month's Single Origin coffees are produced by our female coffee partners. \n \n Lightly sweet and slightly spiced, this coffee is the definition of balanced. Maria Baide exemplifies juicy notes of white plum and nectarine paired with deep, rich notes of spiced chocolate, creating a well-rounded and exciting flavor profile. \n \n Coming from one of our favorite regions of Honduras, Maria Baide is recommended for fans of La Leona.",
)

ProductCategory.create(product_id: maria_baide.id, category_id: coffee.id)
ProductCategory.create(product_id: maria_baide.id, category_id: single_origin.id)
ProductCategory.create(product_id: maria_baide.id, category_id: new_arrivals.id)


# maria_baide_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Marianewcoffee_2048x2048.webp')
# maria_baide.photo.attach(io: maria_baide_photo, filename: 'maria_baide_photo.jpg')
# roast4 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_4.webp')
# maria_baide.roast_level_photo.attach(io: roast4, filename: 'roast4.jpg')

wilder_seasonal_set = Product.create(
  product_name: "WILDER SEASONAL BLEND COFFEE SET",
  ingredients: "CRAFT INSTANT · AND A · 12 OUNCE BAG",
  location: "SEASONAL BLEND",
  price: 32.00,
  bag_size: "none",
  grind: "none",
  description: "We created the Wilder Seasonal Blend Coffee Set for the craft coffee lover who's ready to brew a delicious cup of coffee wherever the adventure may take them. This limited edition set includes a 12-ounce bag of Wilder Blend and a Wilder Blend instant Craft Coffee box. Limited-Time Savings $32 (Value $37.75).",
)

ProductCategory.create(product_id: wilder_seasonal_set.id, category_id: coffee.id)
ProductCategory.create(product_id: wilder_seasonal_set.id, category_id: blend.id)
ProductCategory.create(product_id: wilder_seasonal_set.id, category_id: instant.id)

# wilder_seasonal_set_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblendset_2048x2048.webp')
# wilder_seasonal_set.photo.attach(io: wilder_seasonal_set_photo, filename: 'wilder_seasonal_set_photo.jpg')
# roast5 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_5.webp')
# wilder_seasonal_set.roast_level_photo.attach(io: roast5, filename: 'roast5.jpg')

wilder_blend = Product.create(
  product_name: "WILDER BLEND",
  ingredients: "CANTALOUPE · WHITE CHERRY · HONEYSUCKLE",
  location: "SEASONAL BLEND",
  price: 20.75,
  bag_size: "12 oz.",
  grind: "Drip / Medium",
  description: "Juicy notes of ripe cantaloupe balanced with sweet yet tart, white cherries are the first impressions of Wilder Blend. Floral honeysuckle adds an element both light and refreshing—the perfect coffee to take you into Spring.\n \n Wilder Blend is a perfect example of mixing Colombian and Ethiopian components, highlighting elements of both natural and washed coffees. Making its return to the menu for another year, previous lovers of this blend will be happy to experience another season of Wilder Blend.",
)

ProductCategory.create(product_id: wilder_seasonal_set.id, category_id: coffee.id)
ProductCategory.create(product_id: wilder_seasonal_set.id, category_id: blend.id)

# wilder_blend_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblend_2048x2048.webp')
# wilder_blend.photo.attach(io: wilder_blend_photo, filename: 'wilder_blend_photo.jpg')
# roast5 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_5.webp')
# wilder_blend.roast_level_photo.attach(io: roast5, filename: 'roast5.jpg')

wilder_blend_instant = Product.create(
  product_name: "WILDER BLEND CRAFT INSTANT COFFEE",
  ingredients: "CANTALOUPE · WHITE CHERRY · HONEYSUCKLE",
  location: "SEASONAL BLEND",
  price: 17.00,
  bag_size: "none",
  grind: "none",
  description: "Juicy notes of ripe cantaloupe balanced with sweet yet tart, white cherries are the first impressions of Wilder Blend. Floral honeysuckle adds an element both light and refreshing—the perfect coffee to take you into Spring. \n \n Wilder Blend is a perfect example of mixing Colombian and Ethiopian components, highlighting elements of both natural and washed coffees. Making its return to the menu for another year, previous lovers of this blend will be happy to experience another season of Wilder Blend.\n \n This ain't your grandma's instant coffee. The finest coffees in the world hand-roasted, small-batch brewed, and preserved for you.\n \n Add one packet of Verve Instant Craft Coffee into your mug along with 10 ounces of hot or cold liquid (water, milk, or milk alternative), give it a stir, and drink up. \n \n Makes 6 cups of coffee.",
)

ProductCategory.create(product_id: wilder_blend_instant.id, category_id: coffee.id)
ProductCategory.create(product_id: wilder_blend_instant.id, category_id: blend.id)
ProductCategory.create(product_id: wilder_blend_instant.id, category_id: instant.id)

# wilder_blend_instant_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/wilderblendinstant_2048x2048.webp')
# wilder_blend_instant.photo.attach(io: wilder_blend_instant_photo, filename: 'wilder_blend_instant_photo.jpg')
# roast5 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_5.webp')
# wilder_blend_instant.roast_level_photo.attach(io: roast5, filename: 'roast5.jpg')

tima_guji = Product.create(
  product_name: "TIMA GUJI NATURAL SINGLE ORIGIN ESPRESSO",
  ingredients: "SUGAR PLUM · DANDELION · WHITE CHOCOLATE",
  location: "ETHIOPIA",
  price: 17.00,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Teeming with powerful aromatics, Tima Guji is the perfect morning wake-up call. Pleasantly floral and balanced, this Ethiopian natural is nothing short of spectacular. Sugar plum and dandelion intertwine upon the first sip and finish with silky notes of white chocolate, creating a fresh and delicate cup. \n \n Grown at a high elevation in Guji's Shakiso district, this coffee bursts with sweetness and floral qualities. Highlighting the best attributes of natural Ethiopian coffee, we recommend Tima Guji for fans of Guji Highlands.",
)

ProductCategory.create(product_id: tima_guji.id, category_id: coffee.id)
ProductCategory.create(product_id: tima_guji.id, category_id: single_origin.id)

# tima_guji_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/timaguji_2048x2048.webp')
# tima_guji.photo.attach(io: tima_guji_photo, filename: 'tima_guji_photo.jpg')
# roast2 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_2.webp')
# tima_guji.roast_level_photo.attach(io: roast2, filename: 'roast2.jpg')

jacinto = Product.create(
  product_name: "JACINTO DOMINGO",
  ingredients: "WATERMELON · CANDIED ORANGE · CACAO",
  location: "GUATEMALA",
  price: 22.75,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "The lightness in this coffee is reminiscent of the feeling of biting into a juicy watermelon on a warm summer day. The versatility of this sweet and citrus-forward coffee is a lively addition to any morning. \n \n Those who remember the previous year's Petrona Perez will enjoy this coffee. Each sip is balanced and sweet. ",
)

ProductCategory.create(product_id: jacinto.id, category_id: coffee.id)
ProductCategory.create(product_id: jacinto.id, category_id: single_origin.id)

# jacinto_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/timaguji_2048x2048.webp')
# jacinto.photo.attach(io: jacinto_photo, filename: 'jacinto_photo.jpg')
# roast4 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_4.webp')
# jacinto.roast_level_photo.attach(io: roast4, filename: 'roast4.jpg')

leona = Product.create(
  product_name: "LA LEONA",
  ingredients: "GOLDEN RAISIN · DRIED APRICOT · RAW SUGAR",
  location: "HONDURAS",
  price: 22.00,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "You'll notice an aromatic compound that is akin to freshly dried fruit. This coffee has familiarity layered in each sip, whether you find yourself just waking up or pushing through the day. \n \n Year after year, we get excited when Edgardo Tinoco's coffee hits our menu. This coffee has deep and full-bodied attributes. We recommend brewing this on a french press to get the most out of its characteristics.",
)

ProductCategory.create(product_id: leona.id, category_id: coffee.id)
ProductCategory.create(product_id: leona.id, category_id: single_origin.id)

# leona_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/timaguji_2048x2048.webp')
# leona.photo.attach(io: leona_photo, filename: 'leona_photo.jpg')
# roast3 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_3.webp')
# leona.roast_level_photo.attach(io: roast3, filename: 'roast3.jpg')

chelbesa = Product.create(
  product_name: "CHELBESA",
  ingredients: "JUNIPER · ROSE WATER · WHITE PEACH",
  location: "ETHIOPIA",
  price: 21.25,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "The best word to describe Chelbesa is delicate. Upon the first sip, you're met with juniper and rosewater notes, blending to create a sweet and floral profile. This coffee is balanced with bright notes of white peach, and it is guaranteed to be a favorite. \n \n Filled with florals and light flavors, this coffee from Ethiopia is nothing short of amazing. Recommended for fans of Sakaro, Chelbesa is overflowing with intricate and elegant flavors.",
)

ProductCategory.create(product_id: chelbesa.id, category_id: coffee.id)
ProductCategory.create(product_id: chelbesa.id, category_id: single_origin.id)

# chelbesa_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/chelbesa_2048x2048.webp')
# chelbesa.photo.attach(io: chelbesa_photo, filename: 'chelbesa_photo.jpg')
# roast2 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_2.webp')
# chelbesa.roast_level_photo.attach(io: roast2, filename: 'roast2.jpg')

streetlevel = Product.create(
  product_name: "STREETLEVEL",
  ingredients: "CLEMENTINE · RED APPLE · HONEYCOMB",
  location: "BLEND",
  price: 17.50,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Our flagship blend, Streetlevel is built for balance and approachability and is delicious with any brew method, including espresso. Streetlevel's profile of Guatemalan, Colombian, and Honduran coffees serve to anchor the blend and impart a complex sweetness, with notes of honeyed citrus and red apple. If we made a greatest hits tape, this would be the first track.",
)

ProductCategory.create(product_id: streetlevel.id, category_id: coffee.id)
ProductCategory.create(product_id: streetlevel.id, category_id: blend.id)

# streetlevel_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/streetlevel_2048x2048.webp')
# streetlevel.photo.attach(io: streetlevel_photo, filename: 'streetlevel_photo.jpg')
# roast6 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_6.webp')
# streetlevel.roast_level_photo.attach(io: roast6, filename: 'roast6.jpg')

sermon = Product.create(
  product_name: "SERMON",
  ingredients: "BLUEBERRY PIE · COCOA · CANDIED PECAN",
  location: "BLEND",
  price: 17.50,
  bag_size: "12 oz.",
  grind: "Whole Bean",
  description: "Fruit forward and full-bodied, Sermon is playful and approachable brewed or as espresso. This easy drinking blend is built from thoughtfully chosen naturally-processed coffees from East Africa that contribute deep sweetness and berry notes. Coupled with a washed Colombian component which provides structure and balance. Behold, your perfect morning.",
)

ProductCategory.create(product_id: sermon.id, category_id: coffee.id)
ProductCategory.create(product_id: sermon.id, category_id: blend.id)

# sermon_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/sermon_2048x2048.webp')
# sermon.photo.attach(io: sermon_photo, filename: 'sermon_photo.jpg')
# roast6 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_6.webp')
# sermon.roast_level_photo.attach(io: roast6, filename: 'roast6.jpg')

seabright = Product.create(
  product_name: "SEABRIGHT HOUSE BLEND",
  ingredients: "HONEYDEW · APRICOT · HAZELNUT",
  location: "BLEND",
  price: 48.00,
  bag_size: "none",
  grind: "none",
  description: "From our house to yours, Seabright House Blend is undeniably inviting. Composed of direct trade coffees from El Salvador and Guatemala. Seabright showcases apricot and honeydew flavor notes. A balanced mouthfeel. And aromatics of toasted hazelnuts. Set yourself up for a winning day with one of our easiest drinking blends.",
)

ProductCategory.create(product_id: seabright.id, category_id: coffee.id)
ProductCategory.create(product_id: seabright.id, category_id: blend.id)

# seabright_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/seabright_f2f708c9-7e17-48d1-8c21-f377f37b0790_2048x2048.webp')
# seabright.photo.attach(io: seabright_photo, filename: 'seabright_photo.webp')
# roast6 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_6.webp')
# seabright.roast_level_photo.attach(io: roast6, filename: 'roast6.webp')

the_1950 = Product.create(
  product_name: "THE 1950 DOSE & BREW CRAFT INSTANT COFFEE",
  ingredients: "NECTARINE · KEY LIME · BROWN SUGAR",
  location: "BLEND",
  price: 48.00,
  bag_size: "none",
  grind: "none",
  description: "Beloved by our baristas, The 1950 is a vibrant and sweet Ethiopian blend sourced from the birthplace of coffee. Composed of fully-washed coffees from high-elevation, smallholder producers. These heirloom coffees are roasted two ways to showcase their candied lime sweetness and brown sugar complexity.",
)

ProductCategory.create(product_id: the_1950.id, category_id: coffee.id)
ProductCategory.create(product_id: the_1950.id, category_id: blend.id)
ProductCategory.create(product_id: the_1950.id, category_id: instant.id)

# the_1950_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/The1950Front_2048x2048.webp')
# the_1950.photo.attach(io: the_1950_photo, filename: 'the_1950_photo.jpg')
# roast5 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_5.webp')
# the_1950.roast_level_photo.attach(io: roast5, filename: 'roast5.jpg')

buena_vista = Product.create(
  product_name: "BUENA VISTA DOSE & BREW CRAFT INSTANT COFFEE",
  ingredients: "CHOCOLATE · RED APPLE · MAPLE",
  location: "BLEND",
  price: 48.00,
  bag_size: "none",
  grind: "none",
  description: "Characterized by its deep structure and full-body, Buena Vista's Latin American roots yield a dark chocolate savor with a caramelized sweetness. Selected for their balance and dense flavor characteristics, these Southern Colombian coffees stand up to a deeper roast, lending a smooth and adaptable flavor profile. If you like waking up to a dark, rich flavor, look no further.",
)

ProductCategory.create(product_id: buena_vista.id, category_id: coffee.id)
ProductCategory.create(product_id: buena_vista.id, category_id: blend.id)
ProductCategory.create(product_id: buena_vista.id, category_id: instant.id)

# buena_vista_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/BuenaVistaFront_2048x2048.webp')
# buena_vista.photo.attach(io: buena_vista_photo, filename: 'buena_vista_photo.webp')
# roast7 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_7.webp')
# buena_vista.roast_level_photo.attach(io: roast7, filename: 'roast7.webp')

bronson_instant = Product.create(
  product_name: "BRONSON FRENCH ROAST CRAFT INSTANT COFFEE",
  ingredients: "MOLASSES · DARK CHOCOLATE · FIG",
  location: "BLEND",
  price: 48.00,
  bag_size: "none",
  grind: "none",
  description: "Dark chocolate and a raw sugar sweetness define our boldest roast yet. Built with dense, seasonally-harvested coffees selected for their sweetness, depth, and ability to withstand cream and sugar. Bronson is one tough coffee and more than willing to lend a hand to jumpstart your day. \n \n Amazing things come in tiny packages. Verve Craft Instant Coffee is hand-roasted, small-batch brewed and preserved for your adventures. Ready to be brewed wherever and whenever. A week’s worth of premium coffee in your pocket. \n \n Add one packet of Verve Craft Instant Coffee into your mug along with 10 ounces of hot or cold liquid (water, milk, or milk alternative), stir, and drink up. \n \n Makes 6 cups of coffee.",
)

ProductCategory.create(product_id: bronson_instant.id, category_id: coffee.id)
ProductCategory.create(product_id: bronson_instant.id, category_id: blend.id)
ProductCategory.create(product_id: bronson_instant.id, category_id: instant.id)

# bronson_instant_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Bronson_instant_2048x2048.webp')
# bronson_instant.photo.attach(io: bronson_instant_photo, filename: 'bronson_instant_photo.webp')
# roast7 = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/roast_level_7.webp')
# bronson_instant.roast_level_photo.attach(io: roast7, filename: 'roast7.webp')



puts "starting gear"


cap = Product.create(
  product_name: "TRAILBLAZER CAMO CAP",
  ingredients: "-",
  location: "-",
  price: 25.00,
  bag_size: "none",
  grind: "gear",
  description: "Back from the vault, our vintage-inspired Trailblazer Camo Cap features 5-panel construction with a strapback. Shield the sun and trailblaze your own way.",
)

ProductCategory.create(product_id: cap.id, category_id: gear.id)
ProductCategory.create(product_id: cap.id, category_id: merch.id)

# cap_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/trailblazercamocap_2048x2048.webp')
# cap.photo.attach(io: cap_photo, filename: 'cap_photo.webp')

mug = Product.create(
  product_name: "VERVE CLASSIC NOIR CAMP MUG",
  ingredients: "-",
  location: "-",
  price: 24.95,
  bag_size: "none",
  grind: "gear",
  description: "Classic yet understated, The Verve Classic Noir Camp Mug is vacuum insulated to keep your favorite beverage piping hot or icy cold. Camp tested, office approved. \n \n Made by our friends at MiiR.",
)

ProductCategory.create(product_id: mug.id, category_id: gear.id)
ProductCategory.create(product_id: mug.id, category_id: merch.id)
ProductCategory.create(product_id: mug.id, category_id: mugs.id)

# mug_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Mug_core_black1_2048x2048.webp')
# mug.photo.attach(io: mug_photo, filename: 'mug_photo.webp')

water_bottle = Product.create(
  product_name: "VERVE MIIR 32 OZ WATER BOTTLE",
  ingredients: "-",
  location: "-",
  price: 39.95,
  bag_size: "none",
  grind: "gear",
  description: "We're firm believers that there's no one way to enjoy your favorite bevy on the go. However, our MiiR 32-ounce Bottle gets pretty dang close. Hot or cold, the wide mouth and generous volume will be sure to cover every level of thirst.",
)

ProductCategory.create(product_id: water_bottle.id, category_id: gear.id)
ProductCategory.create(product_id: water_bottle.id, category_id: merch.id)
ProductCategory.create(product_id: water_bottle.id, category_id: mugs.id)

# water_bottle_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/miir-32_oz_water_bottle_1_2048x2048.jpg')
# water_bottle.photo.attach(io: water_bottle_photo, filename: 'water_bottle.jpg')

pourover = Product.create(
  product_name: "FELLOW STAGG [ X ] POUROVER SET",
  ingredients: "-",
  location: "-",
  price: 80.00,
  bag_size: "none",
  grind: "gear",
  description: "The Fellow Stagg [X] Pourover set brings together a dripper, a tasting glass, and twenty filters in one professional coffee brewing bundle. It's the perfect setup for any ritualistic coffee brewer seeking a precise, slow pour. Brewing coffee with a Stagg [X] Dripper gives more control over the water dispersal and extraction. The intentional double-wall helps to maintain consistent temperature throughout the coffee brewing process resulting in a better, smoother cup.",
)

ProductCategory.create(product_id: pourover.id, category_id: gear.id)
ProductCategory.create(product_id: pourover.id, category_id: brew.id)

# pourover_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Stagg-_X_-Set-w-Tasting-Glass-hero_2048x2048.webp')
# pourover.photo.attach(io: pourover_photo, filename: 'pourover_photo.webp')

french_press = Product.create(
  product_name: "FELLOW CLARA FRENCH PRESS - MATTE BLACK & WALNUT",
  ingredients: "-",
  location: "-",
  price: 135.00,
  bag_size: "none",
  grind: "gear",
  description: "Meet the most thoughtful French press. Clara is in an immersion brewing league of her own. With nuanced details and upgraded features, this brewing process is easy, enjoyable, and the epitome of a coffee table centerpiece. Whether you want to dial in a French press recipe at breakfast or entertain a crowd with a shrimp cocktail in one hand and Clara in the other, you will always end up with an elevated cup.",
)

ProductCategory.create(product_id: french_press.id, category_id: gear.id)
ProductCategory.create(product_id: french_press.id, category_id: brew.id)

# french_press_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Clara_Matte_Black_with_Walnut_Handle_2048x2048.webp')
# french_press.photo.attach(io: french_press_photo, filename: 'french_press_photo.jpg')

book = Product.create(
  product_name: "FARMLEVEL DIGEST VOL. 2 PANAMA",
  ingredients: "-",
  location: "-",
  price: 135.00,
  bag_size: "none",
  grind: "gear",
  description: "Shot entirely on film, our second volume of the Farmlevel digest features 200 pages of photos and stories of the pioneering families of Boquete, Panama.",
)

ProductCategory.create(product_id: book.id, category_id: gear.id)
ProductCategory.create(product_id: book.id, category_id: merch.id)

# book_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Cover_Shot_2048x2048.webp')
# book.photo.attach(io: book_photo, filename: 'book_photo.jpg')

beanie = Product.create(
  product_name: "VERVE CLASSIC BEANIE",
  ingredients: "-",
  location: "-",
  price: 26.00,
  bag_size: "none",
  grind: "gear",
  description: "Stay cozy on the daily with the Verve Classic Beanie, designed for comfy, easy-wearing use. Cuff it once, twice, or not at all, this ribbed knit beanie is sure to become an everyday essential.",
)

ProductCategory.create(product_id: beanie.id, category_id: gear.id)
ProductCategory.create(product_id: beanie.id, category_id: merch.id)

# beanie_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/beanie2_2048x2048.webp')
# beanie.photo.attach(io: beanie_photo, filename: 'beanie_photo.jpg')

filters = Product.create(
  product_name: "CHEMEX COFFEE FILTERS",
  ingredients: "-",
  location: "-",
  price: 10.95,
  bag_size: "none",
  grind: "gear",
  description: "What makes Chemex coffee filters so special? Besides their origami-esque design, these cone-shaped filters tout a 20-30% thicker paper than the competition, resulting in a more uniform coffee extraction. Each paper filter goes through an oxidizing cleansing bath followed by a series of hot water baths to ensure that the specialty fibers catch all bitter elements, oils, and the finest grounds. No sediment and less oil mean a cleaner cup of pure coffee flavor. Lab-tested and guaranteed not to burst under the weight of the hot liquid during filtration or after brewing while lifting the spent filter and grounds out. \n \n PRO TIP: Take your Chemex brewing to the next level by pre-wetting the filter. This will help rinse away any remaining paper fibers as well as warm the carafe. Make sure to empty the water before brewing coffee and always place the three folded leaves on the spout.",
)

ProductCategory.create(product_id: filters.id, category_id: gear.id)
ProductCategory.create(product_id: filters.id, category_id: brew.id)

# filters_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/chemex_filters_2048x2048.webp')
# filters.photo.attach(io: filters_photo, filename: 'filters_photo.jpg')

kettle = Product.create(
  product_name: "FELLOW STAGG EKG ELECTRIC KETTLE",
  ingredients: "-",
  location: "-",
  price: 159.00,
  bag_size: "none",
  grind: "gear",
  description: "Labeling this simply as an “electric kettle” would be an understatement. The Stagg EKG Electric Kettle will bring your coffee brewing into the future. A few standout features include the variable temperature control that allows you to select the desired temperature to the degree while a “hold” mode keeps it at that temperature for 60 minutes. The crisp black and blue LCD screen displays “real-time” temperature progress. The built-in brew stopwatch creates a seamless timed extraction. \n \n The kettle is the meeting point of design and functionality. The sleek modern design instantly captures the eye. Enjoy a precise pour with the fluted tip and even flow rate with the gooseneck design. The counterbalanced handle will help move the center back towards your hand for a slower-paced pour. The body is made of top-quality stainless steel. Bring the go-to kettle for barista competitions to your kitchen. ",
)

ProductCategory.create(product_id: kettle.id, category_id: gear.id)
ProductCategory.create(product_id: kettle.id, category_id: brew.id)

# kettle_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Fellow_Stagg_EKG_2048x2048+(1).webp')
# kettle.photo.attach(io: kettle_photo, filename: 'kettle_photo.jpg')

chemex = Product.create(
  product_name: "CHEMEX POUROVER COFFEE MAKER",
  ingredients: "-",
  location: "-",
  price: 35.00,
  bag_size: "none",
  grind: "gear",
  description: "You can't say Chemex without someone's ears perking up. This cult classic has earned its priority position in the coffee brewer lineup. First created in 1941, Chemex’s groundbreaking design was the culmination of past studied methods and newly tested concepts. After repeated application, Chemex cracked the code for the absolute best cup of coffee possible. Featuring an iconic hourglass shape, this pourover coffee brewer gives you full control over the coffee brewing process. \n \n PRO TIP: Chemex filters are specially designed to absorb all excess oils which result in a clean coffee extraction with heightened aromatics.",
)

ProductCategory.create(product_id: chemex.id, category_id: gear.id)
ProductCategory.create(product_id: chemex.id, category_id: brew.id)

# chemex_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Chemex_Wood_Handle_2048x2048.webp')
# chemex.photo.attach(io: chemex_photo, filename: 'chemex_photo.jpg')

diner_mug = Product.create(
  product_name: "KINTO DINER MUG",
  ingredients: "-",
  location: "-",
  price: 15.00,
  bag_size: "none",
  grind: "gear",
  description: "Slow coffee style. Our newest addition from Kinto balances usability and aesthetics. Their update of a classic diner mug brings thoughtful simplicity to your tableware. Kinto's designs are rooted in Japanese traditions and interpreted in a way that fits with modern lifestyles all around the world. This cup reminds us all to slow down and see the beauty of nature. ",
)

ProductCategory.create(product_id: diner_mug.id, category_id: gear.id)
ProductCategory.create(product_id: diner_mug.id, category_id: merch.id)
ProductCategory.create(product_id: diner_mug.id, category_id: mugs.id)

# diner_mug_photo = open('https://the-verve-seeds.s3.us-west-1.amazonaws.com/Kinto.Silo_2048x2048.webp')
# diner_mug.photo.attach(io: diner_mug_photo, filename: 'diner_mug_photo.webp')
