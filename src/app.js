const app = new Vue({
    el: "#app",
    data: {
        linkNavbar: ["Home", "Pages", "Course Formats", "Courses", "Demos"],
        socials: ["facebook-square", "twitter", "instagram", "linkedin", "google-plus", "youtube"],
        socialsColor:["#3b5998", "#1da1f2", "#c32aa3", "#0077b5", "#db4437", "#bd081c"],
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
        categories: ["All Categories", "Business", "Design", "Development", "IT & Software", "Lifestyle", "Marketing", "Office Productivity"],
        category_selected: "All Categories",
        cardsSec4: [
            {
                img: "895786_7b4b_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 10 & Swift 3 Developer Course",
                vote: 3,
                fullPrice: "199.99",
                price: "100",
                tags: ["All Categories", "Business", "Development", "IT & Software", "Office Productivity"]
            },
            {
                img: "1561458_7f3b-272x161.jpg",
                category: "Design",
                title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
                vote: 5,
                fullPrice: "199.99",
                price: "100",
                tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
            },
            {
                img: "246154_d8b0_3-272x161.jpg",
                category: "Development",
                title: "Web Design for Beginners: Real World Coding in HTML & CSS",
                vote: 4,
                fullPrice: "129.99",
                price: "65",
                tags: ["All Categories", "Business", "Design", "Development", "IT & Software", "Office Productivity"]
            },
            {
                img: "1208228_d61c_4-272x161.jpg",
                category: "Design",
                title: "Digitally Painting Light and Color: Amateur to Master",
                vote: 4,
                fullPrice: "139.99",
                price: "70",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "186792_41e4_4-272x161.jpg",
                category: "Arts & Crafts",
                title: "Become an Arabic Calligraphy Artist from Scratch",
                vote: 5,
                fullPrice: "199.99",
                price: "199.99",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "1776542_30b1-272x161.jpg",
                category: "Google",
                title: "Google Searching Ninja!",
                vote: 3,
                fullPrice: "89.99",
                price: "45",
                tags: ["All Categories", "IT & Software", "Lifestyle", "Office Productivity"]
            },
            {
                img: "949316_2a64_11-272x161.jpg",
                category: "Arts & Crafts",
                title: "Foundations for Mastering Watercolor Painting",
                vote: 5,
                fullPrice: "19.99",
                price: "10",
                tags: ["All Categories", "Lifestyle"]
            },
            {
                img: "366802_6fcc-272x161.jpg",
                category: "Food & Beverage",
                title: "Get Wine-Smart",
                vote: 4,
                fullPrice: "49.99",
                price: "25",
                tags: ["All Categories", "Lifestyle", "Marketing"]
            },
            {
                img: "381588_2e6d_4-272x161.jpg",
                category: "Arts & Crafts",
                title: "The Colored Pencil Drawing Course",
                vote: 4,
                fullPrice: "34.99",
                price: "18",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "838056_611a_3-272x161.jpg",
                category: "Arts & Crafts",
                title: "Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
                vote: 3,
                fullPrice: "69.99",
                price: "35",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "1414956_d944_15-272x161.jpg",
                category: "Arts & Crafts",
                title: "Mastering Brushstrokes - Part 1",
                vote: 5,
                fullPrice: "19.99",
                price: "10",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "1109398_4c13-272x161.jpg",
                category: "Arts & Crafts",
                title: "Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
                vote: 5,
                fullPrice: "69.99",
                price: "35",
                tags: ["All Categories", "Design", "Lifestyle"]
            },
            {
                img: "752950_b773-272x161.jpg",
                category: "Development",
                title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
                vote: 4,
                fullPrice: "99.99",
                price: "50",
                tags: ["Development", "IT & Software", "Marketing", "Office Productivity"]
            },
            {
                img: "1253188_58f7_2-272x161.jpg",
                category: "Development",
                title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
                vote: 3,
                fullPrice: "199.99",
                price: "100",
                tags: ["Business", "Design", "Development", "IT & Software", "Office Productivity"]
            },
            {
                img: "919872_ed54_6-272x161.jpg",
                category: "Development",
                title: "Android Java Masterclass - Become an App Developer",
                vote: 5,
                fullPrice: "99.99",
                price: "50",
                tags: ["Business", "Design", "Development", "IT & Software", "Office Productivity"]
            },
            {
                img: "951684_9c1a_2-272x161.jpg",
                category: "Development",
                title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
                vote: 4,
                fullPrice: "189.99",
                price: "95",
                tags: ["Business", "Development", "IT & Software", "Office Productivity"]
            }
        ],
        index_sec_5: 0
    },
    methods: {
        select_category(category) {
            this.category_selected = category;
            //console.log(this.category_selected);
        },
        index_5_add() {
            if (this.index_sec_5 === this.cardsSec4.length -1) {
                return this.index_sec_5 = 0;
            }
            return this.index_sec_5++;
        },
        index_5_remove() {
            if (this.index_sec_5 === 0) {
                return this.index_sec_5 = this.cardsSec4.length -1;
            }
            return this.index_sec_5 -= 1;
        },
        showAll() {
            this.cardsSec4[this.cardsSec4.length - 1].tags.push("All Categories");
            this.cardsSec4[this.cardsSec4.length - 2].tags.push("All Categories");
            this.cardsSec4[this.cardsSec4.length - 3].tags.push("All Categories");
            this.cardsSec4[this.cardsSec4.length - 4].tags.push("All Categories");

            document.getElementById("mostra_tutti").style.display = "none";
            document.getElementById("mostra_meno").style.display = "block";
        },
        showLess() {
            this.cardsSec4[this.cardsSec4.length - 1].tags.pop();
            this.cardsSec4[this.cardsSec4.length - 2].tags.pop();
            this.cardsSec4[this.cardsSec4.length - 3].tags.pop();
            this.cardsSec4[this.cardsSec4.length - 4].tags.pop();

            document.getElementById("mostra_tutti").style.display = "block";
            document.getElementById("mostra_meno").style.display = "none";
        },
        coloraSocial(indexx) {
            let colore = this.socialsColor[indexx];
            document.getElementById("social" + indexx).style.color = colore;
        },
        scoloraSocial(indexx) {
            document.getElementById("social" + indexx).style.color = "#aaaaaa";
        }
    },
    mounted() {
        
    }
});