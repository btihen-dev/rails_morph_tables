# Characters, Relationships and jobs
# ##################################
#
# Family Tree
# https://www.youtube.com/watch?app=desktop&v=AHWVVm_wd0s

# Flintstone characters and pets & Jobs
# https://en.wikipedia.org/wiki/The_Flintstones
# https://www.ranker.com/list/all-the-flintstones-characters/reference

## Planet
#########
# earth = Planet.create!(planet_name: 'Earth')
# zetox = Planet.create!(planet_name: 'Zetox')

## Species
##########
human = Species.create!(species_name: 'human')
alien = Species.create!(species_name: 'alien')
dino = Species.create!(species_name: 'dinosaur')
kanga = Species.create!(species_name: 'kangaroo')
tiger = Species.create!(species_name: 'saber-tooth tiger')

## PEOPLE
#########
## Flintstone family
# agriculture (hillbilly)
# San Cemente Owner
zeke = Character.create!(species: human, first_name: 'Zeke', last_name: 'Flintstone', gender: 'male')
# agriculture (hillbilly)
jed = Character.create!(species: human, first_name: 'Jed', last_name: 'Flintstone', gender: 'male')

# soldier / pilot
rocky = Character.create!(species: human, first_name: 'Rockbottom', nick_name: 'Rocky', last_name: 'Flintstone', gender: 'male')

# rich uncle
giggles = Character.create!(species: human, first_name: 'Jay Giggles', nick_name: 'Uncle Giggles', last_name: 'Flintstone', gender: 'male')

# freeway traffic reporter
pops = Character.create!(species: human, first_name: 'Ed Pops', nick_name: 'Pops', last_name: 'Flintstone', gender: 'male')
# homemaker
edna = Character.create!(species: human, first_name: 'Edna', last_name: 'Flintstone', given_name: 'Hardrock', gender: 'female')

# married to wilma
# son of pops & edna (crane operator at 'Slate Rock & Gravel Company')
fred = Character.create!(species: human, first_name: 'Fredrick Jay', nick_name: 'Fred', last_name: 'Flintstone', gender: 'male')
# married to fred
# reporter & caterer & homemaker
wilma = Character.create!(species: human, first_name: 'Wilma', last_name: 'Flintstone', given_name: 'Slaghoople', gender: 'female')

# daughter of fred & wilma, married to bamm-bamm
# advertising executive
pebbles = Character.create!(species: human, first_name: 'Pebbles Wilma', nick_name: 'Pebbles', last_name: 'Rubble', given_name: 'Flintstone', gender: 'female')
# adopted brother to pebbles
stoney = Character.create!(species: human, first_name: 'Stoney', last_name: 'Flintstone', gender: 'male')


## Hardrock family
# father to Edna, Tex, Jemina (married to Lucile)
james = Character.create!(species: human, first_name: 'James', last_name: 'Hardrock', gender: 'male')
# mother to Edna, Tex, Jemina (married to James)
lucile = Character.create!(species: human, first_name: 'Lucile', last_name: 'Hardrock', given_name: 'von Stone', gender: 'female')

# sister to Tex & Edna
jemina = Character.create!(species: human, first_name: 'Jemina', last_name: 'Hardrock', gender: 'female')

# texrock rangers & rancher (town: texrock)
# brother to Edna
tex = Character.create!(species: human, first_name: 'Tex', last_name: 'Hardrock', gender: 'male')

# daughter of tex
mary = Character.create!(species: human, first_name: 'Mary Lou', last_name: 'Hardrock', gender: 'female')
# son of tex (ranch owner)
tumbleweed = Character.create!(species: human, first_name: 'Tumbleweed', last_name: 'Hardrock', gender: 'male')

## Slaghoople family
# father to Wilma, married to Pearl
ricky = Character.create!(species: human, first_name: 'Richard', nick_name: 'Ricky', last_name: 'Slaghoople', gender: 'male')
pearl = Character.create!(species: human, first_name: 'Pearl', last_name: 'Slaghoople', gender: 'female')

# wilma's sister
mica = Character.create!(species: human, first_name: 'Mica', last_name: 'Slaghoople', gender: 'female')
# wilma's sister
mickey = Character.create!(species: human, first_name: 'Michael', nick_name: 'Mickey', last_name: 'Slaghoople', gender: 'female')
# wilma's brother
michael = Character.create!(species: human, first_name: 'Jerry', last_name: 'Slaghoople', gender: 'male')

