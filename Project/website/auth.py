
from flask import Blueprint, redirect, render_template, request, flash,url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user


auth= Blueprint('auth',__name__)


@auth.route('/')
def home():
    # return redirect(url_for('home.html'))
    return render_template('home.html')

@auth.route('/dash')
def dash():
    return render_template("dashboard.html",user=current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method=='POST':
        email=request.form.get('email')
        password=request.form.get('password')

        user=User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in Successfully', category='success')
                login_user(user, remember=True)
                return redirect(url_for('views.index'))
            else:
                flash('Something is not right.... Try again', category='error')
        else:
            flash('Email does not exist', category='error')
    else:
        return render_template("login.html",user=current_user)

@auth.route('/signup', methods=['GET','POST'])
def signup():
    if request.method=='POST':
        name=request.form.get('name')
        email=request.form.get('email')
        password=request.form.get('password')
        password1=request.form.get('password1')
        user=User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists',category='error')
        elif len(email)<4:
            flash('Email must be grater than 4 characters', category='error')
        elif password != password1:
            flash('Passwords don\'t match', category='error')
        else:
            new_user=User(name=name,email=email,password=generate_password_hash(password, method='sha256'))
            db.session.add(new_user)
            db.session.commit() 
            flash('Account Created', category='success')
            
    return render_template("login.html", user=current_user)

