import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
from sklearn.metrics import accuracy_score, r2_score

# Load your dataset
data = pd.read_csv("Heart Disease dataset.csv")

# Display the first few rows of the dataset
print(data.head())

# Select features for training
X = data[[x for x in data.columns if x != 'target']]  # Relevant features
y = data['target']  # Target variable

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Calculate and print the accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"Model accuracy: {accuracy * 100:.2f}")

# Calculate and print the R squared value
r_squared = r2_score(y_test, y_pred)
print(f"R squared value: {r_squared:.2f}")


# Find and print feature importances
feature_importances = model.feature_importances_
features = X.columns
importance_dict = dict(zip(features, feature_importances))

print("Feature importances:")
for feature, importance in importance_dict.items():
    print(f"{feature}: {importance * 100:.4f}")
# Save the trained model to a file
joblib.dump(model, 'heart_disease_model.pkl')
print("Model trained and saved as 'heart_disease_model.pkl'")
