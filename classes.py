from typing import Self
import numpy as np
import sqlite3
#Defining types of users
class user:
    def __init__(user, iD, name, region, phone, email, address, products):
        Self.iD = iD
        Self.name = name
        Self.region = region
        Self.phone = phone
        Self.email = email
        Self.address = address
        Self.products = products
class farmer(user):
    pass
class business(user):
    pass
class distributor(user):
    def __init__(distrange):
        Self.distrange = distrange
#Product def
class product:
    def __init__(product, name, category, description, price):
        Self.name = name
        Self.category = category
        Self.description = description
        Self.price = price
#Database creation
def dbconnections():
    sqlconnec = sqlite3.connect('mgdb')
    print("Connected to database")
    usercursor = sqlconnec.cursor()
    return sqlconnec
def closeconnection(sqlconnec):
    sqlconnec.close()
sqlconnec = dbconnections()








