#!/bin/bash

# Build the Next.js project
npm run build

# Create a .nojekyll file to bypass Jekyll processing
touch out/.nojekyll

# If you're deploying to a custom domain, uncomment and update the following line
# echo "yourdomain.com" > out/CNAME

echo "Build completed. The static files are in the 'out' directory."
echo "You can now deploy these files to GitHub Pages."
