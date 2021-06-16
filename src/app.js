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
        ],
        categories: ["All Categories", "Business", "Design", "Development", "IT & Software", "Lifestyle", "Marketing", "Office Productivity"],
        category_selected: "All Categories",
        cardsSec4: [
            {
                img: "895786_7b4b_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 10 & Swift 3 Developer Course",
                vote: 3,
                fullPrice: "199.99",
                price: "100"
            },
            {
                img: "1561458_7f3b-272x161.jpg",
                category: "Design",
                title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
                vote: 5,
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
                img: "1208228_d61c_4-272x161.jpg",
                category: "Design",
                title: "Digitally Painting Light and Color: Amateur to Master",
                vote: 4,
                fullPrice: "139.99",
                price: "70"
            },
            {
                img: "186792_41e4_4-272x161.jpg",
                category: "Arts & Crafts",
                title: "Become an Arabic Calligraphy Artist from Scratch",
                vote: 5,
                fullPrice: "199.99",
                price: "199.99"
            },
            {
                img: "1776542_30b1-272x161.jpg",
                category: "Google",
                title: "Google Searching Ninja!",
                vote: 3,
                fullPrice: "89.99",
                price: "45"
            },
            {
                img: "949316_2a64_11-272x161.jpg",
                category: "Arts & Crafts",
                title: "Foundations for Mastering Watercolor Painting",
                vote: 5,
                fullPrice: "19.99",
                price: "10"
            },
            {
                img: "366802_6fcc-272x161.jpg",
                category: "Food & Beverage",
                title: "Get Wine-Smart",
                vote: 4,
                fullPrice: "49.99",
                price: "25"
            },
            {
                img: "381588_2e6d_4-272x161.jpg",
                category: "Arts & Crafts",
                title: "The Colored Pencil Drawing Course",
                vote: 4,
                fullPrice: "34.99",
                price: "18"
            },
            {
                img: "838056_611a_3-272x161.jpg",
                category: "Arts & Crafts",
                title: "Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
                vote: 3,
                fullPrice: "69.99",
                price: "35"
            },
            {
                img: "1414956_d944_15-272x161.jpg",
                category: "Arts & Crafts",
                title: "Mastering Brushstrokes - Part 1",
                vote: 5,
                fullPrice: "19.99",
                price: "10"
            },
            {
                img: "1109398_4c13-272x161.jpg",
                category: "Arts & Crafts",
                title: "Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
                vote: 5,
                fullPrice: "69.99",
                price: "35"
            },
            /* {
                img: "752950_b773-272x161.jpg",
                category: "Development",
                title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
                vote: 4,
                fullPrice: "99.99",
                price: "50"
            }, */
            /* {
                img: "1253188_58f7_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
                vote: 3,
                fullPrice: "199.99",
                price: "100"
            }, */
            /* {
                img: "919872_ed54_6-272x161.jpg",
                category: "Development",
                title: "Android Java Masterclass - Become an App Developer",
                vote: 5,
                fullPrice: "99.99",
                price: "50"
            }, */
            /* {
                img: "951684_9c1a_2-272x161.jpg",
                category: "Development",
                title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
                vote: 4,
                fullPrice: "189.99",
                price: "95"
            } */
        ]
    },
    methods: {
        select_category(category) {
            this.category_selected = category;
            //console.log(this.category_selected);
        }
    },
    mounted() {
        
    }
});