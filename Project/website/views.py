from flask import Blueprint, render_template, request
from flask_login import login_required,current_user

views =Blueprint('views',__name__)

@views.route('/map', methods=['GET', 'POST'])
@login_required
def home():
    data=""
    if request.method=="POST":
        res=request.get("https://data.calgary.ca/resource/35ra-9556.geojson")
        
        if result.status_code==200:
            data=result.json()
        else:
            data=""
       
    return render_template("map.html", user=current_user,  geojsonFeature=data)

