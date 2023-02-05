import sqlite3
import hashlib
conn = sqlite3.connect('trade.db')
cursor = conn.cursor()
# create farmer table
cursor.execute('''
CREATE TABLE IF NOT EXISTS farmer (
    farmer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmer_name TEXT NOT NULL,
    farmer_latitude, INTEGER NOT NULL,
    farmer_longitude INTEGER NOT NULL,
    farmer_phone VARCHAR() NOT NULL,
    farmer_email VARCHAR() NOT NULL,
    farmer_address VARCHAR() NOT NULL,
    hash_id INTEGER NOT NULL,
    FOREIGN KEY (hash_id) REFERENCES hash(hash_id) ON UPDATE CASCADE ON DELETE CASCADE
)
''')
# create business table
#cursor.execute('''
# CREATE TABLE IF NOT EXISTS business (
#     business_id INTEGER PRIMARY KEY AUTOINCREMENT,
#     business_name TEXT NOT NULL,
#     business_latitude, INTEGER NOT NULL,
#     business_longitude INTEGER NOT NULL,
#     business_phone VARCHAR() NOT NULL,
#     business_email VARCHAR() NOT NULL,
#     business_address VARCHAR() NOT NULL,
#     hash_id INTEGER NOT NULL,
#     FOREIGN KEY (hash_id) REFERENCES hash(hash_id) ON UPDATE CASCADE ON DELETE CASCADE
# )
# ''')
# create distributor table
cursor.execute('''
CREATE TABLE IF NOT EXISTS distributor (
    distributor_id INTEGER PRIMARY KEY AUTOINCREMENT,
    distributor_name TEXT NOT NULL,
    distributor_latitude, INTEGER NOT NULL,
    distributor_longitude INTEGER NOT NULL,
    distributor_phone VARCHAR() NOT NULL,
    distributor_email VARCHAR() NOT NULL,
    distributor_address VARCHAR() NOT NULL,
    max_range INTEGER NOT NULL,
    hash_id INTEGER NOT NULL,
    FOREIGN KEY (hash_id) REFERENCES hash(hash_id) ON UPDATE CASCADE ON DELETE CASCADE
)
''')
# create product table
cursor.execute('''
CREATE TABLE IF NOT EXISTS product (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    product_category TEXT NOT NULL
)
''')
# create farmer_product table for the relation between farmer and product
cursor.execute('''
CREATE TABLE IF NOT EXISTS farmer_product (
    farmer_product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    farmer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_available INTEGER NOT NULL,
    sell_price INTEGER NOT NULL,
    quantity_available INTEGER NOT NULL,
    FOREIGN KEY (farmer_id) REFERENCES farmer(farmer_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
)
''')
# create business_product table for the relation between business and product
# cursor.execute('''
# CREATE TABLE IF NOT EXISTS business_product (
#     business_product_id INTEGER PRIMARY KEY AUTOINCREMENT,
#     business_id INTEGER NOT NULL,
#     product_id INTEGER NOT NULL,
#     product_required INTEGER NOT NULL,
#     buy_price INTEGER NOT NULL,
#     quantity_required INTEGER NOT NULL,
#     FOREIGN KEY (business_id) REFERENCES business(business_id),
#     FOREIGN KEY (product_id) REFERENCES product(product_id)
# )
# ''')
# create distributor_product table for the relation between distributor and product
cursor.execute('''
CREATE TABLE IF NOT EXISTS distributor_product (
    distributor_product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    distributor_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_required INTEGER NOT NULL,
    buy_price INTEGER NOT NULL,
    FOREIGN KEY (distributor_id) REFERENCES distributor(distributor_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
)
''')
# create hashtable table
cursor.execute('''
CREATE TABLE IF NOT EXISTS hash (
    hash_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    hash_value TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES farmer(farmer_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES business(business_id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES distributor(distributor_id)
        ON UPDATE CASCADE ON DELETE CASCADE
)
''')
conn.commit()
conn.close()

