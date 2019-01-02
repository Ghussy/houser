DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
id serial PRIMARY KEY,
address text,
city text,
state text,
zip integer NOT NULL,
mortgage INTEGER NOT NULL,
Rent integer NOT NULL,
property text 
);

insert into listings(address, city, state, zip, mortgage, rent, property, img_url)
values('2228 centennial blvd', 'saratoga springs', 'utah', 84045, 1000, 340000, 400000, 'https://maps.googleapis.com/maps/api/streetview?channel=ldp-publicrecord&location=2228+Centennial+Blvd%2C+Saratoga+Springs%2C+UT+84045&size=665x441&client=gme-redfin&signature=9v2MNR7ENvP0DPzMIug_pqrPSYU=');

insert into listings(address, city, state, zip, mortgage, rent, property, img_url)
values('3994 piper drive', 'saratoga springs', 'utah', 84045, 1000, 340000, 400000, 'https://cdn-images-1.medium.com/max/1600/0*_HCBex_AXfnGhQ-8.jpg')