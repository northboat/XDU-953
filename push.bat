set /p commit=please enter the commit for this push: 

git add .
git commit -m "%commit%"
git push