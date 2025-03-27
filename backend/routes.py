from flask import request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from db import get_db_connection
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def register_routes(app):
    bcrypt.init_app(app)  # Ensure bcrypt is initialized

    @app.route("/register", methods=["POST"])
    def register():
        data = request.json
        username = data["username"]
        email = data["email"]
        password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

        connection = get_db_connection()
        cursor = connection.cursor()

        try:
            cursor.execute("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)", (username, email, password))
            connection.commit()
            return jsonify({"message": "User registered successfully"}), 201
        except:
            return jsonify({"error": "User already exists"}), 400
        finally:
            connection.close()

    @app.route("/login", methods=["POST"])
    def login():
        data = request.json
        email = data["email"]
        password = data["password"]

        connection = get_db_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()  # ✅ Returns None if no user is found
        connection.close()

        if user and bcrypt.check_password_hash(user["password"], password):
            access_token = create_access_token(identity=user["id"])
            return jsonify({"token": access_token, "username": user["username"]}), 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401


    @app.route("/dashboard", methods=["GET"])
    @jwt_required()
    def dashboard():
        user_id = get_jwt_identity()
        return jsonify({"message": f"Welcome, user {user_id}!"})
