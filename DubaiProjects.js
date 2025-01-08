const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Projects:', data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
