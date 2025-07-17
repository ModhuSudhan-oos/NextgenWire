// tools.js

// Dummy data for AI tools (replace with Firebase data for admin panel future)
const allTools = [
    {
        id: '1',
        image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=AI+Writer',
        title: 'AI Writer Pro',
        description: 'Advanced AI for generating high-quality articles, blogs, and marketing copy.',
        category: 'Writing',
        link: 'https://www.example.com/aiwriter'
    },
    {
        id: '2',
        image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=SEO+Master',
        title: 'SEO Master',
        description: 'Optimize your website for search engines with AI-powered keyword research and content analysis.',
        category: 'SEO',
        link: 'https://www.example.com/seomaster'
    },
    {
        id: '3',
        image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Image+Gen',
        title: 'PixelArt AI',
        description: 'Create stunning images and digital art from text descriptions with powerful AI.',
        category: 'Image',
        link: 'https://www.example.com/pixelart'
    },
    {
        id: '4',
        image: 'https://via.placeholder.com/150/FFFF00/000000?text=Audio+Studio',
        title: 'VoiceSynth Studio',
        description: 'Generate realistic voiceovers and audio content for podcasts, videos, and more.',
        category: 'Audio',
        link: 'https://www.example.com/voicesynth'
    },
    {
        id: '5',
        image: 'https://via.placeholder.com/150/00FFFF/000000?text=Video+Edit',
        title: 'Cinebot Editor',
        description: 'Automate video editing tasks, add effects, and generate captions with intelligent AI.',
        category: 'Video',
        link: 'https://www.example.com/cinebot'
    },
    {
        id: '6',
        image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Code+Gen',
        title: 'CodePilot AI',
        description: 'Write, debug, and optimize code faster with AI suggestions and auto-completion.',
        category: 'Code',
        link: 'https://www.example.com/codepilot'
    },
    {
        id: '7',
        image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Marketing',
        title: 'MarketGains AI',
        description: 'Boost your marketing campaigns with AI-driven insights and content generation.',
        category: 'Marketing',
        link: 'https://www.example.com/marketgains'
    },
    {
        id: '8',
        image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Productivity',
        title: 'TaskFlow AI',
        description: 'Streamline your daily tasks, manage projects, and automate workflows.',
        category: 'Productivity',
        link: 'https://www.example.com/taskflow'
    },
    {
        id: '9',
        image: 'https://via.placeholder.com/150/008080/FFFFFF?text=Education',
        title: 'EduMentor AI',
        description: 'Personalized learning paths, automated grading, and educational content creation.',
        category: 'Education',
        link: 'https://www.example.com/edumentor'
    },
    {
        id: '10',
        image: 'https://via.placeholder.com/150/808000/FFFFFF?text=Design',
        title: 'CanvasMind AI',
        description: 'Generate unique design concepts, logos, and UI elements with AI assistance.',
        category: 'Design',
        link: 'https://www.example.com/canvasmind'
    },
    {
        id: '11',
        image: 'https://via.placeholder.com/150/FFC0CB/000000?text=Customer+S',
        title: 'ChatBot Pro',
        description: 'Enhance customer support with intelligent chatbots and automated responses.',
        category: 'Customer Support',
        link: 'https://www.example.com/chatbotpro'
    },
    {
        id: '12',
        image: 'https://via.placeholder.com/150/A020F0/FFFFFF?text=Research',
        title: 'Insight AI',
        description: 'Accelerate research with AI-powered data analysis, summarization, and trend identification.',
        category: 'Research',
        link: 'https://www.example.com/insightai'
    },
    {
        id: '13',
        image: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Healthcare',
        title: 'MediDiagnose AI',
        description: 'AI-assisted diagnosis, treatment planning, and medical research.',
        category: 'Healthcare',
        link: 'https://www.example.com/medidiagnose'
    },
    {
        id: '14',
        image: 'https://via.placeholder.com/150/2E8B57/FFFFFF?text=Finance',
        title: 'FinAdvisor AI',
        description: 'Personalized financial advice, investment analysis, and fraud detection.',
        category: 'Finance',
        link: 'https://www.example.com/finadvisor'
    }
    // Add more tools as needed, up to 12 initially, but good to have more for filtering
];

const toolsContainer = document.getElementById('tools-container');
const categoriesContainer = document.getElementById('categories-container');
const noToolsMessage = document.getElementById('no-tools-message');

let currentActiveCategory = 'All'; // Default category

// Function to render tool cards
function renderTools(toolsToDisplay) {
    toolsContainer.innerHTML = ''; // Clear previous tools
    if (toolsToDisplay.length === 0) {
        noToolsMessage.classList.remove('hidden');
        return;
    } else {
        noToolsMessage.classList.add('hidden');
    }

    toolsToDisplay.slice(0, 12).forEach(tool => { // Display max 12 tools
        const toolCard = `
            <div class="tool-card bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300">
                <img src="${tool.image}" alt="${tool.title}" class="w-24 h-24 object-contain mb-4 rounded-lg">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">${tool.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">${tool.description}</p>
                <span class="inline-block bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    ${tool.category}
                </span>
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer"
                   class="mt-auto bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
                    Visit Tool
                    <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                </a>
            </div>
        `;
        toolsContainer.innerHTML += toolCard;
    });
}

// Function to render category buttons
function renderCategories() {
    // Get unique categories and add 'All'
    const categories = ['All', ...new Set(allTools.map(tool => tool.category))];
    categoriesContainer.innerHTML = ''; // Clear previous categories

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.classList.add('category-btn', 'px-5', 'py-2', 'rounded-full', 'border', 'border-gray-300', 'dark:border-gray-700',
                             'text-gray-700', 'dark:text-gray-300', 'hover:bg-blue-100', 'dark:hover:bg-gray-700',
                             'transition-colors', 'duration-200', 'focus:outline-none');
        if (category === currentActiveCategory) {
            button.classList.add('active'); // Apply active class
        }
        button.addEventListener('click', () => {
            filterTools(category);
            // Update active state
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        categoriesContainer.appendChild(button);
    });
}

// Function to filter tools by category
function filterTools(category) {
    currentActiveCategory = category;
    let filtered = [];
    if (category === 'All') {
        filtered = allTools;
    } else {
        filtered = allTools.filter(tool => tool.category === category);
    }
    renderTools(filtered);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    filterTools(currentActiveCategory); // Display 'All' tools on initial load
});

// Future: Firebase integration for tool management
// This section is for future expansion as requested ("Code should support future Firebase-based tool management from admin")
/*
async function fetchToolsFromFirebase() {
    try {
        const toolsRef = db.collection('ai_tools'); // Assuming 'ai_tools' collection
        const snapshot = await toolsRef.orderBy('title').limit(12).get(); // Limit to 12
        const fetchedTools = [];
        snapshot.forEach(doc => {
            fetchedTools.push({ id: doc.id, ...doc.data() });
        });
        allTools = fetchedTools; // Overwrite dummy data
        renderCategories();
        filterTools(currentActiveCategory);
    } catch (error) {
        console.error("Error fetching tools from Firebase: ", error);
        // Fallback to dummy data if Firebase fetch fails
        renderCategories();
        filterTools(currentActiveCategory);
    }
}

// Uncomment and call fetchToolsFromFirebase() instead of initial filterTools()
// once you have a Firebase backend set up with tools data.
// document.addEventListener('DOMContentLoaded', fetchToolsFromFirebase);
*/
