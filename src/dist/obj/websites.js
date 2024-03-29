const websites = [
    {
        id: 1,
        name: 'Meshek Almog',
        src: '../img/websites/almog.jpg',
        url: 'https://meshekalmog.co.il/',
        form: 'https://meshekalmog.co.il/groups/14/6111177771a96b07d8def610',
        github: null,
        // technologies: ['React (Redux, Hooks)', 'React-Bootstrap', 'mdbReact', 'Web Api', 'CSS', 'MongoDB', ' Node.js', 'Axios'],
        technologies: ['React JS (Redux, Hooks, Axios)', 'MongoDB', ' Node.js', 'Express.js', 'mdbReact'],
        year: '2020-2022',
        frame: 'Personal Project',
        description: `A website for my family's farm`,
        // background: 'linear-gradient(90deg, rgb(2, 0, 36), rgb(9, 121, 59) 68%, rgb(0 212 255 / 16%))',
        background: 'transparent',
        login: null
    },
    {
        id: 17,
        name: 'EasyTest',
        src: '../img/websites/driving.png',
        url: 'https://easy-test-israel.herokuapp.com/',
        form: null,
        github: 'https://github.com/nir11/EasyTest',
        technologies: ['React JS (Redux, Hooks, Axios)', 'Bootstrap', 'Node.js', `Express`, 'MongoDB, Geolocation API, Google Maps'],
        year: '2022',
        frame: 'Personal Project',
        description: `Making an appointment for a Llicensing Test `,
        background: '#212529',
        login: null
    },
    {
        id: 2,
        name: 'Weather Forecast',
        src: '../img/websites/weather.jpg',
        url: 'https://weather-forecast-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/Weather-Forecast',
        technologies: ['React JS (Redux, Hooks, Axios)', 'Bootstrap', `AccuWeather API (3 APIs)`, 'Geolocation API'],
        year: '2021',
        frame: 'Personal Project',
        description: `Using 4 different APIs`,
        background: '#212529',
        login: null
    },
    {
        id: 15,
        name: 'The Breaking Bad',
        src: '../img/websites/breaking_bad.jpg',
        url: 'https://the-breaking-bad-episodes.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/The-Breaking-Bad',
        technologies: ['React-Redux', 'JavaScript', 'Bootstrap', 'The Breaking Bad API'],
        year: '2021',
        frame: 'Personal Project',
        description: 'All Episodes and Characters of The Breaking Bad',
        background: '#212529',
        login: null
    },
    {
        id: 16,
        name: 'Spotify Playlists Globally',
        src: '../img/websites/spotify.JPG',
        url: 'https://spotify-platylists-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/Spotify-Playlists',
        technologies: ['React JS', 'Spotify APIs', 'Sass', 'Bootstrap'],
        year: '2021',
        frame: 'Personal Project',
        description: 'Using 4 different APIs',
    },
    {
        id: 4,
        name: 'E-Commerce demo',
        src: '../img/websites/ecommerce.jpg',
        url: 'https://e-commerce-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/E-commerce-site',
        technologies: ['React-Redux', 'JavaScript', 'mdbReact'],
        year: '2021',
        frame: 'Personal Project',
        description: null,
        background: '#212529',
        login: null
    },
    {
        id: 3,
        name: 'Tic Tac Toe',
        src: '../img/websites/ticTacToe.jpg',
        url: 'https://tictactoe-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/Tic-Tac-Toe',
        technologies: ['React JS', 'JavaScript', 'Bootstrap'],
        year: '2021',
        frame: 'Personal Project',
        description: 'A Tic Tac Toe game.',
        background: '#212529',
        login: null
    },
    // {
    //     id: 4,
    //     name: 'News Api',
    //     src: '../img/websites/articles.jpg',
    //     url: 'https://my-api-website.netlify.app/',
    //     form: null,
    //     github: 'https://github.com/asaf6024/News-Api',
    //     technologies: ['React JS (Redux, Hooks)', 'JavaScript', 'Rest Api'],
    //     year: '2021',
    //     frame: 'Personal Project',
    //     description: null,
    //     background: '#212529',
    //     login: null
    // },
    {
        id: 5,
        name: 'Meme Generator',
        src: '../img/websites/meme.jpg',
        url: 'https://meme-generator-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/Meme-Genarator',
        technologies: ['React JS', 'Css', 'mdbReact', 'Rest Api'],
        year: '2021',
        frame: 'Personal Project',
        description: null,
        background: 'linear-gradient(90deg,rgb(94 120 88 / 25%) 0%,rgb(78 81 114) 0%,rgb(124 55 55) 23%,rgba(15, 36, 55, 1) 74%)',
        login: null
    },
    {
        id: 14,
        name: `ATMs in Israel`,
        src: '../img/websites/findATM.JPG',
        url: 'https://find-atm-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/Find-ATM',
        technologies: ['React JS', 'Material UI', 'Google Autocomplete API', `gov.il ATMs API`],
        year: '2021',
        frame: 'Personal Project',
        description: '**Run Chrome browser without CORS** to run this App ',
        background: '#8a2be2',
        login: null
    },


    {
        id: 6,
        name: 'Styled-Components',
        src: '../img/websites/styled-components.JPG',
        url: 'https://styled-component-asaf.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/styled-components',
        technologies: ['styled-components', 'React JS'],
        year: '2021',
        frame: 'Personal Project',
        description: null,
        background: '#fd7e14',
        login: null
    },
    {
        id: 7,
        name: 'Sass Website',
        src: '../img/websites/sass.jpg',
        url: 'https://my-sass-website.netlify.app/',
        form: null,
        github: 'https://github.com/asaf6024/My-Sass-Website',
        technologies: ['Sass', 'HTML'],
        year: '2021',
        frame: 'Personal Project',
        description: null,
        background: '#fd7e14',
        login: null
    },
    {
        id: 8,
        name: 'Company Website',
        src: '../img/websites/eventact.jpg',
        url: 'https://eventact.com/',
        form: null,
        github: null,
        technologies: ['JavaScript', 'Angular', 'CSS'],
        year: '2020 - 2018',
        frame: 'Developed at Eventact',
        description: 'Maintenance, QA and Content updates',
        background: '#002448',
        login: null
    },
    {
        id: 9,
        name: 'HP Event Website',
        src: '../img/websites/hp.jpg',
        url: 'https://ws.eventact.com/vipevent',
        form: null,
        github: null,
        technologies: ['HTML', 'Bootstrap 3', 'CSS'],
        year: '2019',
        frame: 'Developed at Eventact',
        description: 'Build & Maintenance',
        background: '#F48221',
        login: null
    },
    {
        id: 10,
        name: 'Employees Website',
        src: '../img/websites/technicians.jpg',
        url: 'http://regye.com/tech2/',
        form: null,
        github: null,
        technologies: ['JavaScript', 'jQuery', 'Bootstrap 3'],
        year: '2020 - 2018',
        frame: 'Developed at Eventact',
        description: 'Build & Maintenance',
        background: '#343a40',
        login: null
    },

    {
        id: 11,
        name: 'Customers help Website',
        src: '../img/websites/customers.jpg',
        url: 'https://help.eventact.com/he',
        form: null,
        github: null,
        technologies: ['HTML', 'JavaScript', 'Bootstrap 3', 'CSS'],
        year: '2020 - 2018',
        frame: 'Developed at Eventact',
        description: 'Build & Maintenance',
        background: '#111',
        login: null
    },
    {
        id: 12,
        name: 'Registration System',
        src: '../img/websites/office.jpg',
        url: 'https://office.eventact.com',
        form: null,
        github: null,
        technologies: ['C#', 'SQL Server', 'JavaScript', 'Bootstrap 3'],
        year: '2020 - 2018',
        frame: 'Developed at Eventact',
        description: 'Maintenance, QA and Content updates',
        background: '#757575',
        login: null
    },
    {
        id: 13,
        name: 'Final Project Website & App',
        src: '../img/websites/fixme.jpg',
        url: 'http://proj.ruppin.ac.il/bgroup46/test1/WEB/Login.aspx',
        form: null,
        github: null,
        technologies: ['C#', 'SQL Server', 'JavaScript', 'Ajax'],
        year: '2016 - 2017',
        frame: 'Bachelor Degree',
        description: null,
        background: '#337ab7',
        login: {
            userName: 201082005,
            password: 8888,
            qrCode: '../img/websites/QrFixMe.jpg'
        },

    }



]
export default websites