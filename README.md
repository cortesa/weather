# Weather App <small>(Front-end Technical Test)</small>


## Abstract
This technical test consists of developing a **weather web application** that retrieves real-time weather data using the **wttr.in** API. The application should allow users to **search for a city** and display relevant weather information, including current conditions and upcoming forecasts.

## Developer
- Name: Cortesa
- About: [https://about.cortesa.net](https://about.cortesa.net)

## Setup & Execution

### **1️⃣ Install dependencies**
Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
yarn install
```

### **2️⃣ Start the development server**
Run the following command to start the local server:

```sh
yarn dev
```

This will launch the application in **development mode**.  
By default, it will be available at: [http://localhost:3000](http://localhost:3000) *(or the port defined in your setup).*

### **3️⃣ Build for production (optional)**
If you want to create a production-ready build, run:

```sh
yarn build
```

This will generate an optimized version of the application in the `/dist` folder.

# Test specification
### Purpose
Develop a weather web application using the **wttr.in** API:  
[https://github.com/chubin/wttr.in](https://github.com/chubin/wttr.in)

### Basic Features
1. The user must be able to enter a city name in a search field.
2. The application must fetch weather data in **JSON format** using the **wttr.in** API.
3. Display the **current weather** with details such as:
   - Date
   - Textual weather description
   - Temperature in Celsius
   - Humidity
   - Wind speed in Km/h
4. Present a **list of maximum and minimum temperatures** for the upcoming days.

### User Interface
1. **Responsive design** that adapts to both mobile and desktop devices.
2. Implement an **intuitive and visually appealing UI**.
3. Display an **icon or image** representing the current weather condition.

### Evaluation Criteria
1. Code **quality and readability**.
2. **Structure and scalability** of the solution.
3. Proper use of **design patterns** and **front-end best practices**.
4. Efficient handling of **API calls** and **state management**.
5. **User experience** and **interface design**.

### Additional Notes
- Feel free to use **additional libraries** as needed for the project.
- **Creativity** in data presentation and user experience will be positively evaluated.
- Submit the test results via your personal repository (**GitHub, GitLab, Bitbucket…**)  
  or as a **shared file**.

🔗 **API Documentation**: [https://github.com/chubin/wttr.in](https://github.com/chubin/wttr.in)
