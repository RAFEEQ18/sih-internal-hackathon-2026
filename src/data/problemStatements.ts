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
    title: "Development of portable device (non-contact device) for measurement of eye pressure in glaucoma patients for usage at home.",
    type: "HARDWARE",
    description: "Background: Glaucoma is a leading cause of blindness worldwide, and managing intraocular pressure (IOP) is crucial for preventing disease progression. Description: Traditional methods of measuring IOP, such as Goldmann applanation tonometry, require direct contact with the eye, topical anaesthesia, and skilled personnel, making them less accessible for regular monitoring. Non-contact methods, such as air-puff tonometry, offer a more convenient alternative but are often limited to clinical settings due to their size and cost. Expected Solution: Problem statement is to develop a cost-effective, portable, and non-contact device that can measure IOP accurately and reliably with safety. This device should be easy to use, and allowing patients to use at home."
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
    title: "Smart Irrigation System for Precision Farming",
    type: "HARDWARE",
    description: "Background: Water scarcity is a major challenge in agriculture, leading to inefficient water use and reduced crop yields. Traditional irrigation methods often result in overuse or underuse of water. Description: Develop a smart irrigation system that utilizes sensors and IoT technology to monitor soil moisture levels and weather conditions. This system will provide real-time data to farmers, enabling them to make informed decisions on irrigation scheduling, thus optimizing water usage and enhancing crop yield. Expected Solution: A smart irrigation module integrated with moisture sensors and a mobile application to provide farmers with timely irrigation alerts and recommendations based on real-time data"
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
    title: "Smart College Traffic & Parking Management System",
    type: "SOFTWARE/HARDWARE",
    description: "During college opening/closing times and events, many vehicles enter and leave the campus at the same time. This causes traffic congestion, parking problems, and difficulty finding available parking spaces.So Develop a software/hardware system that monitors vehicle entry/exit and available parking spaces using sensors or cameras. The system should show available parking areas, guide vehicles to free spaces, and provide traffic information to the campus security/administration through a dashboard."
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
    title: "Drone-Based Campus/Building Inspection System",
    type: "SOFTWARE/HARDWARE",
    description: "Checking large buildings, rooftops, solar panels, towers, or other difficult-to-reach areas manually can be time-consuming and sometimes unsafe.So Develop a software/hardware drone system that captures images or videos of selected areas and uses computer vision to identify visible problems such as cracks, damaged surfaces, or obstacles. The system should generate an inspection report"
  },
  {
    id: "14",
    theme: "CLEAN & GREEN TECHNOLOGY",
    title: "Smart Waste Segregation System",
    type: "SOFTWARE/HARDWARE",
    description: "In many places, wet waste and dry/recyclable waste are mixed together, making waste processing and recycling difficult.So Develop a software/hardware system that uses sensors and/or a camera with AI image classification to identify waste and help separate it into categories such as wet waste, plastic, paper, and metal."
  },
  {
    id: "15",
    theme: "CLEAN & GREEN TECHNOLOGY",
    title: "Smart Water Leakage & Wastage Detection System",
    type: "SOFTWARE/HARDWARE",
    description: "Water leaks in college buildings, hostels, homes, and public places may continue for a long time without being noticed, resulting in significant water wastage.So Develop a software/hardware system that monitors water flow and usage using sensors. The system should detect unusual water flow, identify possible leakage, send alerts, and display water consumption through a dashboard."
  },
  {
    id: "16",
    theme: "TOURISM",
    title: "Tourist Crowd Management",
    type: "SOFTWARE",
    description: "Popular tourist destinations often experience heavy crowds during peak hours and seasons, resulting in long waiting times, traffic congestion, overcrowding, and reduced visitor satisfaction. At the same time, nearby attractions may remain less crowded and underused. Tourists and tourism authorities often lack a clear way to understand crowd conditions and their impact on different tourist locations, making effective crowd management difficult."
  },
  {
    id: "17",
    theme: "RENEWABLE / SUSTAINABLE ENERGY",
    title: "Smart Biomass Moisture Detection System",
    type: "SOFTWARE/HARDWARE",
    description: "Agricultural wastes such as rice husk, straw, coconut shells, and wood residues are commonly used as biomass for renewable energy production. However, different moisture levels can affect their burning efficiency, energy output, and storage quality. Excess moisture can reduce energy production and may also cause fungal growth or spoilage during storage. A simple system is needed to monitor the moisture and temperature of biomass materials and determine whether they are suitable for energy production."
  },
  {
    id: "18",
    theme: "RENEWABLE / SUSTAINABLE ENERGY",
    title: "Smart Solar Panel Shade Detection System",
    type: "SOFTWARE/HARDWARE",
    description: "Solar panels can experience a significant reduction in power generation when temporary or permanent shadows from trees, buildings, vehicles, or nearby objects fall on their surface. Users may not easily identify whether a decrease in power output is caused by shading or other factors. This can lead to reduced energy generation and inefficient use of the solar installation. A system is needed to monitor the solar panel's light conditions and power output and identify unusual reductions in generation caused by shading."
  },
  {
    id: "19",
    theme: "BLOCKCHAIN & CYBER SECURITY",
    title: "Secure Digital Consent Tracking System",
    type: "SOFTWARE",
    description: "Users regularly provide consent to websites and applications to collect, store, and use their personal information, but they often cannot easily remember what information they agreed to share, when they gave consent, or how long the permission remains valid. Consent records may also be changed or become difficult to verify later. A software-based system is needed to maintain a secure and transparent history of user consent, allowing users to view, manage, and withdraw their permissions while providing organizations with a reliable record of consent."
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
    theme: "TOYS & GAMES",
    title: "Preservation and Engagement of Traditional Indian Games",
    type: "SOFTWARE",
    description: "Many traditional Indian games that were once commonly played by children and communities are becoming less familiar to younger generations. Changes in lifestyle, limited awareness of regional variations, and the increasing preference for modern forms of entertainment have contributed to the gradual decline in participation and knowledge of these games. In many cases, information about the rules, cultural background, variations and traditional methods of playing such games is scattered or passed down informally. There is a need to address the challenge of making traditional Indian games more accessible and engaging to younger generations while preserving the cultural knowledge associated with them."
  },
  {
    id: "22",
    theme: "TOYS & GAMES",
    title: "Gamified Programming Learning Platform",
    type: "SOFTWARE",
    description: "Beginners often find programming difficult because learning mainly involves understanding syntax, solving repetitive coding exercises, and identifying errors without an engaging learning environment. This can make it difficult for learners to develop logical thinking and problem-solving skills while maintaining interest in programming. There is a need to address the challenge of making programming concepts more engaging and interactive through a game-oriented learning experience that encourages learners to understand concepts, apply logic, overcome challenges, and progressively improve their programming skills"
  },
  {
    id: "23",
    theme: "DISASTER MANAGEMENT",
    title: "Emergency Resource Allocation System",
    type: "SOFTWARE",
    description: "During a disaster, rescue teams, ambulances, shelters, and essential supplies may not be available where they are needed most. It can be difficult for authorities to decide what should be sent first and where. Develop a solution that can help manage and distribute emergency resources effectively."
  },
  {
    id: "24",
    theme: "SPACE AND TECHNOLOGY",
    title: "Making Space Science and Mission Operations Understandable to Students",
    type: "SOFTWARE",
    description: "Space missions involve several complex concepts, including launch sequences, orbital motion, satellite operations, communication, payloads, mission stages and spacecraft status. These concepts can be difficult for school and college students to understand because they are generally presented through highly technical material or theoretical explanations. Students often have limited opportunities to interact with or explore these concepts in an intuitive manner. There is a need to address the challenge of improving students' understanding of fundamental space science and mission operations in a way that makes complex concepts easier to explore and comprehend."
  },
  {
    id: "25",
    theme: "MISCELLANEOUS",
    title: "Student Innovation",
    type: "SOFTWARE/HARDWARE",
    description: "Identify a meaningful real-world problem and develop an innovative, feasible technology-based solution to address it."
  }
];
