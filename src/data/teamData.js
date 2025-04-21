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