import sqlite3
import hashlib
#Database creation
def dbconnections():
    sqlconnec = sqlite3.connect('trade.db')
    print("Connected to database")
    usercursor = sqlconnec.cursor()
    return sqlconnec
def closeconnection(sqlconnec):
    sqlconnec.close()
# hash the password
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()
# check if password is correct
def check_password(user_type, user_id, password):
    conn = dbconnections()
    cursor = conn.cursor()
    # get the hashed password from the hashtable table
    cursor.execute('''
        SELECT hash_value
        FROM hashtable
        WHERE user_id = ?
    ''', (user_id,))
    result = cursor.fetchone()
    if result is None:
        return False
    stored_hashed_password = result[0]
    # hash the entered password
    entered_hashed_password = hash_password(password)
    # compare the entered hashed password with the stored hashed password
    return entered_hashed_password == stored_hashed_password
def insert_user(user_type, password, name, latitude, longitude, phone, email, address, drange):
    conn = dbconnections()
    cursor = conn.cursor()
     # hash the password
    hashed_password = hash_password(password)
    # store the hashed password and user_id in the hashtable table
    cursor.execute('''
        INSERT INTO hash (user_id, hash_value)
        VALUES (?, ?)
    ''', (user_id, hashed_password))
    conn.commit()
    if user_type == "farmer":
        cursor.execute("INSERT INTO farmer (farmer_name, farmer_latitude, farmer_longitude, farmer_phone, farmer_email, farmer_address) VALUES (%s, %s, %s, %s, %s, %s)", (name, latitude, longitude, phone, email, address))
        user_id = cursor.fetchone()[0]
        conn.commit()
        closeconnection(conn)
        return user_id
    elif user_type == "business":
        cursor.execute("INSERT INTO business (business_name, business_latitude, business_longitude, business_phone, business_email, business_address) VALUES (%s, %s, %s, %s, %s, %s)", (name, latitude, longitude, phone, email, address))
        user_id = cursor.fetchone()[0]
        conn.commit()
        closeconnection(conn)
        return user_id
    elif user_type == "distributor":
        cursor.execute("INSERT INTO distributor (distributor_name, distributor_latitude, distributor_longitude, distributor_phone, distributor_email, distributor_address, max_range) VALUES (%s, %s, %s, %s, %s, %s, %s)", (name, latitude, longitude, phone, email, address, drange))
        user_id = cursor.fetchone()[0]
        conn.commit(conn)
        closeconnection()
        return user_id
    else:
        return None
def insert_product(user_type, user_id, product, category, amount, price):
    conn = dbconnections()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO product (product_name, product_category) VALUES (%s, %s) RETURNING id", (product, category))
    product_id = cursor.fetchone()[0]
    if user_type == "farmer":
        cursor.execute("INSERT INTO farmer_product (farmer_id, product_id, product_available, sell_price) VALUES (%s, %s, %s, %s)", (user_id, product_id, amount, price))
    elif user_type == "business":
        cursor.execute("INSERT INTO business_product (business_id, product_id, product_required, buy_price) VALUES (%s, %s, %s, %s)", (user_id, product_id, amount, price))
    elif user_type == "distributor":
        cursor.execute("INSERT INTO distributor_product (distributor_id, product_id, product_required, buy_price) VALUES (%s, %s, %s, %s)", (user_id, product_id, amount, price))
    conn.commit()