## McBricker family
brick = Character.create!(species: human, first_name: 'Brick', last_name: 'McBricker', gender: 'male')
jean = Character.create!(species: human, first_name: 'Jean', last_name: 'McBricker', gender: 'female')

# betty's bother (child of brick & jean)
# HS Basketball player
brad = Character.create!(species: human, first_name: 'Brad', last_name: 'McBricker', gender: 'male')


## Slate family
# flo's brother (lives in granite town)
# manager of 'Bedrock & Gravel Quarry Company'
mr_slate = Character.create!(species: human, first_name: 'George', nick_name: 'Mr.', last_name: 'Slate', gender: 'male')
# married to mr. slate
mrs_slate = Character.create!(species: human, first_name: 'Mrs.', last_name: 'Slate', gender: 'female')

# child of mr. slate & mrs. slate
eugene = Character.create!(species: human, first_name: 'Eugene', last_name: 'Slate', gender: 'male')
# child of mr. slate & mrs. slate
bessie = Character.create!(species: human, first_name: 'Bessie', last_name: 'Slate', gender: 'female')
# bessie's child (son)
eddie = Character.create!(species: human, first_name: 'Edward', nick_name: 'Eddie', last_name: 'Slate', gender: 'male')

## Rubble family
# married to flo
# used car salesman
bob = Character.create!(species: human, first_name: 'Robert', nick_name: 'Bob', last_name: 'Rubble', gender: 'male')
# married to bob (homemaker)
flo = Character.create!(species: human, first_name: 'Florence', nick_name: 'Flo', last_name: 'Rubble', given_name: 'Slate', gender: 'female')

# barney's brother (younger)
dusty = Character.create!(species: human, first_name: 'Dusty', last_name: 'Rubble', gender: 'male')

# married to betty (child of bob & flo)
# police officer & crane operator at 'Slate Rock & Gravel Company'
barney = Character.create!(species: human, first_name: 'Bernard Matthew', nick_name: 'Barney', last_name: 'Rubble', gender: 'male')
# married to barney, child of brick & jean
# reporter & caterer & homemaker
betty = Character.create!(species: human, first_name: 'Elizabeth Jean', nick_name: 'Betty', last_name: 'Rubble', given_name: 'McBricker', gender: 'female')

# adopted son of barney & betty (married to pebbles)
# auto mechanic, then screenwriter
bamm = Character.create!(species: human, first_name: 'Bamm-Bamm', last_name: 'Rubble', gender: 'male')
# son of bamm-bamm & pebbles
chip = Character.create!(species: human, first_name: 'Charleston Frederick', nick_name: 'Chip', last_name: 'Rubble', gender: 'male')
# daughter of bamm-bamm & pebbles
roxy = Character.create!(species: human, first_name: 'Roxann Elisabeth', nick_name: 'Roxy', last_name: 'Rubble', gender: 'female')

## The Gruesomes – A creepy but friendly family, who move in next door to the Flintstones in later seasons.
# Uncle Ghastly – The uncle of Gobby from Creepella's side of the family, who is mostly shown as a large furry hand with claws emerging from a door, a well, or a wall. His shadow was also seen in their debut episode. He wasn't named until his second appearance, which is also the only time he is heard speaking, as he is heard laughing from a well.
ghastly = Character.create!(species: human, first_name: 'Ghastly', last_name: 'Gruesome', gender: 'male')
# Weirdly Gruesome – The patriarch of the Gruesome family, who works as a reality-show host.
# reality host
weirdly = Character.create!(species: human, first_name: 'Weirdly', last_name: 'Gruesome', gender: 'male')
# Creepella Gruesome – Weirdly's tall wife.
creepella = Character.create!(species: human, first_name: 'Creepella', last_name: 'Gruesome', gender: 'female')
# Goblin "Gobby" Gruesome – Weirdly and Creepella's son.
gobby = Character.create!(species: human, first_name: 'Goblin', nick_name: 'Gobby', last_name: 'Gruesome', gender: 'male')


