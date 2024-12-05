# IoT-Based Energy Monitor

## Overview

The **IoT-Based Energy Monitor** is a web application designed to track and visualize energy consumption using IoT (Internet of Things) devices. The project showcases a framework for monitoring energy usage in real-time, which can be expanded to integrate with actual IoT sensors. This tool provides insights into power consumption trends and cost estimates, aiming to help users optimize energy usage.

While the current version only shows sample data, the goal is to eventually connect the app with IoT devices for real-time data monitoring.

## Features

- **Energy Usage Dashboard**: Displays energy usage data (currently static) with an estimated cost breakdown based on predefined usage rates.
- **Graphical Visualization**: Provides an interactive line graph to visualize energy consumption over time.
- **Dark Mode**: Toggle between light and dark themes for a better user experience.
- **User-Friendly Interface**: Simple and intuitive design to track energy usage and costs easily.

## Project's Current State

- **Static Data**: The app currently displays sample data for energy usage and cost estimation. This simulates how the data would look once integrated with real-time sensors.
- **User Interface**: Interactive elements such as theme toggling and the energy usage form are functional.
- **Graph Visualization**: A line graph that illustrates the energy consumption data over time is available, but the data is not dynamic.

## Missing Features

- **Real-time IoT Data**: The app does not yet support live energy data from IoT devices. Future updates will include integration with actual IoT sensors (e.g., smart meters or energy monitoring systems).
- **Backend Server**: The application lacks a backend server to handle real-time data fetching and processing from IoT devices.
- **Real Data Integration**: The app currently shows static data rather than live energy consumption values.

## Technologies Used

- **HTML**: Used for structuring the web page and content.
- **CSS**: Styles the web interface, including the dark mode toggle and layout.
- **JavaScript**: Handles logic for user interaction, theme toggling, and data visualization with Chart.js.
- **Chart.js**: Used to render energy consumption data on an interactive graph.
- **No Backend Yet**: Currently, there is no server-side logic or database to store real-time energy usage data.

## Future Development

1. **IoT Device Integration**: Incorporate real-time energy consumption data from IoT sensors and devices such as smart meters or energy monitors.
2. **Backend Implementation**: Develop a backend server (e.g., using Node.js) to process and store energy data from IoT devices.
3. **Real-time Data Visualization**: Enable the app to display live data through WebSockets, MQTT, or similar technologies.
4. **User Authentication**: Allow users to sign up, log in, and save their energy usage data for future analysis.
5. **Energy Usage Analysis**: Provide personalized recommendations and analytics to help users optimize their energy consumption.

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/IoT-Based-Energy-Monitor.git
