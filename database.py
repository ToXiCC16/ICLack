import sqlite3
conn = sqlite3.connect('trade.db')
cursor = conn.cursor()
# create farmer table
cursor.execute('''
CREATE TABLE IF NOT EXISTS farmer (
    farmer_id INTEGER PRIMARY KEY,
    farmer_name TEXT NOT NULL,
    farmer_location TEXT NOT NULL,
    farmer_phone VARCHAR() NOT NULL,
    farmer_email VARCHAR() NOT NULL,
    farmer_address VARCHAR() NOT NULL,
    farmer_products TEXT
)
''')
# create business table
cursor.execute('''
CREATE TABLE IF NOT EXISTS business (
    business_id INTEGER PRIMARY KEY,
    business_name TEXT NOT NULL,
    business_location TEXT NOT NULL,
    business_phone VARCHAR() NOT NULL,
    business_email VARCHAR() NOT NULL,
    business_address VARCHAR() NOT NULL,
    business_needs TEXT
)
''')
# create distributor table
cursor.execute('''
CREATE TABLE IF NOT EXISTS distributor (
    distributor_id INTEGER PRIMARY KEY,
    distributor_name TEXT NOT NULL,
    distributor_location TEXT NOT NULL,
    distributor_products TEXT,
    distributor_phone VARCHAR() NOT NULL,
    distributor_email VARCHAR() NOT NULL,
    distributor_address VARCHAR() NOT NULL,
    distributor_needs TEXT,
    max_range INTEGER NOT NULL
)
''')
# create product table
cursor.execute('''
CREATE TABLE IF NOT EXISTS product (
    product_id INTEGER PRIMARY KEY,
    product_name TEXT NOT NULL,
    product_category TEXT NOT NULL
)
''')
# create farmer_product table for the relation between farmer and product
cursor.execute('''
CREATE TABLE IF NOT EXISTS farmer_product (
    farmer_product_id INTEGER PRIMARY KEY,
    farmer_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_available INTEGER NOT NULL,
    sell_price INTEGER NOT NULL,
    FOREIGN KEY (farmer_id) REFERENCES farmer(farmer_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
)
''')
# create business_product table for the relation between business and product
cursor.execute('''
CREATE TABLE IF NOT EXISTS business_product (
    business_product_id INTEGER PRIMARY KEY,
    business_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_required INTEGER NOT NULL,
    buy_price INTEGER NOT NULL,
    FOREIGN KEY (business_id) REFERENCES business(business_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
)
''')
# create distributor_product table for the relation between distributor and product
cursor.execute('''
CREATE TABLE IF NOT EXISTS distributor_product (
    distributor_product_id INTEGER PRIMARY KEY,
    distributor_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    required INTEGER NOT NULL,
    buy_price INTEGER NOT NULL,
    FOREIGN KEY (distributor_id) REFERENCES distributor(distributor_id),
    FOREIGN KEY (product_id) REFERENCES product(product_id)
)
''')
conn.commit()
conn.close()

