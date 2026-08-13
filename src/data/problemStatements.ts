export interface ProblemStatement {
  id: string;
  theme: string;
  title: string;
  type: 'SOFTWARE' | 'HARDWARE' | 'SOFTWARE/HARDWARE';
  description: string;
}

export const problemStatements: ProblemStatement[] = [
  {
    id: "1",
    theme: "SMART AUTOMATION",
    title: "Fusion 360-based industrial component design and NC code generation.",
    type: "HARDWARE",
    description: "This problem statement focuses on developing a CAD/CAM-based manufacturing solution for an industrial component using Autodesk Fusion 360. Students must design the component, define appropriate machine and material details, select suitable tools from the tool library, and generate optimized toolpaths and NC/G-code. The generated code should be simulated and verified for machining accuracy and efficiency. The project should solve a practical industrial problem while demonstrating skills in CAD/CAM, CNC programming, toolpath optimization, and machining fundamentals"
  },
  {
    id: "2",
    theme: "SMART AUTOMATION",
    title: "Real-time monitoring of online certificate issuance.",
    type: "SOFTWARE",
    description: "The issuance of Caste and other certificates by Revenue Department need real-time monitoring to evaluate the resource allocation and demand for such certificates. The allocation of resources at present is done without any analysis leading to huge backlogs in some Sub-divison where the application load is very high. Any effective monitoring at District and Central level with detailed evaluation shall enable providing better allocation of resources for issuanc of such certificates"
  },
  {
    id: "3",
    theme: "FITNESS & SPORTS",
    title: "AI-based mobile platform for sports talent assessment.",
    type: "SOFTWARE",
    description: "AI-Powered Mobile Platform for Democratizing Sports Talent Assessment is a mobile application that uses AI, Computer Vision, and Machine Learning to assess sports performance through videos recorded on a smartphone. It analyzes factors such as movement, speed, posture, and technique to generate performance scores and personalized feedback. The platform helps identify and connect talented athletes, especially those from rural and underserved areas, with coaches and sports organizations"
  },
  {
    id: "4",
    theme: "HERITAGE AND CULTURE",
    title: "Student Innovation",
    type: "SOFTWARE",
    description: "Ideas that showcase the rich cultural heritage and traditions of India"
  },
  {
    id: "5",
    theme: "MED TECH / BIOTECH / HEALTH TECH",
    title: "Health Data Information & Management System Mobile Application (HDIMS)",
    type: "SOFTWARE",
    description: "Hospitals/Departments shall be able to enter and Update Data in the Mobile Application which can be viewed by the Super Admin dynamically for efficient Implementation of Health and Family Welfare Schemes, other Health programmes and provide key inputs for policy formulation and appropriate programme interventions. This Mobile Application will facilitates the flow of physical performance from the Facility level to the Sub-district, District and State/Union Territory level using Health Data Information & Management System Mobile Application (HDIMS) interface"
  },
  {
    id: "6",
    theme: "MED TECH / BIOTECH / HEALTH TECH",
    title: "Wearable sensor with Artificial Intelligence for prevention of falls in elderly people",
    type: "HARDWARE",
    description: "Background: As per the census 2011, Disability is more common in elderly people. One of the major reasons for disability among the elderly people is falls. Every year, one-third of community-dwelling older adults (adults aged 65 and older) experience a fall. Falls, defined as “unexpected event[s] in which the participant comes to rest on the ground, floor, or lower level,” are responsible for a wide range of negative health outcomes. Falls are the leading cause of injury-related deaths among older adults, and the age-adjusted fall death rate (64 deaths per 100,000 older adults) increased by 30%. Additionally, the psychological impact of falling can cause older adults and their caregivers significant fear about the risk of falling again. This fear of falling can have an accumulating effect whereby the fear of falling causes individuals to limit their everyday physical activities, which in turn makes them weaker and more susceptible to future falls. In fact, studies have shown that falling once doubles the chances of falling again. Many falls, however, can be prevented. One of the most effective ways to reduce fall risk is through targeted exercise that improves an individual’s strength, balance, and mobility Description: Exercise-based programs, such as the Otago Exercise Program and Tai Ji Quan: Moving for Better Balance, have been shown to reduce falls by up to 35% and 55%, respectively. Until recently, however, the vast majority of fall prevention programs were only offered in small, in-person classes hosted in local senior centres or gyms. Although this has been the standard dissemination method for decades, it comes with significant barriers to participation. Common barriers to in-person programs include a lack of programs in rural or under resourced communities; limited or no access to transportation; scheduling conflicts; cost of getting to and using facilities; interpersonal barriers, such as finding other participants’ presence intimidating; and physical environmental barriers, such as bad weather, stairs, uneven ground, difficult parking, and more The recent developments in Wearable technology with Artificial intelligence may help elderly people in preventing falls by giving tactile/visual/auditory feedback to users regarding risks of falling. This software may be developed with sensors that could able to sense whenever there is risk of Line of Gravity (LOG) goes outside the Base of Support (BOS) during day-to-day activities for elderly people as this is the commonest reason for elderly people. Expected Solution: These technologies will help elderly people to prevent falling by which Disability may be prevented. This digital delivery of a fall prevention program may be feasible. This suggests that the digital program addresses a previously unmet need in the community and its delivery would be sufficient to engage the community dwellers"
  },
  {
    id: "7",
    theme: "AGRICULTURE, FOOD TECH & RURAL DEVELOPMENT",
    title: "AI-Driven Crop Disease Prediction and Management System",
    type: "SOFTWARE",
    description: "Background: Crop diseases can devastate yields, leading to significant financial losses for farmers. Early detection and timely intervention are crucial for effective management. Description: Develop an AI-driven system that analyzes crop images and environmental data to predict potential disease outbreaks. This system will provide farmers with actionable insights and treatment recommendations to mitigate risks. Expected Solution: A mobile and web-based application that utilizes machine learning algorithms to identify crop diseases and suggest preventive measures and treatments based on real-time data."
  },
  {
    id: "8",
    theme: "AGRICULTURE, FOOD TECH & RURAL DEVELOPMENT",
    title: "Farmers Disease Diagnostic/Reporting Portal - Mobile Portal Al Based",
    type: "SOFTWARE",
    description: "Background- Agricultural productivity and food security are heavily dependent on the health of crops and livestock. Farmers, especially in remote or resource-limited areas, often face challenges in diagnosing and reporting diseases that affect their livestock and crops. Early diagnosis and timely reporting are crucial for effective disease management and prevention of widespread outbreaks. Description - A mobile portal powered by Artificial lntelligence (Al) for disease diagnosis and reporting can revolutionize how farmers manage animal and plant health. This portal enables farmers to use their smartphones to access diagnostic tools, report symptoms, and receive actionable advice. Al algorithms can analyze reported data to provide accurate diagnoses and suggest appropriate treatments or interventions. This technology can empower farmers with the knowledge and tools to manage diseases more effectively, ensuring the health and productivity of their farms. lntegrate Al-based software with existing NDLM to allow farmers to submit images and descriptions of disease signs and symptoms. The Al will generate suspected disease/condition reports with preventive measures and send alerts to veterinarians for appropriate action (Al-based software, Mobile application). Expected Outcomes . Enhanced Disease Diagnosis: . Timely Reporting and lntervention: . lncreased Access to Expert Knowledge: . lmproved Farm Productivity. Data Collection and Analysis: Cost-Effective DiseaseManagement: Empowerment and Education of Farmers: lntegration with Existing Surveillance Systems . Community Engagement and Support: Sustainable Agriculture Practices"
  },
  {
    id: "9",
    theme: "SMART VEHICLES",
    title: "Automated Bus Scheduling and Route Management System for Delhi Transport Corporation",
    type: "SOFTWARE",
    description: "Background: Efficient bus scheduling and route planning are essential for the smooth operation of public bus transport services. Currently, the Delhi Transport Corporation (DTC) relies on manual methods for scheduling and planning, which are time-consuming and resource-intensive. To improve operational efficiency, reduce errors, and enhance service reliability, DTC needs an automated software solution capable of handling both linked and unlinked duty scheduling. Additionally, the solution should facilitate route management by mapping all existing routes and highlighting overlaps with proposed new routes. This project aims to develop a comprehensive software solution to streamline bus scheduling, optimize resource utilization, and improve route planning. Detailed Description: The Automated Bus Scheduling and Route Management System will utilize lgorithms, data analytics, and geographic information system (GIS) technologies to automate various aspects of bus scheduling and route management. The system will potentially include (but not limited to) features such as: Linked Duty Scheduling: Assign a specific crew to a bus at the start of their duty, ensuring they remain with the bus throughout their shift. Provide tools to manage and monitor crew and bus assignments for better familiarity and accountability. Unlinked Duty Scheduling: Allow crews to hand over buses to other crew members after assigned completing their trips. Manage rest periods for crew menbers and after their reassign them to different buses rest period. Route Management: Map all existing routes and provide a visual representation of the bus network. Enable users to draw new routes and automatically highlight overlaps with existing routes. Optimize route planning to reduce congestion and improve service coverage. Expected Output: A fully functional prototype of the Automated Bus Scheduling and Route Management System demonstrating the above features through the integration of algorithms, data analytics, and GIS technologies. The system will offer a user-friendly interface for schedulers, planners, and managers to interact with the system, manage schedules, plan routes, and access real-time data and reports."
  },
  {
    id: "10",
    theme: "SMART VEHICLES",
    title: "Student Innovation",
    type: "HARDWARE",
    description: "Creating intelligent devices to improve the commutation sector"
  },
  {
    id: "11",
    theme: "TRANSPORTATION & LOGISTICS",
    title: "AI-Based Dynamic School-Bus Safety Route Optimizer",
    type: "SOFTWARE",
    description: "School-bus routes are usually planned based on distance and travel time, but the shortest route may not always be the safest route for children. Traffic congestion, accident-prone areas, poor road conditions, inadequate street lighting, pedestrian density, weather, road closures, and school timings can affect route safety. The system should analyze these safety factors, assign risk/safety scores to road segments, dynamically recommend the safest feasible route, identify safer pickup and drop-off points, and update the recommended route when road conditions change while considering travel time and operational constraints. A software-based system is needed to perform these functions and provide safe and efficient route recommendations."
  },
  {
    id: "12",
    theme: "ROBOTICS & DRONES",
    title: "Drone–Ground Robot Cooperative System for Disaster Debris Mapping",
    type: "SOFTWARE/HARDWARE",
    description: "After earthquakes, cyclones, landslides, or building collapses, rescue teams may not know which areas are safe to enter. A drone can first survey and map the disaster area, identifying debris, blocked paths, hazardous regions, and possible points of interest. A ground robot can then be automatically or remotely guided to selected locations for detailed inspection using cameras and sensors. The system should combine drone mapping, computer vision, robot navigation, sensor data, and a centralized rescue dashboard to provide an updated map of safe, risky, inaccessible, and priority areas. A software/hardware system is needed to support cooperative drone and ground-robot operations for disaster assessment."
  },
  {
    id: "13",
    theme: "ROBOTICS & DRONES",
    title: "GNSS-Denied Autonomous Drone Navigation & Inspection System",
    type: "SOFTWARE/HARDWARE",
    description: "Autonomous drones generally depend on GPS/GNSS for navigation, but these signals may be unavailable or unreliable inside warehouses, factories, tunnels, underground facilities, and large buildings. The solution should enable a drone to navigate and perform inspections without relying on GNSS using cameras, IMU, LiDAR/depth sensors, Visual SLAM, obstacle detection, and autonomous path planning. It should build an environment map, avoid obstacles, reach specified inspection locations, collect information, and safely return to its starting or docking location. A software/hardware system is needed to enable autonomous drone navigation and inspection in GNSS-denied environments"
  },
  {
    id: "14",
    theme: "CLEAN & GREEN TECHNOLOGY",
    title: "AI-Based Construction-Dust Source Identification & Mitigation System",
    type: "SOFTWARE/HARDWARE",
    description: "Construction activities can generate high levels of PM2.5 and PM10 particulate pollution, but conventional air-quality monitoring systems generally indicate pollution levels without identifying the activity responsible. The system should combine particulate-matter sensors, wind speed and direction, camera-based activity detection, construction-site information, and GIS data to identify probable sources of construction dust. It should generate a dust-risk map, identify probable pollution sources, estimate risk levels, and recommend suitable mitigation actions such as water spraying or temporary control of high-dust activities. A software/hardware system is needed to monitor, identify, predict, and mitigate construction-related dust pollution"
  },
  {
    id: "15",
    theme: "CLEAN & GREEN TECHNOLOGY",
    title: "Smart Storm-Drain Plastic Interception & Blockage Prediction System",
    type: "SOFTWARE/HARDWARE",
    description: "Plastic and other solid waste entering storm-water drains can reduce water flow, cause blockages, and increase the risk of urban flooding. Drain cleaning is often carried out only after significant blockage has occurred. The system should capture floating plastic waste while monitoring waste accumulation, water level, and flow conditions. It should use sensors and intelligent analytics to estimate waste accumulation, predict potential blockage before it becomes critical, and automatically alert maintenance authorities so that preventive cleaning can be performed. A software/hardware system is needed to intercept plastic waste, monitor drain conditions, predict blockages, and support timely preventive maintenance."
  },
  {
    id: "16",
    theme: "TOURSIM",
    title: "Personalized Local Tourism Discovery and Recommendation",
    type: "SOFTWARE",
    description: "Tourists often find it difficult to discover lesser-known tourist destinations, local attractions, cultural experiences, and hidden places that match their interests, budget, available time, and preferred activities. Existing tourism platforms mainly promote popular destinations, resulting in overcrowding at well-known locations while many valuable local attractions remain unnoticed. A software-based system is needed to identify and recommend suitable lesser-known places based on individual tourist preferences and provide a personalized travel plan that improves the overall tourism experience while supporting local destinations."
  },
  {
    id: "17",
    theme: "RENEWABLE / SUSTAINABLE ENERGY",
    title: "Smart Waste-to-Energy Feedstock Management",
    type: "SOFTWARE/HARDWARE",
    description: "Organic wastes such as food waste, animal waste, and agricultural waste are often mixed without knowing the best combination for energy production, which can reduce biogas output and cause poor waste management. A smart system is needed to identify and measure different types of organic waste, analyze their moisture and quantity, and recommend the most suitable mixture for biogas production. The system can use sensors and intelligent software to predict energy output and improve the efficiency of waste-to-energy production."
  },
  {
    id: "18",
    theme: "RENEWABLE / SUSTAINABLE ENERGY",
    title: "Smart Renewable Energy Storage Priority System",
    type: "SOFTWARE/HARDWARE",
    description: "Renewable energy production changes continuously, while batteries have limited capacity and degrade with frequent charging and discharging. When multiple renewable-energy sources and appliances are connected, it is difficult to decide which energy should be stored, which should be used immediately, and which loads should be operated first. A hardware-and-software system is needed to monitor renewable generation, battery condition, and household energy demand, then intelligently prioritize energy usage and storage to reduce energy wastage, extend battery life, and maximize the use of renewable energy."
  },
  {
    id: "19",
    theme: "BLOCKCHAIN & CYBER SECURITY",
    title: "Blockchain-Based Software License Misuse Detection",
    type: "SOFTWARE",
    description: "Organizations often purchase software licenses for a specific number of users, devices, or duration, but it can be difficult to continuously track whether these licenses are being shared, transferred, duplicated, or used beyond their permitted limits. Unauthorized license usage can cause financial losses, security risks, and compliance issues. A software-based system is needed to create a tamper-resistant digital record of software ownership, license activation, user/device assignment, transfers, and expiration. Blockchain can maintain the trusted license history, while the application can automatically monitor usage and identify duplicate activations, expired licenses, and suspicious license transfers, allowing administrators to take appropriate action."
  },
  {
    id: "20",
    theme: "SMART EDUCATION",
    title: "Learning Resource Quality and Consistency Checker",
    type: "SOFTWARE",
    description: "Students use textbooks, websites, videos, and AI-generated materials from multiple sources, which may contain outdated, incorrect, duplicated, or conflicting information. A software-based system is needed to compare educational resources, identify inconsistencies and outdated content, and provide a reliability report, helping students and teachers choose accurate and suitable learning materials."
  },
  {
    id: "21",
    theme: "DISASTER MANAGEMENT",
    title: "Smart Flood Early Warning System",
    type: "SOFTWARE/HARDWARE",
    description: "Flood-prone areas sometimes do not get enough warning before water levels become dangerous. This can lead to loss of life and property. Develop a solution that can give people an early and reliable warning about possible floods."
  },
  {
    id: "22",
    theme: "DISASTER MANAGEMENT",
    title: "Emergency Resource Allocation System",
    type: "SOFTWARE",
    description: "During a disaster, rescue teams, ambulances, shelters, and essential supplies may not be available where they are needed most. It can be difficult for authorities to decide what should be sent first and where. Develop a solution that can help manage and distribute emergency resources effectively."
  },
  {
    id: "23",
    theme: "TOYS & GAMES",
    title: "Adaptive Learning Game for Children",
    type: "SOFTWARE",
    description: "Children learn at different speeds, but many educational games give the same questions and difficulty to everyone. This can make learning less effective and less interesting. Develop an engaging game that can provide a better learning experience for children with different learning levels."
  },
  {
    id: "24",
    theme: "SPACE AND TECHNOLOGY",
    title: "Satellite-Based Infrastructure Change Detection",
    type: "SOFTWARE",
    description: "Roads, buildings, and other structures change over time. Finding these changes manually from satellite images can take a lot of time. Develop a solution that can help identify important changes in infrastructure using satellite data."
  },
  {
    id: "25",
    theme: "SPACE AND TECHNOLOGY",
    title: "Smart Satellite Image Search & Information System",
    type: "SOFTWARE",
    description: "A large amount of satellite data is available for different locations and dates, but finding and understanding the right information can be difficult. Develop a simple solution that helps users find relevant satellite images and understand useful information about a selected area."
  },
  {
    id: "26",
    theme: "MISCELLANEOUS",
    title: "Student Innovation",
    type: "SOFTWARE/HARDWARE",
    description: "Students will select a suitable problem statement from the Miscellaneous theme."
  }
];
