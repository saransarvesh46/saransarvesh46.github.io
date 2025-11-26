import { useState, useEffect } from 'react';
import { FiTrash2, FiExternalLink, FiCopy, FiEdit, FiDownload } from 'react-icons/fi';

const SavedProjects = () => {
  const [projects, setProjects] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const saved = JSON.parse(localStorage.getItem('extractedProjects') || '[]');
    setProjects(saved.reverse());
  };

  const deleteProject = (id) => {
    const updated = projects.filter(p => p.id !== id);
    localStorage.setItem('extractedProjects', JSON.stringify(updated.reverse()));
    setProjects(updated);
  };

  const copyProjectCode = (project) => {
    const projectCode = `{
  title: "${project.title}",
  description: "${project.description}",
  technologies: ${JSON.stringify(project.languages || [])},
  github: "${project.url}",
  demo: "${project.homepage || ''}",
}`;
    
    navigator.clipboard.writeText(projectCode);
    setCopiedId(project.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projects.json';
    link.click();
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete all saved projects?')) {
      localStorage.removeItem('extractedProjects');
      setProjects([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Saved Projects ({projects.length})
          </h1>
          <div className="flex gap-3">
            {projects.length > 0 && (
              <>
                <button
                  onClick={exportToJSON}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <FiDownload /> Export JSON
                </button>
                <button
                  onClick={clearAll}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear All
                </button>
              </>
            )}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
              No projects saved yet.
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Use the Project Submission page to extract and save project details.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Project Image */}
                {project.images && project.images.length > 0 && (
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.languages && project.languages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.languages.slice(0, 4).map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {lang}
                        </span>
                      ))}
                      {project.languages.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.languages.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Stats */}
                  {project.stars !== undefined && (
                    <div className="flex gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>⭐ {project.stars}</span>
                      <span>🍴 {project.forks}</span>
                    </div>
                  )}

                  {/* Saved Date */}
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">
                    Saved: {new Date(project.savedAt).toLocaleString()}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => copyProjectCode(project)}
                      className="flex-1 px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      title="Copy as code"
                    >
                      {copiedId === project.id ? (
                        <>✓ Copied</>
                      ) : (
                        <>
                          <FiCopy className="w-4 h-4" /> Copy Code
                        </>
                      )}
                    </button>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium flex items-center gap-2"
                      title="View project"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm font-medium"
                      title="Delete"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Instructions */}
        {projects.length > 0 && (
          <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
              💡 Quick Actions:
            </h3>
            <ul className="text-sm text-green-800 dark:text-green-400 space-y-1 list-disc list-inside">
              <li><strong>Copy Code:</strong> Copies the project object in the format for Projects.jsx</li>
              <li><strong>Export JSON:</strong> Download all projects as a JSON file</li>
              <li><strong>Delete:</strong> Remove individual projects</li>
              <li>Paste the copied code directly into your projects array in <code className="bg-green-100 dark:bg-green-900 px-1 rounded">src/components/Projects/Projects.jsx</code></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProjects;
