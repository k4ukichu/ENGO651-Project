from flask import Blueprint, render_template
from flask_login import login_required,current_user
views =Blueprint('views',__name__)

@views.route('/map')
@login_required
def index():
    return render_template("map.html", user=current_user)