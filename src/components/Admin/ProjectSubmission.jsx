import { useState } from 'react';
import { FiLink, FiImage, FiCode, FiCheck } from 'react-icons/fi';

const ProjectSubmission = () => {
  const [projectUrl, setProjectUrl] = useState('');
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const loadingImageUrl = 'https://raw.githubusercontent.com/saran887/My-Portfolio/main/public/loading.gif';

  const fetchProjectDetails = async (url) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Check if it's a GitHub URL
      const githubMatch = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
      
      if (githubMatch) {
        const [, owner, repo] = githubMatch;
        const cleanRepo = repo.replace(/\.git$/, '');
        
        // Fetch GitHub repo data
        const response = await fetch(`https://api.github.com/repos/${owner}/${cleanRepo}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repository details');
        }
        
        const repoData = await response.json();
        
        // Fetch README for screenshot detection
        let readmeContent = '';
        try {
          const readmeResponse = await fetch(`https://api.github.com/repos/${owner}/${cleanRepo}/readme`);
          if (readmeResponse.ok) {
            const readmeData = await readmeResponse.json();
            readmeContent = atob(readmeData.content);
          }
        } catch (err) {
          console.log('No README found');
        }
        
        // Extract image URLs from README
        const imageRegex = /!\[.*?\]\((https?:\/\/[^\)]+)\)/g;
        const images = [];
        let match;
        while ((match = imageRegex.exec(readmeContent)) !== null) {
          images.push(match[1]);
        }
        
        // Fetch languages
        const languagesResponse = await fetch(repoData.languages_url);
        const languages = await languagesResponse.json();
        
        const extractedData = {
          title: repoData.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repoData.description || 'No description available',
          url: repoData.html_url,
          homepage: repoData.homepage,
          stars: repoData.stargazers_count,
          forks: repoData.forks_count,
          language: repoData.language,
          languages: Object.keys(languages),
          topics: repoData.topics || [],
          images: images.slice(0, 3), // Take first 3 images
          createdAt: new Date(repoData.created_at).toLocaleDateString(),
          updatedAt: new Date(repoData.updated_at).toLocaleDateString(),
        };
        
        setProjectData(extractedData);
      } else {
        // For non-GitHub URLs, create a basic structure
        setProjectData({
          title: 'Custom Project',
          description: 'Please add project details manually',
          url: url,
          images: [],
          languages: [],
        });
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch project details');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectUrl.trim()) {
      setError('Please enter a valid URL');
      return;
    }
    fetchProjectDetails(projectUrl);
  };

  const saveProject = () => {
    // Save to localStorage
    const savedProjects = JSON.parse(localStorage.getItem('extractedProjects') || '[]');
    savedProjects.push({
      ...projectData,
      id: Date.now(),
      savedAt: new Date().toISOString(),
    });
    localStorage.setItem('extractedProjects', JSON.stringify(savedProjects));
    
    // Reset form
    setProjectUrl('');
    setProjectData(null);
    alert('Project saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4">
      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
          <div className="text-center">
            <img 
              src={loadingImageUrl}
              alt="Loading..."
              className="w-64 h-64 mx-auto mb-4"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="hidden">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            </div>
            <p className="text-white text-lg font-semibold">Extracting project details...</p>
            <p className="text-gray-300 text-sm mt-2">Please wait while we fetch the information</p>
          </div>
        </div>
      )}
      
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Project Details Extractor
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Submit a project URL to automatically extract details and screenshots
          </p>
        </div>

        {/* URL Input Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <FiLink className="inline mr-2" />
                Project URL (GitHub, Demo, etc.)
              </label>
              <div className="flex gap-3">
                <input
                  type="url"
                  value={projectUrl}
                  onChange={(e) => setProjectUrl(e.target.value)}
                  placeholder="https://github.com/username/repo or https://demo-url.com"
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !projectUrl.trim()}
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                >
                  <FiCode className="w-5 h-5" /> Extract Details
                </button>
              </div>
            </div>
            
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Extracted Project Details */}
        {projectData && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {projectData.title}
              </h2>
              <button
                onClick={saveProject}
                className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
              >
                <FiCheck className="w-5 h-5" /> Save Project
              </button>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {projectData.description}
              </p>
            </div>

            {/* Technologies/Languages */}
            {projectData.languages && projectData.languages.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 text-sm rounded-full font-semibold bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Topics */}
            {projectData.topics && projectData.topics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {projectData.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots/Images */}
            {projectData.images && projectData.images.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                  <FiImage /> Screenshots/Images Found
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectData.images.map((img, idx) => (
                    <div key={idx} className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.parentElement.innerHTML = '<div class="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">Failed to load</div>';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            {projectData.stars !== undefined && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">⭐ {projectData.stars}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">🍴 {projectData.forks}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Forks</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Created</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{projectData.createdAt}</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-center">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Updated</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{projectData.updatedAt}</div>
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={projectData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                View Repository
              </a>
              {projectData.homepage && (
                <a
                  href={projectData.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3 text-lg">
            📋 How to use:
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-2 list-disc list-inside">
            <li><strong>GitHub URLs:</strong> Automatically extracts repo name, description, languages, topics, stars, forks, and README images</li>
            <li><strong>Any URL:</strong> Creates a basic project entry that you can customize</li>
            <li><strong>Screenshots:</strong> For GitHub repos, extracts images from README markdown</li>
            <li><strong>Save:</strong> Click "Save Project" to store details in localStorage</li>
            <li><strong>View Saved:</strong> Access saved projects from your portfolio manager</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission;
