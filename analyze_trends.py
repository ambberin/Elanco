import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv('your_dataset.csv')  # Update with your dataset file path

# Perform basic analysis to infer common trends
# Example: Highest Costs
highest_costs = df.nlargest(10, 'Cost')  # Adjust 'Cost' to the appropriate column name
print("Top 10 Highest Costs:")
print(highest_costs)

# Example: Most Frequent Occurrences
most_frequent = df['Category'].value_counts().head(5)  # Adjust 'Category' to the appropriate column name
print("\nTop 5 Most Frequent Occurrences:")
print(most_frequent)

# Example: Trend Visualization
plt.figure(figsize=(10, 6))
df['Date'] = pd.to_datetime(df['Date'])  # Convert 'Date' column to datetime if needed
df.set_index('Date')['Sales'].plot()
plt.title('Sales Trend Over Time')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.show()
