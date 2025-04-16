
from extensions import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(20), nullable=False)  # 'student' or 'campus'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    student = db.relationship('Student', backref='user', uselist=False, cascade="all, delete-orphan")
    campus = db.relationship('Campus', backref='user', uselist=False, cascade="all, delete-orphan")

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    bio = db.Column(db.Text)
    university = db.Column(db.String(100))
    field_of_study = db.Column(db.String(100))
    graduation_year = db.Column(db.Integer)
    profile_image = db.Column(db.String(200))
    
    # Resume data stored as JSON or separate tables
    skills = db.Column(db.Text)  # JSON string of skills
    
    def __repr__(self):
        return f'<Student {self.first_name} {self.last_name}>'

class Campus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    location = db.Column(db.String(200))
    website = db.Column(db.String(200))
    founded_year = db.Column(db.Integer)
    profile_image = db.Column(db.String(200))
    
    # Relationships
    events = db.relationship('Event', backref='campus', lazy=True, cascade="all, delete-orphan")
    
    def __repr__(self):
        return f'<Campus {self.name}>'

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    campus_id = db.Column(db.Integer, db.ForeignKey('campus.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    event_type = db.Column(db.String(50))  # Workshop, Conference, etc.
    date = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(200))
    image = db.Column(db.String(200))
    status = db.Column(db.String(20), default='upcoming')  # upcoming, active, completed
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __repr__(self):
        return f'<Event {self.title}>'

# Could add more models as needed:
# - EventRegistration (for students registering to events)
# - Messages (for communication between students and campuses)
# - Resumes (for student resume data)
