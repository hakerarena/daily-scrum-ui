import dotenv from "dotenv";
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Load .env file
const envPath = resolve("./.env"); // Adjust the path if needed
const envConfig = dotenv.parse(readFileSync(envPath));

// Convert .env content to JSON
const envJsonPath = resolve("src/environments/environment-qa.json");
writeFileSync(envJsonPath, JSON.stringify(envConfig, null, 2));

console.log("✅ Environment variables saved to env.json:", envJsonPath);
