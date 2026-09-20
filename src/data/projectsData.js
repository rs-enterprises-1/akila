// Akila Sachindra Ariyarathna - Portfolio Data Model

export const PERSONAL_INFO = {
  name: "Akila Sachindra Ariyarathna",
  title: "Mechatronic Systems Engineer",
  subtitle: "Third-year Undergraduate at University of Moratuwa",
  location: "No. 226/7, Whitewell Estate, Paththalagedara, Veyangoda, Sri Lanka",
  email: "akilasachindra@gmail.com",
  phone: "+94 78 255 3500",
  portfolio: "https://akilasachindra.com",
  github: "https://github.com/akilasachindra",
  summary: "Third-year Mechatronic Systems Engineering undergraduate with a strong interest in robotics, automation, control systems, embedded systems, and mechanical design. Experienced in integrating mechanical, electrical, and software components through academic and practical engineering projects. Interested in developing intelligent electromechanical systems and applying engineering principles to real-world automation and robotics applications.",
  stats: [
    { label: "CGPA", value: "3.73 / 4.00", badge: "Dean's List (Sem 1 & 2)" },
    { label: "A/L Z-Score", value: "2.542", badge: "Island Rank 181 (3As)" },
    { label: "O/L Result", value: "9 As", badge: "Bandaranayake College" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    name: "Programming & Control",
    skills: ["Python", "MATLAB", "MATLAB/Simulink", "Feedback Control", "PID Control", "System Modelling"]
  },
  {
    name: "Robotics & Embedded Systems",
    skills: ["Arduino", "ESP32", "Raspberry Pi", "ESP-NOW Wireless", "IMU & Current Sensing", "Motor Kinematics"]
  },
  {
    name: "Computer Vision & AI",
    skills: ["OpenCV", "YOLO Object Detection", "Custom Image Datasets", "Real-Time Tracking"]
  },
  {
    name: "Mechanical & CAD Engineering",
    skills: ["SolidWorks", "ANSYS / FEA", "FluidSIM", "CAD Modelling", "Reverse Engineering", "Mechanism Design"]
  },
  {
    name: "Software & Web Systems",
    skills: ["React / JavaScript", "Supabase", "Firebase", "Netlify", "Role-Based Auth", "Financial Analytics"]
  }
];

export const INITIAL_PROJECTS = [
  {
    id: "scara-robot",
    title: "SCARA Object-Picking Robot",
    category: "Robotics & Vision",
    status: "Completed",
    shortDesc: "Automated real-time object detection and picking SCARA robot combining YOLO vision, kinematics, and web remote control.",
    fullDesc: `Developed an automated object detection and picking system using a SCARA robotic arm.
    
• Collected and labeled custom image datasets to train a YOLO object detection model for real-time object recognition and localization.
• Implemented forward and inverse robotic kinematics to compute joint angles and stepper motor positioning for exact end-effector placement.
• Integrated trained vision models with low-level microcontrollers to execute automated picking sequences upon target detection.
• Developed a custom web-based dashboard allowing real-time video stream monitoring and manual override control.`,
    tags: ["Robotics", "YOLO", "OpenCV", "Kinematics", "Python", "Web Control"],
    highlights: [
      "Real-time YOLO Object Recognition",
      "Exact Kinematic Joint Positioning",
      "Web Dashboard & Live Video Stream",
      "End-to-End System Integration"
    ],
    // High-quality SVG visual generator fallback
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><circle cx='400' cy='225' r='180' stroke='%231e293b' stroke-width='2' fill='none'/><line x1='400' y1='225' x2='520' y2='160' stroke='%2338bdf8' stroke-width='6' stroke-linecap='round'/><line x1='520' y1='160' x2='590' y2='240' stroke='%2338bdf8' stroke-width='5' stroke-linecap='round'/><circle cx='400' cy='225' r='12' fill='%2338bdf8'/><circle cx='520' y1='160' r='9' fill='%23f59e0b'/><circle cx='590' cy='240' r='14' fill='%2310b981'/><rect x='575' y='255' width='30' height='20' rx='4' fill='%2338bdf8'/><text x='400' y='380' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>SCARA Robotic Arm &amp; YOLO Vision System</text></svg>",
        caption: "SCARA Kinematics & Vision System Blueprint"
      }
    ]
  },
  {
    id: "micromouse-robot",
    title: "Micromouse Autonomous Maze-Solving Robot",
    category: "Robotics & Embedded Systems",
    status: "Completed",
    shortDesc: "Autonomous Micromouse robot engineered for real-time maze navigation, sensor feedback control, and encoder motion logic.",
    fullDesc: `Worked as part of a team to develop an autonomous Micromouse robot capable of navigating and solving a maze.

• Primarily contributed to the software and control systems, including motor control, sensor-based feedback, and robot motion control.
• Developed control algorithms for maintaining accurate motor speed and movement using feedback from wheel encoders and onboard sensors.
• Implemented and tuned the robot's motion-control logic to improve straight-line movement, turning accuracy, and overall maze navigation.
• Integrated sensor data, motor control, and navigation logic to enable autonomous operation of the robot.
• Collaborated with team members on the integration and testing of the mechanical, electrical, and software subsystems.`,
    tags: ["Robotics", "Micromouse", "Control Systems", "Wheel Encoders", "Maze Navigation", "Embedded Systems"],
    highlights: [
      "Motor & Motion Feedback Control",
      "Wheel Encoder Speed Tuning",
      "Autonomous Maze Navigation Logic",
      "Multi-Disciplinary Subsystem Integration"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><rect x='180' y='80' width='440' height='260' stroke='%23334155' stroke-width='4' fill='none'/><path d='M180,170 L340,170 L340,260 L480,260 L480,130 L620,130' stroke='%2338bdf8' stroke-width='5' fill='none' stroke-dasharray='8 4'/><circle cx='620' cy='130' r='14' fill='%2310b981'/><rect x='260' y='145' width='50' height='50' fill='%231e293b' stroke='%23f59e0b' stroke-width='3' rx='6'/><text x='400' y='380' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>Micromouse Autonomous Maze Navigation System</text></svg>",
        caption: "Micromouse Robot & Navigation Algorithm Blueprint"
      }
    ]
  },
  {
    id: "metal-sculpture-fabrication",
    title: "Musical Band Decorative Metal Sculpture",
    category: "Manufacturing & Design",
    status: "Completed",
    shortDesc: "Fabricated decorative metal band sculpture using woodworking, arc welding, and metal forming techniques.",
    fullDesc: `Designed and manufactured a multi-material decorative metal sculpture representing a musical ensemble featuring instruments such as a guitar and trumpet.
    
Key Engineering Achievements:
• Combined three primary manufacturing processes: precision woodworking for structural base mounts, welding (arc/MIG) for metallic joining, and sheet metal forming for musical instrument aesthetics.
• Performed hands-on metal cutting, surface finishing, joint alignment, and structural stability testing.`,
    tags: ["Woodworking", "Welding", "Metal Forming", "Manufacturing", "Hands-on Fabrication"],
    highlights: [
      "Multi-Material Joining (Metal & Wood)",
      "Arc Welding & Sheet Metal Forming",
      "Dimensional & Structural Integrity",
      "Artistic Engineering Execution"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><path d='M350,300 C350,200 450,200 450,300 Z' fill='none' stroke='%23f59e0b' stroke-width='4'/><line x1='400' y1='100' x2='400' y2='320' stroke='%2394a3b8' stroke-width='6'/><circle cx='400' cy='320' r='35' fill='%23f59e0b'/><text x='400' y='395' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>Metal Fabrication &amp; Sculpture Assembly</text></svg>",
        caption: "Fabricated Sculpture Representation"
      }
    ]
  },

  {
    id: "bicycle-accelerometer",
    title: "Bicycle Accelerometer Measurement System",
    category: "Embedded & Cloud",
    status: "Completed",
    shortDesc: "Wireless bicycle telemetry display & cloud motion logger powered by ESP-NOW and Firebase cloud backend.",
    fullDesc: `Engineered an embedded real-time motion telemetry system for bicycles featuring wireless sensor communication and live graphical telemetry.
    
Key Engineering Achievements:
• Designed smooth graphical user interfaces on a 320x480 embedded color display to render dynamic acceleration graphs, speed, and inclination indicators.
• Utilized ultra-fast ESP-NOW wireless protocol for low-latency transmission of sensor packet data between remote bike frame sensor nodes and the handlebar head unit.
• Integrated Firebase cloud synchronization to upload, log, and analyze historic motion profiles and ride metrics remotely.`,
    tags: ["ESP32", "ESP-NOW", "Embedded GUI", "Firebase", "C++", "Sensors"],
    highlights: [
      "320x480 TFT LCD Real-Time Graphs",
      "Ultra-Low Latency ESP-NOW Wireless",
      "Firebase Cloud Synchronization",
      "Autonomous Frame Sensor Node"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><rect x='220' y='80' width='360' height='260' rx='16' fill='%23111622' stroke='%2338bdf8' stroke-width='3'/><polyline points='260,260 300,220 340,240 380,160 420,180 460,130 500,190 540,140' fill='none' stroke='%2338bdf8' stroke-width='4'/><text x='400' y='115' text-anchor='middle' fill='%2338bdf8' font-family='sans-serif' font-size='14' font-weight='bold'>TELEMETRY: ACCELERATION X/Y/Z</text><text x='400' y='380' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>320x480 Embedded Display Graphical Interface</text></svg>",
        caption: "Real-time Accelerometer Graph on 320x480 Embedded TFT"
      }
    ]
  },
  {
    id: "vehicle-inventory-system",
    title: "Vehicle Inventory & Management Portal",
    category: "Software & Web Systems",
    status: "Completed",
    shortDesc: "Production business management web app with role-based access, financial analytics, customer advances, and tax invoice generation.",
    fullDesc: `Developed and deployed a full-stack vehicle dealership management application used for recording inventory, sales, customer advance payments, and financial auditing.
    
Key Engineering Achievements:
• Constructed multi-role access portals (Admin and Staff) to handle inventory, sales records, customer profiles, and financial transactions securely.
• Implemented automated logic for processing customer advances, vehicle status updates, printable sales receipts, and tax invoice generation.
• Integrated Supabase PostgreSQL database for real-time cloud data management and financial transaction auditing.
• Deployed to Netlify for production business deployment.`,
    tags: ["React", "Supabase", "Netlify", "Role-Based Auth", "Financial Analytics"],
    highlights: [
      "Role-Based Admin & Staff Portals",
      "Automated Tax Invoice & Receipt PDF Generation",
      "Supabase Centralized Relational Database",
      "Monthly Revenue & Expense Financial Tracker"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><rect x='150' y='60' width='500' height='300' rx='12' fill='%23111622' stroke='%23334155' stroke-width='2'/><rect x='150' y='60' width='500' height='40' rx='12' fill='%23161c2c'/><circle cx='180' cy='80' r='6' fill='%23ef4444'/><circle cx='200' cy='80' r='6' fill='%23f59e0b'/><circle cx='220' cy='80' r='6' fill='%2310b981'/><rect x='180' y='120' width='210' height='90' rx='8' fill='%231e263b'/><rect x='410' y='120' width='210' height='90' rx='8' fill='%231e263b'/><rect x='180' y='230' width='440' height='100' rx='8' fill='%231e263b'/><text x='400' y='390' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>Vehicle Inventory &amp; Financial Management Interface</text></svg>",
        caption: "Vehicle Dealership Dashboard Layout & Netlify Portal"
      }
    ]
  },
  {
    id: "chair-reverse-engineering",
    title: "Reverse Engineering of an Office Chair",
    category: "CAD & Mechanical",
    status: "Completed",
    shortDesc: "Complete CAD reverse engineering, mechanical linkage analysis, and 3D SolidWorks assembly reproduction.",
    fullDesc: `Conducted a comprehensive reverse engineering project on an ergonomic office chair to reproduce physical mechanical assemblies into detailed parametric digital CAD models.
    
Key Engineering Achievements:
• Disassembled physical components, performed precision dimensional metrology, and mapped geometrical tolerancing.
• Modelled sub-assemblies in SolidWorks including height-adjustment gas spring linkages, recline tilt lock mechanisms, and structural base components.
• Evaluated stress concentrations, component interlocks, and material selection for production repeatability.`,
    tags: ["SolidWorks", "CAD Modelling", "Reverse Engineering", "Mechanism Design", "FEA"],
    highlights: [
      "Precision Dimensional Metrology & Geometry Analysis",
      "Parametric SolidWorks Assembly Models",
      "Gas Spring Tilt & Height Mechanism Study",
      "Manufacturing & Material Feasibility Assessment"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><circle cx='400' cy='180' r='60' fill='none' stroke='%2338bdf8' stroke-width='4'/><rect x='340' y='240' width='120' height='20' rx='4' fill='%2338bdf8'/><rect x='390' y='260' width='20' height='80' fill='%2394a3b8'/><path d='M400,340 L300,400 M400,340 L500,400 M400,340 L400,410' stroke='%2338bdf8' stroke-width='5'/><text x='400' y='380' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>SolidWorks Mechanical CAD Model</text></svg>",
        caption: "SolidWorks Parametric Chair Assembly Model"
      }
    ]
  },
  {
    id: "metal-sculpture-fabrication",
    title: "Musical Band Decorative Metal Sculpture",
    category: "Manufacturing & Design",
    status: "Completed",
    shortDesc: "Fabricated decorative metal band sculpture using woodworking, arc welding, and metal forming techniques.",
    fullDesc: `Designed and manufactured a multi-material decorative metal sculpture representing a musical ensemble featuring instruments such as a guitar and trumpet.
    
Key Engineering Achievements:
• Combined three primary manufacturing processes: precision woodworking for structural base mounts, welding (arc/MIG) for metallic joining, and sheet metal forming for musical instrument aesthetics.
• Performed hands-on metal cutting, surface finishing, joint alignment, and structural stability testing.`,
    tags: ["Woodworking", "Welding", "Metal Forming", "Manufacturing", "Hands-on Fabrication"],
    highlights: [
      "Multi-Material Joining (Metal & Wood)",
      "Arc Welding & Sheet Metal Forming",
      "Dimensional & Structural Integrity",
      "Artistic Engineering Execution"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><path d='M350,300 C350,200 450,200 450,300 Z' fill='none' stroke='%23f59e0b' stroke-width='4'/><line x1='400' y1='100' x2='400' y2='320' stroke='%2394a3b8' stroke-width='6'/><circle cx='400' cy='320' r='35' fill='%23f59e0b'/><text x='400' y='395' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>Metal Fabrication &amp; Sculpture Assembly</text></svg>",
        caption: "Fabricated Sculpture Representation"
      }
    ]
  },
  {
    id: "pipe-inspection-robot",
    title: "Adaptive Pipe Inspection Robot",
    category: "Robotics & Mechatronics",
    status: "Ongoing",
    shortDesc: "Pipe inspection robot featuring an adaptive mechanical linkage for variable diameter pipe traversal and bend navigation.",
    fullDesc: `Designing and prototyping an in-pipe inspection robot equipped with an adaptive mechanical mechanism to navigate varying pipe diameters and sharp elbow bends seamlessly.
    
Key Engineering Achievements:
• Formulated mechanical link design and analyzed contact forces, normal pressure, and wheel traction requirements for reliable vertical and horizontal pipe traversal.
• Integrating DC geared motors with high-resolution encoders, 6-axis IMU, current sensors, and distance sensors for accurate robot state estimation and slip detection.
• Implementing adaptive motor torque control to maintain consistent wall traction without stalling or damaging pipe inner surfaces.`,
    tags: ["Adaptive Mechanisms", "Kinematics", "SolidWorks", "IMU", "DC Motors", "Sensors"],
    highlights: [
      "Adaptive Radial Linkage Mechanism",
      "Multi-Sensor Fusion (IMU + Encoders)",
      "Variable Diameter & Bend Traversal",
      "Dynamic Traction & Force Control"
    ],
    media: [
      {
        type: "image",
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' fill='%230f172a'><rect width='100%' height='100%' fill='%230b0f19'/><rect x='150' y='120' width='500' height='210' rx='105' stroke='%23334155' stroke-width='4' fill='none'/><rect x='280' y='170' width='240' height='110' rx='16' fill='%23161c2c' stroke='%2338bdf8' stroke-width='2'/><circle cx='240' cy='180' r='24' fill='%23334155'/><circle cx='560' cy='180' r='24' fill='%23334155'/><circle cx='240' cy='270' r='24' fill='%23334155'/><circle cx='560' cy='270' r='24' fill='%23334155'/><line x1='280' y1='195' x2='240' y2='180' stroke='%2338bdf8' stroke-width='4'/><line x1='520' y1='195' x2='560' y2='180' stroke='%2338bdf8' stroke-width='4'/><line x1='280' y1='255' x2='240' y2='270' stroke='%2338bdf8' stroke-width='4'/><line x1='520' y1='255' x2='560' y2='270' stroke='%2338bdf8' stroke-width='4'/><text x='400' y='380' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='16'>Adaptive In-Pipe Mechanism Diagram</text></svg>",
        caption: "Adaptive Mechanism Traction & Wall Linkage Concept"
      }
    ]
  }
];

