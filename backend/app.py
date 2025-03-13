from flask import Flask
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from config import SECRET_KEY, JWT_SECRET_KEY
from routes import register_routes
from models import create_table

# Initialize Flask app
app = Flask(__name__)
app.config["SECRET_KEY"] = SECRET_KEY
app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY

# Initialize extensions
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

# Create database table if not exists
create_table()

# Register routes
register_routes(app)

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
