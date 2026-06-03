import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const generateToken = async (userId) => {
  try {
    const token = await jwt.sign({userId}, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })
    // console.log(token);
    
    return token;
  } catch (error) {
    throw new Error("Error generating token");
  }
}

export default generateToken;