## The Hatrocks
# Granny Hatrock – The mother of Jethro and grandmother of Zack and Slab.
granny = Character.create!(species: human, first_name: 'Granny', last_name: 'Hatrock', gender: 'female')
# Jethro Hatrock – The patriarch of the Hatrock Family. He had brown hair in "The Hatrocks and the Flintstones" and taupe-gray hair in "The Hatrocks and the Gruesomes".
jethro = Character.create!(species: human, first_name: 'Jethro', last_name: 'Hatrock', gender: 'male')
# Gravella Hatrock – Jethro's wife.
gravella = Character.create!(species: human, first_name: 'Gravella', last_name: 'Hatrock', gender: 'female')
# Zack Hatrock – Jethro and Gravella's oldest son.
zack = Character.create!(species: human, first_name: 'Zack', last_name: 'Hatrock', gender: 'male')
# Slab Hatrock – The youngest son of Jethro and Gravella.
slab = Character.create!(species: human, first_name: 'Slab', last_name: 'Hatrock', gender: 'male')
# Benji Hatrock – Jethro's son-in-law.
benji = Character.create!(species: human, first_name: 'Benji', last_name: 'Hatrock', gender: 'male')

## others
# Friend to Barney & Fred (fire chief)
joe = Character.create!(species: human, first_name: 'Joseph', nick_name: 'Joe', last_name: 'Rockhead', gender: 'male')

# paperboy (town: bedrock)
arnold = Character.create!(species: human, first_name: 'Arnold', last_name: 'Granite', gender: 'male')

stoney = Character.create!(species: human, first_name: 'Stoney', last_name: 'Curtis', gender: 'male')
perry = Character.create!(species: human, first_name: 'Perry', last_name: 'Masonry', gender: 'male')

# Sam Slagheap – The Grand Poobah of the Water Buffalo Lodge.
sam = Character.create!(species: human, first_name: 'Samuel', nick_name: 'Sam', last_name: 'Slagheap', gender: 'male')

## Alien
########
# planet = Zetox
gazoo = Character.create!(species: alien, first_name: 'The Great', last_name: 'Gazoo', gender: 'male')
# gazoo = Character.create!(species: alien, first_name: 'The Great', last_name: 'Gazoo', gender: 'male', planet: zetox)

## PETS
#######
dino = Character.create!(species: dino, first_name: 'Dino', last_name: 'Flintstone', gender: 'male')
pussy = Character.create!(species: tiger, first_name: 'Baby Pussy', last_name: 'Flintstone', gender: 'female')
hoppy = Character.create!(species: kanga, first_name: 'Hoppy', last_name: 'Rubble', gender: 'male')

## Companies
############
san_cemente = Company.create!(company_name: 'San Cemente')
bedrock_news = Company.create!(company_name: 'Bedrock Daily News')
bedrock_police = Company.create!(company_name: 'Bedrock Police Department')
bedrock_fire = Company.create!(company_name: 'Bedrock Fire Department')
bedrock_quarry = Company.create!(company_name: 'Bedrock & Gravel Quarry Company')
betty_wilma_catering = Company.create!(company_name: 'Betty & Wilma Catering')
texrock_ranch = Company.create!(company_name: 'Texrock Ranch')
teradactyl = Company.create!(company_name: 'Teradactyl Flights')
auto_repair = Company.create!(company_name: 'Bedrock Auto Repair')
used_cars = Company.create!(company_name: 'Bedrock Used Cars')
bedrock_entetainment = Company.create!(company_name: 'Bedrock Entertainment')
bedrock_army = Company.create!(company_name: 'Bedrock Army')
independent = Company.create!(company_name: 'Independent')
advertising = Company.create!(company_name: 'Bedrock Advertising')
buffalo_lodge = Company.create!(company_name: 'Water Buffalo Lodge')

## Jobs
#######
## San Cemente Owner
cemente = Job.create!(role: 'owner', company: san_cemente)
# agriculture
farmer = Job.create!(role: 'farmer', company: independent)
# pilot
pilot = Job.create!(role: 'pilot', company: teradactyl)
# soldier
soldier = Job.create!(role: 'soldier', company: bedrock_army)
# wealthy
wealth = Job.create!(role: 'independently wealthy', company: independent)
# reporter
traffic = Job.create!(role: 'traffice reporter', company: bedrock_news)
reporter = Job.create!(role: 'news reporter', company: bedrock_news)
# homemaker
homemaker = Job.create!(role: 'homemaker', company: independent)
# mining company manager
manager = Job.create!(role: 'manager', company: bedrock_quarry)
# crane operator
crane = Job.create!(role: 'crane operator', company: bedrock_quarry)
# advertising executive
advertising = Job.create!(role: 'advertising executive', company: advertising)
# caterer
caterer = Job.create!(role: 'caterer', company: betty_wilma_catering)
# auto mechanic
mechanic = Job.create!(role: 'auto mechanic', company: auto_repair)
# screenwriter
screenwriter = Job.create!(role: 'screenwriter', company: bedrock_entetainment)
# police officer
police = Job.create!(role: 'police officer', company: bedrock_police)
# rancher
rancher = Job.create!(role: 'rancher', company: texrock_ranch)
# used car salesman
salesman = Job.create!(role: 'used car salesman', company: used_cars)
# reality show host
host = Job.create!(role: 'reality show host', company: bedrock_entetainment)
# fire chief
fire_chief = Job.create!(role: 'fire chief', company: bedrock_fire)
# paperboy
paper_delivery = Job.create!(role: 'paperboy', company: bedrock_news)
# Grand Poobah
grand_poobah = Job.create!(role: 'The Grand Poobah', company: buffalo_lodge)

