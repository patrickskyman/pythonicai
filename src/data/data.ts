export const navItems = [
    { 
        href: '/',
        label: 'Home',
        sub:[
            { href: '/', label: 'Business Blog' },
            { href: '#', label: 'Personal Blog' },
        ],
     },
    { 
        href: '#',
        label: 'Pages',
        sub:[
            { href: '/category', label: 'Category Page' },
            { href: '#', label: 'About Us' },
            { href: '#', label: 'Author Page' },
            { href: '#', label: 'Search Page' },
            { href: '#', label: 'Sign In' },
            { href: '#', label: 'Sign Up' },
            { href: '#', label: 'Style Guide Page' },
            { href: '#', label: 'Privacy & Policy Page' },
            { href: '#', label: 'Error Page' },
        ]
    },
    { 
        href: '#',
        label: 'Blogs',
        sub:[
            { href: '/blog-single', label: 'Blog Details One' },
            { href: '#', label: 'Blog Details Two' },
            { href: '/blog-three', label: 'Blog Details Three' },
            { href: '#', label: 'Blog Details Four' },
        ]
    },
    {
        href: '#',
        label: 'Support',
        sub:[]
    }
]

export const articles = [
    {
        'href': '/blog-single',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Introduction to Linear Regression for Beginners',
        'description': 'A beginner-friendly tutorial on Linear Regression using Python and scikit-learn...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI & Machine Learning',
        'buttons': {
            'text': 'text-blue-500',
            'bg': 'bg-blue-50'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Building Neural Networks with TensorFlow',
        'description': 'Explore the power of neural networks and deep learning using TensorFlow in Python...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'Deep Learning',
        'buttons': {
            'text': 'text-blue-500',
            'bg': 'bg-blue-50'
        }
    },
    {
        'href': '/blog-single',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Mastering Sentiment Analysis with Transformers',
        'description': 'Dive deep into sentiment analysis using transformers and natural language processing in Python...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'NLP',
        'buttons': {
            'text': 'text-blue-500',
            'bg': 'bg-blue-50'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Optimizing Machine Learning Models for Better Accuracy',
        'description': 'Learn the techniques to optimize your machine learning models and improve performance...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI Optimization',
        'buttons': {
            'text': 'text-primary',
            'bg': 'bg-primary/[0.08]'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Using AI in Travel Recommendation Systems',
        'description': 'Explore how AI is transforming travel recommendations with personalized suggestions...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI in Travel',
        'buttons': {
            'text': 'text-green-500',
            'bg': 'bg-green-500/[0.08]'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'AI-Driven Travel Experience Enhancement',
        'description': 'Learn how artificial intelligence is revolutionizing the travel experience for users...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI in Travel',
        'buttons': {
            'text': 'text-green-500',
            'bg': 'bg-green-500/[0.08]'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'AI-Powered Health Monitoring Solutions',
        'description': 'Discover AI-powered health monitoring systems and their role in personalized healthcare...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI in Healthcare',
        'buttons': {
            'text': 'text-pink',
            'bg': 'bg-pink/[0.08]'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'Cultural Impact of AI',
        'description': 'Understand the broader cultural implications of artificial intelligence on society...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI & Culture',
        'buttons': {
            'text': 'text-yellow-500',
            'bg': 'bg-yellow-50'
        }
    },
    {
        'href': '/blog-three',
        'images': '/images/electronics/iphonetr.jpeg',
        'title': 'AI in Cultural Heritage Preservation',
        'description': 'Learn how artificial intelligence is being used to preserve and restore cultural heritage...',
        'author': {
            'name': 'Adrio Devid',
            'image': '/images/electronics/iphonetr.jpeg',
            'href': '#',
        },
        'date': 'Sep 10, 2025',
        'category': 'AI & Culture',
        'buttons': {
            'text': 'text-yellow-500',
            'bg': 'bg-yellow-50'
        }
    }
]


export const categories = [
    {id: 1, name: 'Technology'},
    {id: 2, name: 'Lifestyle'},
    {id: 3, name: 'Travel'},
    {id: 4, name: 'Health'},
    {id: 5, name: 'Culture'},
]