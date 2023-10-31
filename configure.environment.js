const fs = require('fs');
const path = require('path');

// Define the environment variable names you want to update
const envVarNames = ['BUILDER_API_KEY'];

// Path to the environment.prod.ts file
const filePath = path.join(__dirname, './src/environments/environment.prod.ts');

// Read the existing content from the file
let content = fs.readFileSync(filePath, 'utf8');

// Update the key-value pairs from environment variables
envVarNames.forEach((envVarName) => {
  const envVarValue = process.env[envVarName];
  if (envVarValue !== undefined) {
    const regex = new RegExp(`(${envVarName}\\s*:\\s*['"])\\w*(['"])`);
    content = content.replace(regex, `$1${envVarValue}$2`);
  }
});

// Write the updated content back to the file
fs.writeFileSync(filePath, content);

console.log('Updated environment.prod.ts with environment variables.');
