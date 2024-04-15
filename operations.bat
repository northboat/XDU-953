@echo off
echo ================================
echo [The Opeartions of This Dir]:  
echo	1.dev
echo	2.build
echo	3.push

set /p n=enter the operation number: 

if "%n%"=="1"	npm run docs:dev
if "%n%"=="2"	npm run docs:build
if "%n%"=="3"	call :1

pause
goto :eof

:1
set /p commit=enter the commit for this push: 
git add .
git commit -m "%commit%"
git push