@echo off
echo Installing dependencies for Shankeshwar Project...
npm install
echo Dependencies installed successfully!
echo.
echo Setting up image directories...
npm run setup-images
echo.
echo Starting development server...
npm run dev 