export const EDUCATION = [
  {
    institution: "University of Moratuwa",
    degree: "B.Sc.Eng. (Hons) in Mechatronic Systems Engineering",
    period: "Mar 2024 – Present",
    details: [
      "Cumulative GPA: 3.73 / 4.00",
      "Dean's List Honoree: Semesters 1 and 2",
      "Specialized coursework in Control Systems, Kinematics, Robotics, Embedded Systems, and FEA."
    ]
  },
  {
    institution: "Bandaranayake College, Gampaha",
    degree: "GCE Advanced Level (Physical Science Stream)",
    period: "Jan 2014 – Feb 2023",
    details: [
      "Results: 3 A's in Combined Mathematics, Physics, and Chemistry",
      "Z-score: 2.542 | Island Rank: 181",
      "GCE Ordinary Level: 9 A's"
    ]
  }
];

export const ACTIVITIES = [
  { role: "Member", organization: "IESL Student Chapter", period: "2025 – Present" },
  { role: "Varsity Rugby Player", organization: "Bandaranayake College, Gampaha", period: "2019 – 2020" }
];

export const REFERENCES = [
  {
    name: "Dr. Lihil U. Subasinghe",
    title: "Senior Lecturer",
    department: "Department of Mechanical Engineering",
    institution: "University of Moratuwa, Sri Lanka"
  }
];
