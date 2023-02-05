import os 

#Project farmer column
def farmer():
    return os.system('db.mutualgrain.find( { }, {"_id": 0, "farmer":1})'); 

#Project distributor columns
def distributor():
    return os.system('db.mutualgrain.find( { }, {"_id": 0, "distributor":1})')

#Project product column 
def product():
    return os.system('db.mutualgrain.find( { }, {"_id": 0, "product":1})')

#Project farmer and product table 
def farmer_product():
    return os.system('db.mutualgrain.find( { }, {"_id": 0, "farmers":1, "product":1})')

#Project distributor and product table 
def distributor_product():
    return os.system('db.mutualgrain.find( { }, {"_id": 0, "distributor":1, "product":1})')
