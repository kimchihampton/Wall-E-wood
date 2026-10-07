const STORE_CONFIG = {
    brandName: "Wall-e-Wood",
    adminPin: "12843976",
    priceA3: 100,
    priceA4: 50,
    whatsappNumber: "917209939682",
    contactPhoneDisplay: "+91 72099 39682",
    contactEmail: "myselfjyotips@gmail.com"
};

const DEFAULT_POSTERS = [
    {
        "id": "142",
        "title": "The Perks of being a wallflower",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(41).webp"
    },
    {
        "id": "141",
        "title": "CWC 2011 India",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(40).webp"
    },
    {
        "id": "140",
        "title": "Diego Maradona",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(39).webp"
    },
    {
        "id": "139",
        "title": "MS Dhoni",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 80,
        "customPriceA4": 80,
        "discountPercent": 20,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(38).webp"
    },
    {
        "id": "138",
        "title": "Rohit Sharma",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 80,
        "customPriceA4": 80,
        "discountPercent": 20,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(37).webp"
    },
    {
        "id": "137",
        "title": "Rohit Sharma",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 80,
        "customPriceA4": 80,
        "discountPercent": 20,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(36).webp"
    },
    {
        "id": "136",
        "title": "Virat Kohli",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 80,
        "customPriceA4": 80,
        "discountPercent": 20,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(35).webp"
    },
    {
        "id": "135",
        "title": "Cristiano Ronaldo",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(34).webp"
    },
    {
        "id": "134",
        "title": "Kylian Mbappe",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(33).webp"
    },
    {
        "id": "133",
        "title": "Whiplash",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(42).webp"
    },
    {
        "id": "132",
        "title": "Messi",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(31).webp"
    },
    {
        "id": "131",
        "title": "Messi Ballon D'or",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(30).webp"
    },
    {
        "id": "`130",
        "title": "Erling Haaland and Jude Bellingham",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(29).webp"
    },
    {
        "id": "129",
        "title": "Neymar Jr",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(28).webp"
    },
    {
        "id": "128",
        "title": "Christiano Ronaldo",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(27).webp"
    },
    {
        "id": "127",
        "title": "Jude Bellingham",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(26).webp"
    },
    {
        "id": "126",
        "title": "MSN (FC Barcelona)",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(25).webp"
    },
    {
        "id": "125",
        "title": "Hardik Pandya",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": true,
        "image": "images/A4/A4%20(24).webp"
    },
    {
        "id": "124",
        "title": "Ken kaneki (Tokyo Ghoul)",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(23).webp"
    },
    {
        "id": "123",
        "title": "Taxi Driver",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(22).webp"
    },
    {
        "id": "122",
        "title": "Spider-man 3",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(21).webp"
    },
    {
        "id": "121",
        "title": "Messi FIFA WC 2022",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 100,
        "discountPercent": 0,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(32).webp"
    },
    {
        "id": "120",
        "title": "The Notebook",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(19).webp"
    },
    {
        "id": "119",
        "title": "Monster",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(18).webp"
    },
    {
        "id": "118",
        "title": "Luffy",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(17).webp"
    },
    {
        "id": "117",
        "title": "Robert Lewandowski",
        "category": "Sports",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(16).webp"
    },
    {
        "id": "116",
        "title": "Capt. Levi",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 0,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(15).webp"
    },
    {
        "id": "115",
        "title": "Lakshya",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(14).webp"
    },
    {
        "id": "114",
        "title": "Maki Zenin (JJK)",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(13).webp"
    },
    {
        "id": "113",
        "title": "Itachi",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(12).webp"
    },
    {
        "id": "112",
        "title": "F1",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(11).webp"
    },
    {
        "id": "111",
        "title": "Dead Poets Society",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(10).webp"
    },
    {
        "id": "194",
        "title": "Dead Poets Society",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(9).webp"
    },
    {
        "id": "109",
        "title": "Oldboy",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(20).webp"
    },
    {
        "id": "108",
        "title": "Before Midnight",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(6).webp"
    },
    {
        "id": "107",
        "title": "Chernobyl",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(7).webp"
    },
    {
        "id": "196",
        "title": "The Dark Knight",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(8).webp"
    },
    {
        "id": "105",
        "title": "Baman Comic Edition",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 70,
        "customPriceA4": 70,
        "discountPercent": 30,
        "priority": false,
        "soldOut": true,
        "image": "images/A4/A4%20(5).webp"
    },
    {
        "id": "190",
        "title": "Eternal sunshine of a spotless mind",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A4/A4%20(4).webp"
    },
    {
        "id": "103",
        "title": "2001:A Space odyssey",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(3).webp"
    },
    {
        "id": "102",
        "title": "500 Days of summer",
        "category": "Films",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(2).webp"
    },
    {
        "id": "101",
        "title": "5 centimeters per second",
        "category": "Anime",
        "defaultSize": "A4",
        "customPriceA3": 50,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A4/A4%20(1).webp"
    },
    {
        "id": "32",
        "title": "jujutsu kaisen",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/A3%20(17).webp"
    },
    {
        "id": "31",
        "title": "Indian Cricket team t20 WC-2024",
        "category": "Sports",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/A3%20(20).webp"
    },
    {
        "id": "30",
        "title": "Indian Cricket team WC-2011",
        "category": "Sports",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/A3%20(31).webp"
    },
    {
        "id": "197",
        "title": "Apur Sansar",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Apur%20sansar.webp"
    },
    {
        "id": "28",
        "title": "Batman vs Superman",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 25,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Batman%20v%20superman.webp"
    },
    {
        "id": "27",
        "title": "Before Sunrise",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Before%20Sunrise.webp"
    },
    {
        "id": "26",
        "title": "Bleach",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Bleach.webp"
    },
    {
        "id": "25",
        "title": "Chungking Express",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Chungking%20Express.webp"
    },
    {
        "id": "24",
        "title": "Death Note",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Death%20Note.webp"
    },
    {
        "id": "23",
        "title": "Demon Slayer: To the Hashira Training",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Demon%20Slayer%20(2).webp"
    },
    {
        "id": "195",
        "title": "Grave of the Fireflies",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Grave%20of%20the%20fireflies.webp"
    },
    {
        "id": "21",
        "title": "Harry Potter",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 25,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Harry%20potter.webp"
    },
    {
        "id": "20",
        "title": "Itachi",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Itachi.webp"
    },
    {
        "id": "19",
        "title": "Kill Bill",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Kill%20bill.webp"
    },
    {
        "id": "18",
        "title": "Man of Steel",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Man%20of%20steel.webp"
    },
    {
        "id": "17",
        "title": "Naruto",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Naruto.webp"
    },
    {
        "id": "16",
        "title": "One Piece",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/One%20piece.webp"
    },
    {
        "id": "16",
        "title": "Parasite",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 0,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Parasite.webp"
    },
    {
        "id": "192",
        "title": "Pulp Fiction",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 25,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Pulp%20fiction.webp"
    },
    {
        "id": "14",
        "title": "Shanks",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": true,
        "image": "images/A3/Shanks.webp"
    },
    {
        "id": "13",
        "title": "Shawshank Redemption",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 50,
        "discountPercent": 25,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Shawshank%20redemption.webp"
    },
    {
        "id": "12",
        "title": "Solo Levling",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": true,
        "image": "images/A3/Solo%20levling.webp"
    },
    {
        "id": "11",
        "title": "Your Name",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 50,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Your%20name.webp"
    },
    {
        "id": "200",
        "title": "Attack on titan",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 25,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Attack%20on%20titan.webp"
    },
    {
        "id": "189",
        "title": "Vinland saga",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 25,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Vinland%20saga.webp"
    },
    {
        "id": "3",
        "title": "Demon slayer",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 25,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Demon%20slayer.webp"
    },
    {
        "id": "4",
        "title": "Luffy",
        "category": "Anime",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 25,
        "discountPercent": 50,
        "priority": false,
        "soldOut": false,
        "image": "images/A3/Lufy.webp"
    },
    {
        "id": "191",
        "title": "Atonement",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 38,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Atonement.webp"
    },
    {
        "id": "193",
        "title": "Messi and ronaldhinio",
        "category": "Sports",
        "defaultSize": "A3",
        "customPriceA3": 100,
        "customPriceA4": 25,
        "discountPercent": 50,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Messi%20&%20Ronaldhinio.webp"
    },
    {
        "id": "198",
        "title": "In the mood for love",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 38,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/In%20the%20mood%20for%20love.webp"
    },
    {
        "id": "8",
        "title": "Fight Club",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 38,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Fight%20Club.webp"
    },
    {
        "id": "199",
        "title": "Interstellar",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 38,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Interstellar.webp"
    },
    {
        "id": "10",
        "title": "Seven",
        "category": "Films",
        "defaultSize": "A3",
        "customPriceA3": 150,
        "customPriceA4": 38,
        "discountPercent": 25,
        "priority": true,
        "soldOut": false,
        "image": "images/A3/Seven.webp"
    }
];
// --- SAFE STORAGE & ICON HELPERS ---
function safeLoadJSON(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function refreshIcons() {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

// --- STATE ---
let posters = [...DEFAULT_POSTERS];
let bag = safeLoadJSON('Wall-e-Wood_bag', {});
let isAdminLoggedIn = sessionStorage.getItem('Wall-e-Wood_admin') === 'true';
let selectedSizes = {};
let activeCategory = 'All';
let activeSizeFilter = 'All';
let searchQuery = '';

function getAvailableSizes(poster) {
    const setting = poster.defaultSize || 'Both';
    if (setting === 'A3') return ['A3'];
    if (setting === 'A4') return ['A4'];
    return ['A3', 'A4'];
}

function normalizeImageUrl(inputUrl) {
    if (!inputUrl) return '';
    const trimmed = inputUrl.trim();
    const fileMatch = trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (fileMatch && fileMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${fileMatch[1]}&sz=w1200`;
    }
    return trimmed;
}

// --- INITIALIZE ---
window.addEventListener('DOMContentLoaded', () => {
    posters.forEach(p => {
        p.image = normalizeImageUrl(p.image);
        const avail = getAvailableSizes(p);
        selectedSizes[p.id] = avail[0];
    });

    // Remove sold-out or deleted items from bag
    Object.keys(bag).forEach(key => {
        const item = bag[key];
        const poster = posters.find(p => String(p.id) === String(item.posterId));
        if (!poster || poster.soldOut) {
            delete bag[key];
        }
    });

    syncStoreInfo();
    syncAdminUI();
    renderCatalogue();
    renderBranchPosterList();
    updateBagUI();
    refreshIcons();
});

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 2200);
}

function getPriceForPoster(poster, size) {
    if (size === 'A3' && poster && poster.customPriceA3 != null && poster.customPriceA3 !== '') {
        return Number(poster.customPriceA3);
    }
    if (size === 'A4' && poster && poster.customPriceA4 != null && poster.customPriceA4 !== '') {
        return Number(poster.customPriceA4);
    }
    return size === 'A3' ? Number(STORE_CONFIG.priceA3) : Number(STORE_CONFIG.priceA4);
}

function syncStoreInfo() {
    document.querySelectorAll('.hdr-price-a3').forEach(el => el.textContent = STORE_CONFIG.priceA3);
    document.querySelectorAll('.hdr-price-a4').forEach(el => el.textContent = STORE_CONFIG.priceA4);

    const phoneLink = document.getElementById('contactPhoneLink');
    const emailLink = document.getElementById('contactEmailLink');
    if (phoneLink) {
        phoneLink.textContent = STORE_CONFIG.contactPhoneDisplay;
        phoneLink.href = `tel:${STORE_CONFIG.contactPhoneDisplay.replace(/\s+/g, '')}`;
    }
    if (emailLink) {
        emailLink.textContent = STORE_CONFIG.contactEmail;
        emailLink.href = `mailto:${STORE_CONFIG.contactEmail}`;
    }
}

// --- ADMIN AUTHENTICATION (PIN LOCK) ---
function handleAdminTrigger() {
    if (isAdminLoggedIn) {
        togglePosterBranch();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        toggleAdminModal(true);
    }
}

function toggleAdminModal(open) {
    const modal = document.getElementById('adminLoginModal');
    const input = document.getElementById('adminPinInput');
    const err = document.getElementById('adminPinError');
    if (!modal || !input || !err) return;

    if (open) {
        input.value = '';
        err.classList.add('hidden');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => input.focus(), 50);
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function submitAdminPin(event) {
    event.preventDefault();
    const input = document.getElementById('adminPinInput');
    const err = document.getElementById('adminPinError');

    if (input.value === STORE_CONFIG.adminPin) {
        isAdminLoggedIn = true;
        sessionStorage.setItem('Wall-e-Wood_admin', 'true');
        toggleAdminModal(false);
        syncAdminUI();
        const branch = document.getElementById('posterManagerBranch');
        branch.classList.remove('hidden');
        renderBranchPosterList();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast("Admin mode unlocked!");
    } else {
        err.classList.remove('hidden');
        input.value = '';
        input.focus();
    }
}

function logoutAdmin() {
    isAdminLoggedIn = false;
    sessionStorage.removeItem('Wall-e-Wood_admin');
    document.getElementById('posterManagerBranch').classList.add('hidden');
    syncAdminUI();
    showToast("Admin mode locked");
}

function syncAdminUI() {
    const toolbarControls = document.getElementById('adminToolbarControls');
    const footerBtnText = document.getElementById('footerAdminBtnText');

    if (isAdminLoggedIn) {
        toolbarControls.classList.remove('hidden');
        toolbarControls.classList.add('inline-flex');
        if (footerBtnText) footerBtnText.textContent = "Admin (Unlocked)";
    } else {
        toolbarControls.classList.add('hidden');
        toolbarControls.classList.remove('inline-flex');
        if (footerBtnText) footerBtnText.textContent = "Admin";
    }
}

// --- MAIN SECTION POSTER ADD, PRICE/DISCOUNT & PRIORITY BRANCH ---
function togglePosterBranch() {
    if (!isAdminLoggedIn) {
        toggleAdminModal(true);
        return;
    }
    const branch = document.getElementById('posterManagerBranch');
    branch.classList.toggle('hidden');
    if (!branch.classList.contains('hidden')) {
        updateUploadDiscountPreview();
        renderBranchPosterList();
    }
}

function savePostersState() {
    try {
        localStorage.setItem('Wall-e-Wood_posters_v3', JSON.stringify(posters));
    } catch (e) {}
    renderCatalogue();
    renderBranchPosterList();
    updateBagUI();
}

function updateUploadDiscountPreview() {
    const baseA3El = document.getElementById('branchPriceA3');
    const baseA4El = document.getElementById('branchPriceA4');
    const sliderEl = document.getElementById('branchDiscountSlider');
    const labelEl = document.getElementById('branchDiscountLabel');
    const previewEl = document.getElementById('branchFinalPricePreview');

    if (!baseA3El || !baseA4El || !sliderEl || !labelEl || !previewEl) return;

    const baseA3 = Number(baseA3El.value) || 0;
    const baseA4 = Number(baseA4El.value) || 0;
    const discount = Number(sliderEl.value) || 0;

    const finalA3 = Math.round(baseA3 * (1 - discount / 100));
    const finalA4 = Math.round(baseA4 * (1 - discount / 100));

    labelEl.textContent = `${discount}% OFF`;
    previewEl.textContent = `Final: A3 ₹${finalA3} \vert{} A4 ₹${finalA4}`;
}

function updatePosterPriceInline(posterId, field, value) {
    if (!isAdminLoggedIn) return;
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster) return;
    poster[field] = Math.max(0, Number(value) || 0);
    savePostersState();
}

function addPosterFromBranch() {
    if (!isAdminLoggedIn) return;
    const idInput = document.getElementById('branchId');
    const titleInput = document.getElementById('branchTitle');
    const imgInput = document.getElementById('branchImage');
    const catSelect = document.getElementById('branchCategory');
    const sizeSelect = document.getElementById('branchSize');
    const prioCheck = document.getElementById('branchPriority');
    const soldCheck = document.getElementById('branchSoldOut');

    const title = titleInput.value.trim();
    const rawUrl = imgInput.value.trim();
    if (!title || !rawUrl) {
        showToast("Please enter Poster Title and Image Path/Link");
        return;
    }

    const baseA3 = Number(document.getElementById('branchPriceA3')?.value) || STORE_CONFIG.priceA3;
    const baseA4 = Number(document.getElementById('branchPriceA4')?.value) || STORE_CONFIG.priceA4;
    const discount = Number(document.getElementById('branchDiscountSlider')?.value) || 0;

    const finalA3 = Math.round(baseA3 * (1 - discount / 100));
    const finalA4 = Math.round(baseA4 * (1 - discount / 100));

    const newId = idInput.value.trim() || String(posters.length + 1);
    const newPoster = {
        id: newId,
        title: title,
        category: catSelect.value,
        defaultSize: sizeSelect.value,
        customPriceA3: finalA3,
        customPriceA4: finalA4,
        discountPercent: discount,
        priority: prioCheck.checked,
        soldOut: soldCheck.checked,
        image: normalizeImageUrl(rawUrl)
    };

    posters.unshift(newPoster);
    selectedSizes[newId] = getAvailableSizes(newPoster)[0];

    idInput.value = '';
    titleInput.value = '';
    imgInput.value = '';
    prioCheck.checked = false;
    soldCheck.checked = false;
    const sliderEl = document.getElementById('branchDiscountSlider');
    if (sliderEl) sliderEl.value = 0;
    updateUploadDiscountPreview();

    savePostersState();
    showToast(`Added "${title}" (A3 ₹${finalA3} / A4 ₹${finalA4})`);
}

function togglePosterCheckbox(posterId, field, isChecked) {
    if (!isAdminLoggedIn) return;
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster) return;
    poster[field] = Boolean(isChecked);

    if (field === 'soldOut' && isChecked) {
        Object.keys(bag).forEach(k => {
            if (String(bag[k].posterId) === String(posterId)) delete bag[k];
        });
        localStorage.setItem('Wall-e-Wood_bag', JSON.stringify(bag));
    }

    savePostersState();
}

function changePosterSizeSetting(posterId, newSizeSetting) {
    if (!isAdminLoggedIn) return;
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster) return;
    poster.defaultSize = newSizeSetting;
    selectedSizes[posterId] = getAvailableSizes(poster)[0];
    savePostersState();
}

function deletePosterFromBranch(posterId) {
    if (!isAdminLoggedIn) return;
    posters = posters.filter(p => String(p.id) !== String(posterId));
    savePostersState();
    showToast("Poster removed");
}

function resetToDefaultPosters() {
    if (!isAdminLoggedIn) return;
    localStorage.removeItem('Wall-e-Wood_posters_v3');
    posters = [...DEFAULT_POSTERS];
    posters.forEach(p => {
        selectedSizes[p.id] = getAvailableSizes(p)[0];
    });
    renderCatalogue();
    renderBranchPosterList();
    showToast("Reset to script.js defaults");
}

function copyPostersArrayForVSCode() {
    const codeStr = `const DEFAULT_POSTERS = ${JSON.stringify(posters, null, 4)};`;
    copyToClipboard(codeStr, "Copied DEFAULT_POSTERS code! Paste into script.js");
}

function renderBranchPosterList() {
    const container = document.getElementById('branchPosterList');
    if (!container) return;

    container.innerHTML = posters.map(p => {
        const pA3 = getPriceForPoster(p, 'A3');
        const pA4 = getPriceForPoster(p, 'A4');
        return `
        <div class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-2.5 text-xs">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <img src="${p.image}" alt="${p.title}" class="w-8 h-11 object-cover rounded bg-zinc-200 shrink-0">
                <div class="min-w-0">
                    <p class="font-bold text-[#111111] truncate">${p.title}</p>
                    <p class="text-[10px] font-mono text-zinc-400">ID: ${p.id} •${p.category}</p>
                </div>
            </div>

            <div class="flex flex-wrap items-center gap-2 shrink-0">
                <select 
                    onchange="changePosterSizeSetting('${p.id}', this.value)" 
                    class="bg-white border border-[#EAEAEA] rounded-lg px-2 py-1 text-[11px] font-semibold text-[#111111]"
                >
                    <option value="Both" ${p.defaultSize === 'Both' ? 'selected' : ''}>Both</option>
                    <option value="A3" ${p.defaultSize === 'A3' ? 'selected' : ''}>A3 Only</option>
                    <option value="A4" ${p.defaultSize === 'A4' ? 'selected' : ''}>A4 Only</option>
                </select>

                <!-- Manual Inline A3 & A4 Price Inputs -->
                <div class="flex items-center gap-1 bg-white border border-[#EAEAEA] rounded-lg px-2 py-0.5">
                    <span class="text-[10px] text-zinc-400">A3 ₹</span>
                    <input type="number" value="${pA3}" onchange="updatePosterPriceInline('${p.id}', 'customPriceA3', this.value)" class="w-12 bg-transparent font-mono text-[11px] font-semibold text-[#111111] focus:outline-none">
                </div>
                <div class="flex items-center gap-1 bg-white border border-[#EAEAEA] rounded-lg px-2 py-0.5">
                    <span class="text-[10px] text-zinc-400">A4 ₹</span>
                    <input type="number" value="${pA4}" onchange="updatePosterPriceInline('${p.id}', 'customPriceA4', this.value)" class="w-12 bg-transparent font-mono text-[11px] font-semibold text-[#111111] focus:outline-none">
                </div>

                <!-- Homepage Priority Checkbox -->
                <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${p.priority ? 'bg-amber-50 border-amber-300 text-[#111111]' : 'bg-white border-[#EAEAEA] text-zinc-600'} text-[11px] font-semibold cursor-pointer select-none">
                    <input 
                        type="checkbox" 
                        ${p.priority ? 'checked' : ''} 
                        onchange="togglePosterCheckbox('${p.id}', 'priority', this.checked)"
                        class="w-3.5 h-3.5 accent-[#111111] cursor-pointer"
                    >
                    <span>Priority</span>
                </label>

                <!-- Sold Out Checkbox -->
                <label class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border ${p.soldOut ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-white border-[#EAEAEA] text-zinc-600'} text-[11px] font-semibold cursor-pointer select-none">
                    <input 
                        type="checkbox" 
                        ${p.soldOut ? 'checked' : ''} 
                        onchange="togglePosterCheckbox('${p.id}', 'soldOut', this.checked)"
                        class="w-3.5 h-3.5 accent-rose-600 cursor-pointer"
                    >
                    <span>Sold Out</span>
                </label>

                <button onclick="deletePosterFromBranch('${p.id}')" class="p-1 text-zinc-400 hover:text-rose-600 cursor-pointer" title="Delete">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        </div>
        `;
    }).join('');

    refreshIcons();
}

// --- CATEGORY & GLOBAL SIZE FILTERING ---
function setCategory(cat) {
    activeCategory = cat;
    const categories = ['All', 'Anime', 'Films', 'Sports'];
    categories.forEach(c => {
        const deskBtn = document.getElementById(`cat-${c}`);
        const mobBtn = document.getElementById(`m-cat-${c}`);
        if (deskBtn) {
            deskBtn.className = c === cat
                ? "cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer bg-[#111111] text-white shadow-sm"
                : "cat-pill px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer text-zinc-600 hover:text-[#111111]";
        }
        if (mobBtn) {
            mobBtn.className = c === cat
                ? "px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-[#111111] text-white"
                : "px-3.5 py-1.5 rounded-full text-xs font-semibold transition bg-zinc-100 text-zinc-600";
        }
    });
    document.getElementById('activeCategoryLabel').textContent = cat === 'All' ? 'All Posters' : `${cat} Posters`;
    renderCatalogue();
}

function setGlobalSize(size) {
    activeSizeFilter = size;

    posters.forEach(p => {
        const avail = getAvailableSizes(p);
        if (size !== 'All' && avail.includes(size)) {
            selectedSizes[p.id] = size;
        } else if (!avail.includes(selectedSizes[p.id])) {
            selectedSizes[p.id] = avail[0];
        }
    });

    ['All', 'A3', 'A4'].forEach(s => {
        const dBtn = document.getElementById(`globalSize-${s}`);
        const mBtn = document.getElementById(`m-globalSize-${s}`);
        if (dBtn) {
            dBtn.className = s === size
                ? "px-2.5 py-1 rounded-lg transition cursor-pointer bg-white text-[#111111] shadow-sm"
                : "px-2.5 py-1 rounded-lg transition cursor-pointer text-zinc-500 hover:text-[#111111]";
        }
        if (mBtn) {
            mBtn.className = s === size
                ? "px-2 py-1 rounded-md bg-white text-[#111111] shadow-sm"
                : "px-2 py-1 rounded-md text-zinc-500";
        }
    });

    renderCatalogue();
    showToast(size === 'All' ? "Showing all sizes" : `Showing ${size} available posters`);
}

function selectCardSize(posterId, size) {
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster) return;
    const avail = getAvailableSizes(poster);
    if (!avail.includes(size)) return;

    selectedSizes[posterId] = size;
    renderCatalogue();
}

function handleSearch(val) {
    searchQuery = val.trim();
    const hInput = document.getElementById('headerSearchInput');
    const mInput = document.getElementById('searchInput');
    if (hInput && hInput.value !== val) hInput.value = val;
    if (mInput && mInput.value !== val) mInput.value = val;
    renderCatalogue();
}

function resetAllFilters() {
    searchQuery = '';
    const sInput = document.getElementById('searchInput');
    const hInput = document.getElementById('headerSearchInput');
    if (sInput) sInput.value = '';
    if (hInput) hInput.value = '';
    activeSizeFilter = 'All';
    ['All', 'A3', 'A4'].forEach(s => {
        const dBtn = document.getElementById(`globalSize-${s}`);
        const mBtn = document.getElementById(`m-globalSize-${s}`);
        if (dBtn) {
            dBtn.className = s === 'All'
                ? "px-2.5 py-1 rounded-lg transition cursor-pointer bg-white text-[#111111] shadow-sm"
                : "px-2.5 py-1 rounded-lg transition cursor-pointer text-zinc-500 hover:text-[#111111]";
        }
        if (mBtn) {
            mBtn.className = s === 'All'
                ? "px-2 py-1 rounded-md bg-white text-[#111111] shadow-sm"
                : "px-2 py-1 rounded-md text-zinc-500";
        }
    });
    setCategory('All');
}

function renderCatalogue() {
    const grid = document.getElementById('posterGrid');
    const emptyState = document.getElementById('emptyState');

    // Filter posters and sort by Priority (priority: true comes first on homepage)
    // Filter posters and sort by Priority first, then by ID descending
    const filtered = posters
        .filter(p => {
            const avail = getAvailableSizes(p);
            const matchCat = activeCategory === 'All' || p.category === activeCategory;
            const matchSize = activeSizeFilter === 'All' || avail.includes(activeSizeFilter);
            const matchQuery = String(p.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
                               String(p.category).toLowerCase().includes(searchQuery.toLowerCase()) ||
                               String(p.id).toLowerCase().includes(searchQuery.toLowerCase());
            return matchCat && matchSize && matchQuery;
        })
        .sort((a, b) => {
            // First, prioritize items marked as 'priority: true'
            const priorityDiff = Number(Boolean(b.priority)) - Number(Boolean(a.priority));
            if (priorityDiff !== 0) return priorityDiff;
            
            // Then, sort the remaining items by ID in descending order
            // We use parseInt to ensure accurate numerical sorting (e.g., 100 comes before 99)
            return parseInt(b.id) - parseInt(a.id);
        });

    document.getElementById('visibleCount').textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    grid.innerHTML = filtered.map(poster => {
        const avail = getAvailableSizes(poster);
        let currentSize = selectedSizes[poster.id];
        if (!avail.includes(currentSize)) {
            currentSize = avail[0];
            selectedSizes[poster.id] = currentSize;
        }

        const currentPrice = getPriceForPoster(poster, currentSize);
        const discountPct = Number(poster.discountPercent) || 0;
        const bagKey = `${poster.id}_${currentSize}`;
        const inBagQty = bag[bagKey] ? bag[bagKey].qty : 0;
        const isSoldOut = Boolean(poster.soldOut);
        const isPriority = Boolean(poster.priority);
        const fallbackImg = `https://placehold.co/600x900/F4F4F5/111111?text=${encodeURIComponent(poster.title)}`;

        const sizeSelectorHtml = avail.length === 1
            ? `<div class="inline-flex bg-zinc-100 p-0.5 rounded-lg border border-[#EAEAEA] text-[11px] font-semibold">
                   <span class="px-2.5 py-1 rounded-md bg-white text-[#111111] shadow-sm">${avail[0]} Only</span>
               </div>`
            : `<div class="inline-flex bg-zinc-100 p-0.5 rounded-lg border border-[#EAEAEA] text-[11px] font-semibold">
                   <button 
                       onclick="selectCardSize('${poster.id}', 'A3')"
                       class="px-2.5 py-1 rounded-md transition cursor-pointer ${currentSize === 'A3' ? 'bg-white text-[#111111] shadow-sm' : 'text-zinc-500 hover:text-[#111111]'}"
                   >
                       A3
                   </button>
                   <button 
                       onclick="selectCardSize('${poster.id}', 'A4')"
                       class="px-2.5 py-1 rounded-md transition cursor-pointer ${currentSize === 'A4' ? 'bg-white text-[#111111] shadow-sm' : 'text-zinc-500 hover:text-[#111111]'}"
                   >
                       A4
                   </button>
               </div>`;

        let actionButtonHtml = '';
        if (isSoldOut) {
            actionButtonHtml = `
                <button disabled class="px-3 py-1.5 rounded-lg bg-zinc-200 text-zinc-500 font-semibold text-[11px] cursor-not-allowed shrink-0">
                    Sold Out
                </button>
            `;
        } else if (inBagQty > 0) {
            actionButtonHtml = `
                <div class="inline-flex items-center bg-[#111111] text-white rounded-lg p-0.5 text-xs font-semibold">
                    <button onclick="updateBagQty('${poster.id}', '${currentSize}', -1)" class="w-6 h-6 flex items-center justify-center hover:bg-zinc-800 rounded cursor-pointer">-</button>
                    <span class="px-2 font-mono text-[11px]">${inBagQty}</span>
                    <button onclick="updateBagQty('${poster.id}', '${currentSize}', 1)" class="w-6 h-6 flex items-center justify-center hover:bg-zinc-800 rounded cursor-pointer">+</button>
                </div>
            `;
        } else {
            actionButtonHtml = `
                <button 
                    onclick="updateBagQty('${poster.id}', '${currentSize}', 1)"
                    class="px-3 py-1.5 rounded-lg bg-[#111111] hover:bg-zinc-800 text-white font-semibold text-[11px] transition cursor-pointer shrink-0"
                >
                    Add to Bag
                </button>
            `;
        }

        return `
        <div class="group bg-white border border-[#EAEAEA] rounded-2xl p-2.5 flex flex-col transition-all duration-200 hover:border-zinc-300 hover:shadow-sm ${isSoldOut ? 'opacity-75' : ''}">
            <!-- 1) 2:3 Vertical Poster Frame -->
            <div 
                onclick="openLightbox('${poster.id}')"
                class="poster-aspect w-full rounded-xl bg-zinc-100 overflow-hidden relative cursor-pointer"
            >
                <img 
                    src="${poster.image}" 
                    alt="${poster.title}" 
                    loading="lazy"
                    onerror="this.src='${fallbackImg}'"
                    class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                >
                <div class="absolute top-2.5 left-2.5 flex flex-wrap items-center gap-1">
                    <span class="px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-[#111111] border border-[#EAEAEA]">
                        ${poster.category}
                    </span>
                    ${isPriority ? `
                    <span class="px-2 py-0.5 rounded-md bg-amber-400 text-[#111111] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        ★ Featured
                    </span>
                    ` : ''}
                    ${discountPct > 0 ? `
                    <span class="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        ${discountPct}% OFF
                    </span>
                    ` : ''}
                </div>
                ${isSoldOut ? `
                <span class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Sold Out
                </span>
                ` : ''}
            </div>

            <!-- 2) Poster Name, Available Size Pill & Dynamic Price -->
            <div class="pt-3 px-1 pb-0.5 flex flex-col gap-2.5">
                <div class="flex items-start justify-between gap-2">
                    <div class="min-w-0">
                        <h3 class="font-display font-bold text-xs sm:text-sm text-[#111111] truncate" title="${poster.title}">
                            ${poster.title}
                        </h3>
                        <span class="text-[10px] font-mono text-zinc-400">ID: ${poster.id}</span>
                    </div>
                    <span class="font-mono font-bold text-xs sm:text-sm text-[#111111] shrink-0">₹${currentPrice}</span>
                </div>

                <!-- Size Pill + Add to Bag Button -->
                <div class="flex items-center justify-between gap-1.5">
                    ${sizeSelectorHtml}${actionButtonHtml}
                </div>
            </div>
        </div>
        `;
    }).join('');

    refreshIcons();
}

function updateBagQty(posterId, size, delta) {
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster || poster.soldOut) return;

    const key = `${poster.id}_${size}`;
    if (!bag[key]) {
        bag[key] = {
            posterId: poster.id,
            title: poster.title,
            category: poster.category,
            size: size,
            image: poster.image,
            qty: 0
        };
    }

    bag[key].qty += delta;
    if (bag[key].qty <= 0) {
        delete bag[key];
    } else if (delta > 0) {
        showToast(`Added ${poster.title} (${size}) to Bag`);
    }

    localStorage.setItem('Wall-e-Wood_bag', JSON.stringify(bag));
    renderCatalogue();
    updateBagUI();
}

function clearBag() {
    bag = {};
    localStorage.setItem('Wall-e-Wood_bag', JSON.stringify(bag));
    renderCatalogue();
    updateBagUI();
}

function getBagSummary() {
    let count = 0;
    let total = 0;
    const items = Object.values(bag);
    items.forEach(item => {
        const posterObj = posters.find(p => String(p.id) === String(item.posterId)) || {};
        const unitPrice = getPriceForPoster(posterObj, item.size);
        count += item.qty;
        total += item.qty * unitPrice;
    });
    return { count, total, items };
}

function updateBagUI() {
    const { count, total, items } = getBagSummary();
    document.getElementById('headerBagCount').textContent = count;
    document.getElementById('headerBagTotal').textContent = `₹${total}`;
    document.getElementById('bagFooterTotal').textContent = `₹${total}`;

    const container = document.getElementById('bagItemsContainer');
    if (items.length === 0) {
        container.innerHTML = `
            <div class="text-center py-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl">
                <p class="text-xs text-zinc-400">Your pre-order bag is empty</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(item => {
        const posterObj = posters.find(p => String(p.id) === String(item.posterId)) || {};
        const unitPrice = getPriceForPoster(posterObj, item.size);
        return `
            <div class="flex items-center justify-between gap-3 bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-2.5">
                <div class="flex items-center gap-2.5 min-w-0">
                    <img src="${item.image}" alt="${item.title}" class="w-9 h-12 object-cover rounded-md bg-zinc-200 shrink-0">
                    <div class="min-w-0">
                        <p class="text-xs font-bold text-[#111111] truncate">${item.title}</p>
                        <p class="text-[10px] font-mono text-zinc-400">ID: ${item.posterId}</p>
                        <p class="text-[11px] text-zinc-500 font-mono">${item.size} • ₹${unitPrice} ×${item.qty} = <strong class="text-[#111111]">₹${unitPrice * item.qty}</strong></p>
                    </div>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                    <button onclick="updateBagQty('${item.posterId}', '${item.size}', -1)" class="w-6 h-6 rounded-md bg-white border border-[#EAEAEA] text-xs font-bold flex items-center justify-center cursor-pointer">-</button>
                    <span class="text-xs font-mono w-5 text-center">${item.qty}</span>
                    <button onclick="updateBagQty('${item.posterId}', '${item.size}', 1)" class="w-6 h-6 rounded-md bg-[#111111] text-white text-xs font-bold flex items-center justify-center cursor-pointer">+</button>
                </div>
            </div>
        `;
    }).join('');
}

function toggleBagDrawer(open) {
    const backdrop = document.getElementById('bagDrawerBackdrop');
    if (open) {
        updateBagUI();
        backdrop.classList.remove('hidden');
    } else {
        backdrop.classList.add('hidden');
    }
}

function toggleContactModal(open) {
    const modal = document.getElementById('contactModal');
    if (open) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

// --- LIGHTBOX ---
function openLightbox(posterId) {
    const poster = posters.find(p => String(p.id) === String(posterId));
    if (!poster) return;
    const avail = getAvailableSizes(poster);
    const pA3 = getPriceForPoster(poster, 'A3');
    const pA4 = getPriceForPoster(poster, 'A4');
    const isSoldOut = Boolean(poster.soldOut);

    document.getElementById('lightboxImg').src = poster.image;
    document.getElementById('lightboxCategory').textContent = `${poster.category} • ID: ${poster.id}`;
    document.getElementById('lightboxTitle').textContent = poster.title;

    const badge = document.getElementById('lightboxSoldOutBadge');
    const actionBtns = document.getElementById('lightboxActionBtns');
    const soldOutText = document.getElementById('lightboxSoldOutText');
    const btnA3 = document.getElementById('lightboxAddA3');
    const btnA4 = document.getElementById('lightboxAddA4');

    if (isSoldOut) {
        badge.classList.remove('hidden');
        actionBtns.classList.add('hidden');
        soldOutText.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
        actionBtns.classList.remove('hidden');
        soldOutText.classList.add('hidden');

        if (avail.includes('A3')) {
            btnA3.classList.remove('hidden');
            btnA3.textContent = `+ A3 (₹${pA3})`;
            btnA3.onclick = () => { updateBagQty(poster.id, 'A3', 1); closeLightbox(); };
        } else {
            btnA3.classList.add('hidden');
        }

        if (avail.includes('A4')) {
            btnA4.classList.remove('hidden');
            btnA4.textContent = `+ A4 (₹${pA4})`;
            btnA4.onclick = () => { updateBagQty(poster.id, 'A4', 1); closeLightbox(); };
        } else {
            btnA4.classList.add('hidden');
        }
    }

    const modal = document.getElementById('lightboxModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// --- WHATSAPP & CLIPBOARD ORDER SUMMARY (WITH POSTER IDs) ---
function formatOrderSummary() {
    const { count, total, items } = getBagSummary();
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();

    const lines = [
        `*Wall-e-Wood PRE-ORDER REQUEST*`,
        `------------------------------`,
        ...items.map((item, i) => {
            const posterObj = posters.find(p => String(p.id) === String(item.posterId)) || {};
            const unitPrice = getPriceForPoster(posterObj, item.size);
            return `${i + 1}. [ID:${item.posterId}] ${item.title} (${item.size}) × ${item.qty} = ₹${unitPrice * item.qty}`;
        }),
        `------------------------------`,
        `*Total Payable:* ₹${total} (${count} posters)`,
        ``,
        `*Customer Details:*`,
        `• Name: ${name}`,
        `• Phone: ${phone}`,
        `• Address: ${address}`,
        ``,
        `Please send me the payment QR code so I can complete my payment!`
    ];
    return lines.join('\n');
}

function sendWhatsAppPreOrder() {
    const { items } = getBagSummary();
    if (items.length === 0) {
        showToast("Add at least 1 poster first");
        return;
    }
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const errEl = document.getElementById('bagError');

    if (!name || !phone || !address) {
        errEl.classList.remove('hidden');
        return;
    }
    errEl.classList.add('hidden');

    const msg = formatOrderSummary();
    const cleanWa = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanWa}?text=${encodeURIComponent(msg)}`, '_blank');
}

function copyToClipboard(text, toastMsg) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(toastMsg);
        }).catch(() => {
            fallbackCopy(text, toastMsg);
        });
    } else {
        fallbackCopy(text, toastMsg);
    }
}

function fallbackCopy(text, toastMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
        document.execCommand('copy');
        showToast(toastMsg);
    } catch (e) {
        showToast("Copy failed");
    }
    document.body.removeChild(ta);
}

function copyOrderText() {
    const { items } = getBagSummary();
    if (items.length === 0) {
        showToast("Your bag is empty");
        return;
    }
    copyToClipboard(formatOrderSummary(), "Order summary copied!");
}
