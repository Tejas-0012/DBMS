from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="tejas8618181586",
    database="instagram"
)

cursor = db.cursor(dictionary=True)  # Enables JSON output

# ✅ API: Fetch all users
@app.route("/api/users", methods=["GET"])
def get_users():
    cursor.execute("SELECT * FROM Users")
    users = cursor.fetchall()
    return jsonify(users)

@app.route("/api/posts", methods=["GET"])
def get_post():
    cursor.execute("SELECT * FROM Posts ")
    post = cursor.fetchall()
    return jsonify(post)


# ✅ API: Fetch posts for a specific user
@app.route("/api/posts/<username>", methods=["GET"])
def get_posts(username):
    cursor.execute("SELECT * FROM Posts WHERE user_id = (SELECT user_id FROM User WHERE username = %s)", (username,))
    posts = cursor.fetchall()
    return jsonify(posts)

@app.route("/api/search/users/<query>", methods=["GET"])
def search_users(query):
    cursor.execute("SELECT * FROM Users WHERE username LIKE %s", (f"%{query}%",))
    users = cursor.fetchall()
    return jsonify(users)
@app.route("/api/search/posts/<query>", methods=["GET"])
def search_posts(query):
    cursor.execute("SELECT * FROM Posts WHERE caption LIKE %s", (f"%{query}%",))
    posts = cursor.fetchall()
    return jsonify(posts)

@app.route("/api/filter/users/<query>/<role>")
def filter_users(query, role):
    query = query.lower()
    role = role.lower()

    if role == "all":
        cursor.execute("SELECT * FROM Users")
    else:
        cursor.execute("SELECT * FROM Users WHERE LOWER(role) = %s AND LOWER(username) LIKE %s", (role, f"%{query}%",))
    
    users = cursor.fetchall()
    return jsonify(users)

# ✅ Run Flask app
if __name__ == "__main__":
    app.run(port=5000)
# if __name__ == "__main__":
#     app.run(debug=True)
