const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Submit Report",
                "taskDescription": "Complete the quarterly report and submit to the manager.",
                "taskDate": "2024-11-25",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Attend Workshop",
                "taskDescription": "Participate in the skill enhancement workshop.",
                "taskDate": "2024-11-26",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Follow-Up",
                "taskDescription": "Call the client for project updates.",
                "taskDate": "2024-11-24",
                "category": "Client Relations",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Inventory Check",
                "taskDescription": "Perform a full check of warehouse inventory.",
                "taskDate": "2024-11-23",
                "category": "Logistics",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Weekly Meeting",
                "taskDescription": "Prepare slides and present in the team meeting.",
                "taskDate": "2024-11-22",
                "category": "Team Coordination",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Market Research",
                "taskDescription": "Analyze competitors and prepare a report.",
                "taskDate": "2024-11-28",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "System Maintenance",
                "taskDescription": "Check and update the security system.",
                "taskDate": "2024-11-29",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Team Training",
                "taskDescription": "Organize and conduct training for new employees.",
                "taskDate": "2024-12-01",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Budget Planning",
                "taskDescription": "Draft the budget proposal for the upcoming quarter.",
                "taskDate": "2024-11-27",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Policy Review",
                "taskDescription": "Review company policies and suggest updates.",
                "taskDate": "2024-11-26",
                "category": "Administration",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Customer Support",
                "taskDescription": "Resolve customer queries on live chat.",
                "taskDate": "2024-11-20",
                "category": "Support",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Product Feedback Analysis",
                "taskDescription": "Collect and analyze customer feedback for the new product.",
                "taskDate": "2024-11-30",
                "category": "Product Management",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "taskTitle": "Internal Audit",
                "taskDescription": "Complete the scheduled internal compliance audit.",
                "taskDate": "2024-11-21",
                "category": "Compliance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
]

const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin = JSON.parse(localStorage.getItem('admin')) 
    
    return {employees,admin}
    
}