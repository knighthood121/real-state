// Team member data with each person's information
const teamMembers = [
  {
    id: 1,
    name: "Olivia Patel",
    role: "Senior Designer",
    backgroundColor: "#A9A9A9",
    socialLink: "https://linkedin.com/in/oliviapatel",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Chloe Anderson",
    role: "Interior Stylist",
    backgroundColor: "#8C8C8C",
    socialLink: "https://linkedin.com/in/chloeanderson",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Noah Sullivan",
    role: "CAD Artist",
    backgroundColor: "#9E9E9E",
    socialLink: "https://linkedin.com/in/noahsullivan",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Project Manager",
    backgroundColor: "#B8B8B8",
    socialLink: "https://linkedin.com/in/jameswilson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    role: "3D Visualization Expert",
    backgroundColor: "#939393",
    socialLink: "https://linkedin.com/in/emmarodriguez",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Daniel Kim",
    role: "UI/UX Designer",
    backgroundColor: "#A0A0A0",
    socialLink: "https://linkedin.com/in/danielkim",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Marketing Specialist",
    backgroundColor: "#B0B0B0",
    socialLink: "https://linkedin.com/in/sophiamartinez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Function to fetch all team members
export const fetchTeamMembers = () => {
  // Simulating an API call with a Promise
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(teamMembers);
    }, 300);
  });
};

// Function to fetch a single team member by ID
export const fetchTeamMemberById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = teamMembers.find(member => member.id === id);
      if (member) {
        resolve(member);
      } else {
        reject(new Error("Team member not found"));
      }
    }, 200);
  });
};

export default teamMembers; 