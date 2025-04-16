
from flask import Flask, render_template, request, redirect, url_for, flash, session
from extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
import os
from datetime import datetime

# Initialize Flask app
app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///campus_connect.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db.init_app(app)


# Import models after db initialization to avoid circular imports
from models import User, Student, Campus, Event

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        role = request.form.get('role')
        
        user = User.query.filter_by(email=email).first()
        
        if user and check_password_hash(user.password, password) and user.role == role:
            session['user_id'] = user.id
            session['role'] = user.role
            
            if role == 'student':
                return redirect(url_for('student_dashboard'))
            else:
                return redirect(url_for('campus_dashboard'))
        else:
            flash('Invalid credentials or role. Please try again.')
    
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        confirm_password = request.form.get('confirmPassword')
        role = request.form.get('role')
        
        # Validate passwords match
        if password != confirm_password:
            flash('Passwords do not match.')
            return redirect(url_for('signup'))
        
        # Check if email already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash('Email already registered.')
            return redirect(url_for('signup'))
        
        # Create new user
        new_user = User(email=email, password=generate_password_hash(password), role=role)
        db.session.add(new_user)
        db.session.commit()
        
        flash('Account created successfully! Please login.')
        return redirect(url_for('login'))
    
    return render_template('signup.html')

@app.route('/student-dashboard')
def student_dashboard():
    if 'user_id' not in session or session['role'] != 'student':
        flash('Please login as a student to access the dashboard.')
        return redirect(url_for('login'))
    
    # Mock data for now - would come from database in production
    events = [
        {
            'id': 1, 
            'title': 'Tech Innovation 1', 
            'type': 'Workshop', 
            'date': 'May 11, 2025',
            'campus': 'State University 1',
            'description': 'Join us for an exciting day of innovation, creativity, and networking opportunities.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=1'
        },
        {
            'id': 2, 
            'title': 'Tech Innovation 2', 
            'type': 'Conference', 
            'date': 'May 12, 2025',
            'campus': 'State University 2',
            'description': 'Join us for an exciting day of innovation, creativity, and networking opportunities.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=2'
        },
        {
            'id': 3, 
            'title': 'Tech Innovation 3', 
            'type': 'Hackathon', 
            'date': 'May 13, 2025',
            'campus': 'State University 3',
            'description': 'Join us for an exciting day of innovation, creativity, and networking opportunities.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=3'
        }
    ]
    
    campuses = [
        {
            'id': 1,
            'name': 'University 1',
            'focus': 'Engineering & Technology',
            'image': 'https://source.unsplash.com/random/400x225?university&sig=1'
        },
        {
            'id': 2,
            'name': 'University 2',
            'focus': 'Arts & Sciences',
            'image': 'https://source.unsplash.com/random/400x225?university&sig=2'
        },
        {
            'id': 3,
            'name': 'University 3',
            'focus': 'Business School',
            'image': 'https://source.unsplash.com/random/400x225?university&sig=3'
        },
        {
            'id': 4,
            'name': 'University 4',
            'focus': 'Medical College',
            'image': 'https://source.unsplash.com/random/400x225?university&sig=4'
        }
    ]
    
    return render_template('student_dashboard.html', events=events, campuses=campuses)

@app.route('/student-dashboard/profile')
def student_profile():
    if 'user_id' not in session or session['role'] != 'student':
        flash('Please login as a student to access the profile.')
        return redirect(url_for('login'))
    
    # In a real application, we would fetch the student's profile from the database
    return render_template('student_profile.html')

@app.route('/student-dashboard/resume')
def resume_builder():
    if 'user_id' not in session or session['role'] != 'student':
        flash('Please login as a student to access the resume builder.')
        return redirect(url_for('login'))
    
    return render_template('resume_builder.html')

@app.route('/campus-dashboard')
def campus_dashboard():
    if 'user_id' not in session or session['role'] != 'campus':
        flash('Please login as a campus representative to access the dashboard.')
        return redirect(url_for('login'))
    
    # Mock data for events - would come from database in production
    events = [
        {
            'id': 1, 
            'title': 'Annual Technology Summit', 
            'status': 'Active', 
            'date': 'May 11, 2025',
            'description': 'Join us for the latest trends in technology with speakers from leading tech companies.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=11'
        },
        {
            'id': 2, 
            'title': 'Career Fair 2025', 
            'status': 'Upcoming', 
            'date': 'May 14, 2025',
            'description': 'Meet recruiters from over 50 companies hiring for various roles.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=12'
        },
        {
            'id': 3, 
            'title': 'Research Symposium', 
            'status': 'Completed', 
            'date': 'May 17, 2025',
            'description': 'Presenting the latest research findings from our graduate students.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=13'
        },
        {
            'id': 4, 
            'title': 'Cultural Festival', 
            'status': 'Active', 
            'date': 'May 19, 2025',
            'description': 'Celebrate diversity through performances, food, and exhibitions.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=14'
        },
        {
            'id': 5, 
            'title': 'Orientation Day', 
            'status': 'Upcoming', 
            'date': 'May 21, 2025',
            'description': 'Welcome session for new students joining our campus.',
            'image': 'https://source.unsplash.com/random/400x225?event&sig=15'
        }
    ]
    
    return render_template('campus_dashboard.html', events=events)

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    session.pop('role', None)
    return redirect(url_for('index'))

@app.errorhandler(404)
def not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create database tables
    app.run(debug=True)
