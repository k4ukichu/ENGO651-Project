# ENGO651-Project

The goal of the project is to create an app that can assist in recommending the best path to desired destinations in Calgary. The information on traffic volume and traffic incidents is available to users. All map-related features, such as route design and real-time traffic data maps, will be available only after the user login. The app also makes use of real-time data from IoT devices (GPS location data of the user to show it on the map). Users can share their perspectives and stories on the map interface with other users.

# Libraries 
-	Flask
-	Flask-Session
-	Sqlite3


> You can find all of these libraries in the [requirements.txt](https://github.com/k4ukichu/ENGO651-Project/blob/main/requirements.txt).


# Tools and Resources 
-	HTML 
-	CSS
-	Python flask
-	JavaScript
-	Bootstrap
-	Leaflet
-	Mapbox
-	Open Calgary API dataset

# Getting Started
1. Set up a virtual environment and active it.
```sh
$ python3 -m venv venv
$ source venv/bin/activate
```
2. Install requeriments
```sh
$ pip install -r requirements.txt
```
3. Run the server
```sh
$ python main.py
```
4. Go to the server
```sh
$ server link: http://127.0.0.1:5000/
```
**Now you have a access to the website**


# Webpage
1. Home page ([home.html](https://github.com/k4ukichu/ENGO651-Project/blob/main/Project/website/templates/home.html)):

    Where you can go to the sing in page or sign up page
    
    <img width="575" alt="image" src="https://user-images.githubusercontent.com/53395337/166068299-e0f93978-9f71-49ec-a01d-a696b47b4f4b.png">
    
2. SignIn/Sign Up page ([login.html](https://github.com/k4ukichu/ENGO651-Project/blob/main/Project/website/templates/login.html))
    
    Users can create a account or sign in to their accounts 
    
    <img width="575" alt="image" src="https://user-images.githubusercontent.com/53395337/166084342-da2311dc-f48a-4f7d-b7ad-f7b3846145f4.png">
    <img width="575" alt="image" src="https://user-images.githubusercontent.com/53395337/166084355-f419da51-1cb2-4c8d-a5af-316fa25312aa.png">
    
 3. After login, you can have access to map page, where you can works with some features:
 
    -   Find your location by using your device as a IOT device:

        <img width="575" alt="image" src="https://user-images.githubusercontent.com/53395337/166084772-a9bb6cc0-9c44-4a33-beb3-cda7a84556a4.png">
        
    -   Check the real time traffic of your neighbourhood also can have access to google Street views and satellite images:
    
        <img width="575" alt="image" src="https://user-images.githubusercontent.com/53395337/166084848-5ca42e1e-49e8-4231-b253-bf5a2ad093aa.png">
        <img width="575" alt="Screen Shot 2022-04-29 at 21 16 06" src="https://user-images.githubusercontent.com/53395337/166084917-85144712-1da9-4514-b0a4-7eb52b7a85bd.png">
        <img width="575" alt="Screen Shot 2022-04-29 at 21 16 20" src="https://user-images.githubusercontent.com/53395337/166084933-772d30fc-6073-4b87-b639-7890f55e7431.png">


        
    

    

    
    
    
    
    
    
    
    
    

