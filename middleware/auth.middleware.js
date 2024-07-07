
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'


export const IsAuth = async (req, res, next) => {
  let token;
  let authorization = req.headers.authorization;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "myname is algohary");
      const user = await User.findById(decoded.nameId).select("-password");
      console.log({user, decoded});
      if (user) {
        req.user = user;
        next();
      } else return res.status(401).json({ msg: "unauthorization" });
    } catch (error) {
      console.log({ error: error.message });
      res.status(401).json({ msg: "unauthorization" });}
  }

  if (!token) {
    return res.status(401).json({ msg: "unauthorization" });
  }
};