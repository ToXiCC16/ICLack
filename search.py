import sqlite3
import os 
from math import radians, cos, sin, asin, sqrt

conn = sqlite3.connect('trade.db')
cursor = conn.cursor

def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance in kilometers between two points 
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians 
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])

    # haversine formula 
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a)) 
    r = 6371 # Radius of earth in kilometers. Use 3956 for miles. Determines return value units.
    return c * r

def farmerSearch(product):
    #we need to find a way to store the max_range of the distributor making the search here
    max_range = 0
    #Needs to be reworked by frontend
    product = input("Please input the product you are looking for :>>")
    farmers = os.system('db.mutualgrain.find( { }, {"_id": 0, "product":product, "product_id":1})'); 
    #"SELECT * FROM farmer_product WHERE product_id = product"
    cursor.execute(farmers)
    results = cursor.fetchall
    #print is a filler, i dont know how the frontend displays it
    for row in results:
        #getting the farmers lat and long
        id = os.system('db.mutualgrain.find( { }, {"_id": 0, "farmer_id":1})'); 
        #"SELECT farmer_id FROM row"
        cursor.execute(id)
        id2 = cursor.fetch
        latitude = os.system('db.mutualgrain.find( { }, {"_id": 0, "farmer_latitude":1, "farmer_id":id2})');
        #"SELECT farmer_latitude FROM farmer WHERE farmer_id = id2"
        cursor.execute(latitude)
        lat = cursor.fetch
        longitude = os.system('db.mutualgrain.find( { }, {"_id": 0, "farmer_longitutde":1, "farmer_id":id2})');
        #"SELECT farmer_longitude FROM farmer WHERE farmer_id = id2"
        cursor.execute(longitude)
        long = cursor.fetch
        #the distributors lat and long and max range will be fed in directly by RISHABH
        #this could be done by just feeding in the distributors id then i can search the db
        lat2 = 0
        long2 = 0
        max_range = 0
        if haversine(lat, long, lat2, long2) < max_range:
            print (row)

def distributorSearch(product):
    product = input("Please input the product you are looking for :>>")
    distributors = os.system('db.mutualgrain.find( { }, {"_id": 0, "product_id":1, "product":product})');
    #"SELECT * FROM distributor_product WHERE product_id = product"
    cursor.execute(distributors)
    results = cursor.fetchall
    for row in results:
        #getting the distributors lat and long
        id = os.system('db.mutualgrain.find( { }, {"_id": 0, "distributor_id":1})'); 
        #"SELECT distributor_id FROM row"
        cursor.execute(id)
        id2 = cursor.fetch
        latitude = os.system('db.mutualgrain.find( { }, {"_id": 0, "distributor_latitude":1, "distributor_id":id2})');
        #"SELECT distributor_latitude FROM distributor WHERE distributor_id = id2"
        cursor.execute(latitude)
        lat = cursor.fetch
        longitude = os.system('db.mutualgrain.find( { }, {"_id": 0, "distributor_longitude":1, "distributor_id":id2})');
        #"SELECT distributor_longitude FROM distributor WHERE distributor_id = id2"
        cursor.execute(longitude)
        long = cursor.fetch
        range = os.system(max('db.mutualgrain.find( { }, {"_id": 0, "distributor":1, "distributor_id":id2})')); 
        #"SELECT max_range FROM distributor WHERE distributor_id = id2"
        cursor.execute(range)
        max_range = cursor.fetch
        #the farmers lat and long and max range will be fed in directly by RISHABH
        #this could be done by just feeding in the farmers id then i can search the db
        lat2 = 0
        long2 = 0
        if haversine(lat, long, lat2, long2) < max_range:
            print (row)

#not called the functions yet, do that when combined with frontend

conn.close()