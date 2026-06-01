import mongoose from "mongoose";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const uri =  "mongodb+srv://jaikishannayak_db_user:Do8VxAjlkvBVZZR5@cluster0.htpaetz.mongodb.net/snitch"

mongoose.connect(uri)
  .then(() => console.log("Connected!"))
  .catch(err => console.error("Error:", err.message));