## PersonJobs
##############
# zeke - San Cemente Owner
PersonJob.create!(character: zeke, job: cemente, start_date: Date.new(1980, 1, 1))
# jed - farmer
PersonJob.create!(character: jed, job: farmer, start_date: Date.new(1980, 1, 1))
# rocky - ww1 soldier
PersonJob.create!(character: rocky, job: soldier, start_date: Date.new(1980, 1, 1), end_date: Date.new(1985, 12, 31))
# rocy - pilot after war
PersonJob.create!(character: rocky, job: pilot, start_date: Date.new(1986, 1, 1))

# giggles rich uncle
PersonJob.create!(character: giggles, job: wealth, start_date: Date.new(1980, 1, 1))

# pops - freeway traffic reporter
PersonJob.create!(character: pops, job: traffic, start_date: Date.new(1980, 1, 1))
# edna - homemaker
PersonJob.create!(character: edna, job: homemaker, start_date: Date.new(1980, 1, 1))

# fred - crane operator
PersonJob.create!(character: fred, job: crane, start_date: Date.new(1980, 1, 1))
# married to fred
# wilma - reporter & caterer & homemaker
PersonJob.create!(character: wilma, job: reporter, start_date: Date.new(1980, 1, 1), end_date: Date.new(1989, 12, 31))
PersonJob.create!(character: wilma, job: caterer, start_date: Date.new(1990, 1, 1))
PersonJob.create!(character: wilma, job: homemaker, start_date: Date.new(1980, 1, 1))

# pebbles - advertising executive
PersonJob.create!(character: pebbles, job: advertising, start_date: Date.new(1995, 1, 1))

# texrock rangers & rancher (town: texrock)
PersonJob.create!(character: tex, job: rancher, start_date: Date.new(2080, 1, 1))

# mr_slate - manager
PersonJob.create!(character: mr_slate, job: manager, start_date: Date.new(1980, 1, 1))


## Rubble family
# bob - used car salesman
PersonJob.create!(character: bob, job: salesman, start_date: Date.new(1980, 1, 1))
# flo - (homemaker)
PersonJob.create!(character: flo, job: homemaker, start_date: Date.new(1980, 1, 1))

# police officer & crane operator at 'Slate Rock & Gravel Company'
PersonJob.create!(character: barney, job: police, start_date: Date.new(1980, 1, 1), end_date: Date.new(1989, 12, 31))
PersonJob.create!(character: barney, job: crane, start_date: Date.new(1990, 1, 1))

# betty - reporter & caterer & homemaker
PersonJob.create!(character: betty, job: reporter, start_date: Date.new(1980, 1, 1), end_date: Date.new(1989, 12, 31))
PersonJob.create!(character: betty, job: caterer, start_date: Date.new(1990, 1, 1))
PersonJob.create!(character: betty, job: homemaker, start_date: Date.new(1980, 1, 1))

# bamm-bamm - auto mechanic, then screenwriter
PersonJob.create!(character: bamm, job: mechanic, start_date: Date.new(1995, 1, 1), end_date: Date.new(1999, 12, 31))
PersonJob.create!(character: bamm, job: screenwriter, start_date: Date.new(2000, 1, 1))


## The Gruesomes
# weirdly - reality host
PersonJob.create!(character: weirdly, job: host, start_date: Date.new(1990, 1, 1))

## others
# joe - fire chief)
PersonJob.create!(character: joe, job: fire_chief, start_date: Date.new(1980, 1, 1))

# paperboy (town: bedrock)
PersonJob.create!(character: arnold, job: paper_delivery, start_date: Date.new(1980, 1, 1))

# Sam Slagheap – The Grand Poobah of the Water Buffalo Lodge.
PersonJob.create!(character: sam, job: grand_poobah, start_date: Date.new(1985, 1, 1))
