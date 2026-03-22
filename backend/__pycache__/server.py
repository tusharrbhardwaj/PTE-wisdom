from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
import bcrypt
import jwt
import os
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS so your Vercel frontend can talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change this to your Vercel URL later for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Connection
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "pte_wisdom")
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# JWT Settings
JWT_SECRET = os.getenv("JWT_SECRET", "pte-wisdom-secret-2026")
ALGORITHM = "HS256"

# Models
class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Helper Functions
def hash_password(password: str):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(password: str, hashed: str):
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# Routes
@app.post("/register")
async def register(user: UserRegister):
    existing_user = await db.users.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user_dict = user.dict()
    user_dict["password"] = hash_password(user.password)
    await db.users.insert_one(user_dict)
    return {"message": "User created successfully"}

@app.post("/login")
async def login(user: UserLogin):
    db_user = await db.users.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = jwt.encode({"email": user.email}, JWT_SECRET, algorithm=ALGORITHM)
    return {"token": token, "username": db_user["username"]}

@app.get("/")
def home():
    return {"message": "PTE-Wisdom Backend is Running!"}