const app = new Vue({
    el: "#app",
    data: {
        linkNavbar: ["Home", "Pages", "Course Formats", "Courses", "Demos"],
        socials: ["facebook-square", "twitter", "instagram", "linkedin", "google-plus", "youtube"],
        activities: [
            {
                name: "Business",
                icon: "fas fa-chart-line"
            },
            {
                name: "Design",
                icon: "fas fa-palette"
            },
            {
                name: "Development",
                icon: "fas fa-cog"
            },
            {
                name: "Lifestyle",
                icon: "far fa-smile"
            },
            {
                name: "Office Productivity",
                icon: "fas fa-print"
            }
        ],
        cards: [
            {
                img: "895786_7b4b_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 10 & Swift 3 Developer Course",
                vote: 3,
                fullPrice: "199.99",
                price: "100"
            },
            {
                img: "246154_d8b0_3-272x161.jpg",
                category: "Development",
                title: "Web Design for Beginners: Real World Coding in HTML & CSS",
                vote: 4,
                fullPrice: "129.99",
                price: "65"
            },
            {
                img: "752950_b773-272x161.jpg",
                category: "Development",
                title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
                vote: 4,
                fullPrice: "99.99",
                price: "50"
            },
            {
                img: "1253188_58f7_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
                vote: 3,
                fullPrice: "199.99",
                price: "100"
            },
            {
                img: "919872_ed54_6-272x161.jpg",
                category: "Development",
                title: "Android Java Masterclass - Become an App Developer",
                vote: 5,
                fullPrice: "99.99",
                price: "50"
            },
            {
                img: "951684_9c1a_2-272x161.jpg",
                category: "Development",
                title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
                vote: 4,
                fullPrice: "189.99",
                price: "95"
            }
        ]
    },
    methods: {
        
    },
    mounted() {
        
    }
});