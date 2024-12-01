import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        cholesterol: '',
        blood_pressure: '',
        chest_pain_type: '',
        max_heart_rate: '',
        exercise_angina: ''
    });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validate data before submitting it to the server
        // store server url in a variable
        const response = await axios.post('http://127.0.0.1:5000/predict', formData);
        setResult(response.data);
    };
    // separaate concerns, use composition
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-5">Heart Disease Prediction Form</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
                    <input type="number" name="age" onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required />
                </div>

                <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700">Gender:</legend>
                    <div>
                        <input type="radio" name="gender" value="1" onChange={handleChange} required />
                        <label className="ml-2">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="gender" value="0" onChange={handleChange} required />
                        <label className="ml-2">Female</label>
                    </div>
                </fieldset>

                <div className="mb-4">
                    <label htmlFor="blood_pressure" className="block text-sm font-medium text-gray-700">Blood Pressure (trestbps):</label>
                    <input type="number" name="blood_pressure" onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="cholesterol" className="block text-sm font-medium text-gray-700">Cholesterol (chol):</label>
                    <input type="number" name="cholesterol" onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required />
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-2">Related Symptoms:</h2>

                <div className="mb-4">
                    <label htmlFor="exercise_angina" className="block text-sm font-medium text-gray-700">Do you experience chest pain during exercise?</label>
                    <select name="exercise_angina" onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required>
                        <option value="">Select an option</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>

                <fieldset className="mb-4">
                    <legend className="text-sm font-medium text-gray-700">Chest Pain Type:</legend>
                    {['1', '2', '3', '4', '0'].map((type) => (
                        <div key={type} className="mb-2">
                            <input type="radio" name="chest_pain_type" value={type} onChange={handleChange} required />
                            <label className="ml-2">{`Type ${type}`}</label>
                            {type === '1' && <small className="block text-gray-600">“I feel pain when I exert myself or feel stressed, and it usually goes away with rest or medication.”</small>}
                            {type === '2' && <small className="block text-gray-600">“I feel pain that doesn’t always match the usual signs of heart-related pain; it can happen at rest or with activity.”</small>}
                            {type === '3' && <small className="block text-gray-600">“I have pain that feels different from heart pain, often due to muscle strain or digestive issues.”</small>}
                            {type === '4' && <small className="block text-gray-600">“I don’t feel any chest pain at all, but I may have other symptoms.”</small>}
                            {type === '0' && <small className="block text-gray-600">“I have not experienced any chest pain.”</small>}
                        </div>
                    ))}
                </fieldset>

                <div className="mb-4">
                    <label htmlFor="max_heart_rate" className="block text-sm font-medium text-gray-700">Maximum Heart Rate Achieved (thalach):</label>
                    <input type="number" name="max_heart_rate" onChange={handleChange} className="border border-gray-300 p-2 w-full rounded" required />
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
            </form>

            {result && (
                <div className="mt-5 bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-xl font-semibold text-gray-800">Prediction Result</h2>
                    <p>You have a {result.likelihood.toFixed(2)}% likelihood of having heart disease.</p>
                    <a href="/" className="text-blue-500 hover:underline">Go Back</a>
                </div>
            )}
        </div>
    );
};

export default App;
