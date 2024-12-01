# Heart Disease Prediction Web Application

## **Overview**

This project is a web application that predicts the likelihood of heart disease based on user-inputted health indicators and symptoms. The application uses a pre-trained machine learning model served via a Flask API and built with a React frontend styled using Tailwind CSS.

## **Objective**

To build a web application that allows users to input their symptoms and health indicators to predict the likelihood of having heart disease using a machine learning model.

## **Data & Model**

From the dataset 7 parameters were selected:

- **Age**
- **Sex**
- **Blood Pressure (trestbps)**
- **Cholesterol Levels (chol)**
- **Chest Pain Type (cp)**
- **Maximum Heart Rate Achieved (thalach)**
- **Exercise Angina (exang)**

### **Feature Selection**

In building the heart disease prediction model, careful consideration was given to the selection of features from the dataset. The following parameters were chosen for training the model:

- **Age**: A significant risk factor for heart disease, as the likelihood increases with age.
- **Sex**: Gender differences affect heart disease risk, with men generally at higher risk at a younger age.
- **Blood Pressure (trestbps)**: A well-known risk factor that increases the likelihood of cardiovascular problems.
- **Cholesterol Levels (chol)**: Elevated levels can lead to arterial plaque buildup, raising heart disease risk.
- **Chest Pain Type (cp)**: Different types of chest pain indicate varying risk levels and urgency.
- **Maximum Heart Rate Achieved (thalach)**: Indicates cardiovascular fitness, with lower rates signaling potential issues.
- **Exercise Angina (exang)**: Presence of angina during exercise reflects how the heart responds to physical stress.

### **Parameters Excluded**

The remaining parameters were not included for the following reasons:

- **Fasting Blood Sugar (fbs)**: Less immediately relevant for predicting heart disease.
- **Resting Electrocardiographic Results (restecg)**: Requires additional clinical context and not directly correlated with analyzed symptoms.
- **Oldpeak**: Useful but deemed less critical for initial model training.
- **Slope**: While insightful, excluded to simplify the model for initial testing.
- **Number of Major Vessels (ca)**: Omitted due to potential overfitting and complexity.
- **Thalassemia (thal)**: Excluded due to its complexity and need for clinical context.

### **Summary of Feature Selection**

By selecting these specific indicators and symptoms, the model focuses on the most relevant health factors, aiding in interpretability and practical application.

## **Backend Development**

### **Model Training**

The model was trained using Python's scikit-learn library, focusing on the selected features to predict heart disease likelihood.

### **Flask API**

A Flask application was developed to serve the trained model as an API. The API accepts input data in JSON format and returns the prediction results.

## **Frontend Development**

### **Technologies Used**

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling the application.

### **Features**

- A user-friendly form to input health indicators and symptoms.
- Validation for user inputs.
- Display of prediction results.

### **How to Run the Application**

1. **Navigate to the backend directory and install dependencies:**:
   cd backend
   python3 -m pip install -r requirements.txt

1.1. **Run the Flask API:**
python3 app.py

**Set up the frontend:** 2. **Navigate to the frontend directory and install dependencies:**
cd frontend
npm install

2.1 **Start the React application:**
npm start

3. **Access the application:**
   Open your web browser and navigate to http://localhost:3000.
