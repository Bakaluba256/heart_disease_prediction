from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

# Create a new Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the pre-trained model
model = joblib.load('heart_disease_model.pkl')

@app.route('/')
def home():
    return "Welcome to the Heart Disease Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Extract features from the JSON data
    features = [
        int(data['age']),
        int(data['gender']),
        int(data['cholesterol']),
        int(data['blood_pressure']),
        int(data['chest_pain_type']),
        int(data['max_heart_rate']),
        int(data['exercise_angina'])
    ]

    # Create DataFrame with the correct feature names
    features_df = pd.DataFrame([features], columns=['age', 'sex', 'chol', 'trestbps', 'cp', 'thalach', 'exang'])

    # Make a prediction using the model
    prediction = model.predict(features_df)
    prediction_proba = model.predict_proba(features_df)

    likelihood = prediction_proba[0][1] * 100  # Probability of having heart disease

    return jsonify({'likelihood': likelihood, 'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
