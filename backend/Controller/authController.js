import { user } from "../models/userModule.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import crypto from "crypto";
import nodemailer from "nodemailer";

const addUser = async (req, res) => {
  let { name, password } = req.body;
  let hash = await argon2.hash(password);

  await user.insertMany({ name: name, password: hash });

  res.send("user is saved");
};

const getUser = async (req, res) => {
  let allUser = await user.find();
  res.send(allUser);
};

const login = async (req, res) => {
  let { name, password } = req.body;
  const currhash = await argon2.hash(password);
  const dbUser = await user.findOne({ name });
  const isCorrectUser = await argon2.verify(dbUser.password, password);

  if (isCorrectUser) {
    const token = jwt.sign(
      {
        id: dbUser.id,
        name: dbUser.name,
      },
      process.env.PASSWORD,
      { expiresssIn: "7h" },
    );

    res.send({ AccessToken: token });
  } else {
    res.send("incorrect password!");
  }
};

const ForgotPassword = async (req, res) => {
  const email = req.body;
  const otp = crypto.randomInt(100000, 1000000);
};

export { addUser, getUser, login, ForgotPassword };
