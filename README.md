# MAGNEWS - Modern News Website

A professional, responsive news website built with React featuring a modern design and comprehensive news coverage.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Pages**: Home, News, and Entertainment sections
- **Category Filtering**: Filter news by different categories
- **Interactive Elements**: Clickable logos, search functionality, and hover effects
- **Professional Color Scheme**: Consistent branding throughout
- **Automated Content Uploads**: Daily article publishing through **n8n automation**

## 🚀 Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3 with CSS Variables for theming
- **Routing**: React Router
- **Icons**: Unicode emojis and symbols
- **Images**: Unsplash API for high-quality images
- **Backend Automation**: [n8n](https://n8n.io/) (automatically adds new articles daily)

## ⚙️ Automation Workflow (n8n)

This website is connected to an **n8n backend workflow** which automates content updates:
- Automatically publishes **2 new articles every day**
- Articles are fetched, processed, and uploaded seamlessly
- Keeps the website updated without manual effort

## 📱 Pages

### Home Page (`/`)
- Featured news articles
- Hero section with breaking news
- News grid layout
- Sidebar with additional content

<img width="1262" height="620" alt="image" src="https://github.com/user-attachments/assets/8bd81290-10c5-4faa-8d4b-c67a36fbb6d9" />


### News Page (`/news`)
- Comprehensive news coverage
- Category filtering (Breaking, Politics, World, Business, Technology, Health, Sports)
- Featured article section
- Responsive article grid

### Entertainment Page (`/entertainment`)
- Entertainment news and updates
- Category filtering (Movies, TV Shows, Music, Celebrities, Gaming, Books, Events)
- Glamorous design with gradient backgrounds
- Interactive elements

## 🎨 Design Features

- **Color Scheme**: Professional dark blue-gray (`#2c3e50`) and green (`#4CAF50`) branding
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Gradients**: Beautiful gradient backgrounds for article cards
- **Glassmorphism**: Modern glass-like effects on entertainment page

## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 📰 News Page
![News Page](screenshots/news.png)

### 🎬 Entertainment Page
![Entertainment Page](screenshots/entertainment.png)


## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/samiullah6866/Article_Website.git
cd Article_Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── Hero.js & Hero.css
│   ├── NewsSection.js & NewsSection.css
│   ├── NewsPage.js & NewsPage.css
│   ├── EntertainmentPage.js & EntertainmentPage.css
│   ├── Sidebar.js & Sidebar.css
│   └── Footer.js & Footer.css
├── styles/
│   └── theme.css
├── App.js & App.css
└── index.js
```

## 🎯 Key Components

- **Header**: Navigation bar with logo, search, and menu items
- **Hero**: Featured article section with image overlays
- **NewsSection**: Grid of news articles with categories
- **NewsPage**: Dedicated news page with filtering
- **EntertainmentPage**: Entertainment-focused page with vibrant design
- **Sidebar**: Additional content and links
- **Footer**: Site information and social links



## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Samiullah**
- GitHub: [@samiullah6866](https://github.com/samiullah6866)
- Email: samiullah6866@example.com

## 🙏 Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons and symbols from Unicode
- Inspiration from modern news websites

---

⭐ If you found this project helpful, please give it a star!
