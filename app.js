// Projects data - add your projects here
const projects = [
    {
        title: "trackk.me",
        description: "TBA",
        url: "https://trackk.me",
        status: "under-construction"
    },
    {
        title: "it-iz.me",
        description: "TBA",
        url: "https://it-iz.me",
        status: "under-construction"
    },
    {
        title: "streak.at",
        description: "TBA",
        url: "https://streak.at",
        status: "under-construction"
    },
    {
        title: "Tech QNA Battleground",
        description: "TBA",
        status: "under-construction"
    },
    {
        title: "TheVirtualSF.com",
        description: "TBA",
        url: "https://TheVirtualSF.com",
        status: "under-construction"
    },
    {
        title: "builderz.space",
        description: "TBA",
        url: "https://builderz.space",
        status: "under-construction"
    },

    {
        title: "memes.fit",
        description: "create and share memes.",
        url:"https://memes.fit"
    },
    {
        title: "oneDB",
        description: "one database for everything you need.",
        url: "https://onedb.net",
        repo: "https://github.com/example/onddb", 
        tags: ["community driven", "open source"],
       
    },
    {
        title: "Games",
        description: "games and fun projects.",
        url: "https://games.void.ac",
        repo: "https://github.com/2xBuild/games", 
        tags: ["games", "open source"],
        
    }
];

function renderProjects() {
    const projectsGrid = document.getElementById('projects');
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="empty-state">
                <p>No projects yet. Add them in app.js</p>
            </div>
        `;
        return;
    }
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card${project.status === 'under-construction' ? ' under-construction' : ''}">
            <div class="project-header">
                <div class="project-title-group">
                    <h2>${project.title}</h2>
                </div>
                <div class="project-buttons">
                    ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-visit">Visit</a>` : ''}
                    ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-repo">Repo</a>` : ''}
                </div>
            </div>
            <p>${project.description}</p>
            <div class="project-meta">
                ${project.year ? `<span class="meta-item">${project.year}</span>` : ''}
                ${project.types ? `
                    <div class="tags types">
                        ${project.types.map(type => `<span class="tag tag-type">${type}</span>`).join('')}
                    </div>
                ` : ''}
                ${project.tags ? `
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderProjects);
