var data = {
    Player: [
        { Name: "Nick", Points: 18 },
        { Name: "Yuki and Friends", Points: 6 },
        { Name: "Pud", Points: 4},
        { Name: "Strollin' Outta Q1", Points: 10},
        { Name: "Dynamic Racing Sloths", Points: 10},
        { Name: "Baskin Mommins", Points: 10 }
    ],
    Driver: [
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull",
            Points: 0
        },
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren",
            Points: 2
        },
        {
            Number: 5,
            Name: "Gabriel Bortoleto",
            Team: "Kick Sauber",
            Points: 2
        },
        {
            Number: 6,
            Name: "Isaac Hadjar",
            Team: "RB",
            Points: 0
        },
        {
            Number: 7,
            Name: "Jack Doohan",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 12,
            Name: "Andrea Kimi Antonelli",
            Team: "Mercedes",
            Points: 6
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin",
            Points: 0
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari",
            Points: 0
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin",
            Points: 2
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "RB",
            Points: 4
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams",
            Points: 4
        },
        {
            Number: 27,
            Name: "Nico Hulkenberg",
            Team: "Kick Sauber",
            Points: 8
        },
        {
            Number: 30,
            Name: "Liam Lawson",
            Team: "Red Bull",
            Points: 2
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Haas",
            Points: 2
        },
        {
            Number: 43,
            Name: "Franco Colapinto",
            Team: "Alpine",
            Points: 2
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Ferrari",
            Points: 2
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Williams",
            Points: 4
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes",
            Points: 0
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren",
            Points: 0
        },
        {
            Number: 87,
            Name: "Oliver Bearman",
            Team: "Haas",
            Points: 2
        }
    ],
    Race: [
        {
            Name: "Australian GP",
            Date: "2025-03-15",
            Finish: [4, 1, 63, 12, 23, 18, 27, 16, 81, 44, 10, 22, 31, 87, 30, 5, 14, 55, 7, 6],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 18, 44, 30] },
                { Player: "Dynamic Racing Sloths", Drivers: [63, 12, 81, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Kimi Antonelli for most places gained"
           },
           {
            Name: "Chinese GP Sprint",
            Date: "2025-03-22",
            Finish: [44, 81, 1, 63, 16, 22, 12, 4, 18, 14, 23, 10, 6, 30, 87, 31, 55, 5, 27, 7],
            Picks: [
                { Player: "Nick", Drivers: [12, 4, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 12, 18, 30] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [16, 4, 87, 55] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Chinese GP",
            Date: "2025-03-23",
            Finish: [81, 4, 63, 1, 31, 12, 23, 87, 18, 55, 6, 30, 7, 5, 27, 22, 14, 16, 44, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 30, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 30, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 18, 30, 44] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 55, 87, 16] }
            ],
            BonusPoints: "+2 points for Liam Lawson for most places gained"
           },
           {
            Name: "Japanese GP",
            Date: "2025-04-05",
            Finish: [1, 4, 81, 16, 63, 12, 44, 6, 23, 87, 14, 22, 10, 55, 7, 27, 30, 31, 5, 18],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 44, 18, 22] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Jack Doohan for most places gained"
           },
           {
            Name: "Bahrain GP",
            Date: "2025-04-13",
            Finish: [81, 63, 4, 16, 44, 1, 10, 31, 22, 87, 12, 23, 6, 7, 14, 30, 18, 5, 55, 27],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [44, 22, 12, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Oliver Bearman for most places gained"
           },
           {
            Name: "Saudi Arabian GP",
            Date: "2025-04-20",
            Finish: [81, 1, 16, 4, 63, 12, 44, 55, 23, 6, 14, 30, 87, 31, 27, 18, 7, 5, 22, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 7, 22] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 7, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [12, 44, 18, 22] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [16, 4, 55, 87] }
            ],
            BonusPoints: "+2 points for LANDOOOOOOOOOOOOO for most places gained"
           },
           {
            Name: "Miami GP Sprint",
            Date: "2025-05-03",
            Finish: [4, 81, 44, 63, 18, 22, 12, 10, 27, 6, 23, 31, 30, 87, 5, 7, 1, 14, 55, 16],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [44, 22, 1, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 87, 55, 16] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Miami GP",
            Date: "2025-05-04",
            Finish: [81, 4, 63, 1, 23, 12, 16, 44, 55, 22, 6, 31, 10, 27, 14, 18, 30, 5, 87, 7],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 7] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 7] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Gasly for most places gained"
           },
           {
            Name: "Emilia Romagna GP",
            Date: "2025-05-18",
            Finish: [1, 4, 81, 44, 23, 16, 63, 55, 6, 22, 14, 27, 10, 30, 18, 43, 87, 5, 12, 31],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 18, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for YUKIIIIIIIIIIIIIIIII for most places gained"
           },
           {
            Name: "Monaco GP",
            Date: "2025-05-25",
            Finish: [4, 16, 81, 1, 44, 6, 31, 30, 23, 55, 63, 87, 43, 5, 18, 27, 22, 12, 14, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 55, 63, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Ollie Bearman for most places gained"
           },
           {
            Name: "Spanish GP",
            Date: "2025-06-01",
            Finish: [81, 4, 16, 63, 27, 44, 6, 10, 14, 1, 30, 5, 22, 55, 43, 31, 87, 12, 23, 18],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 12, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 points for Nico Hulkenberg for most places gained"
           },
           {
            Name: "Canadian GP",
            Date: "2025-06-15",
            Finish: [63, 1, 12, 81, 16, 44, 14, 27, 31, 55, 87, 22, 43, 5, 10, 6, 18, 4, 30, 23],
            Picks: [
                { Player: "Nick", Drivers: [12, 22, 43, 4] },
                { Player: "Baskin Mommins", Drivers: [63, 81, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [63, 81, 55, 12] },
                { Player: "Pud", Drivers: [16, 55, 87, 4] }
            ],
            BonusPoints: "+2 points for smooth operatoooor and Tsunoda for most places gained"
           },
           {
            Name: "Austrian GP",
            Date: "2025-06-29",
            Finish: [4, 81, 16, 44, 63, 30, 14, 5, 27, 31, 87, 6, 10, 18, 43, 22, 23, 1, 12, 55],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 43, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [44, 22, 1, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 points for Hulkenberg for most places gained"
           },
           {
            Name: "British GP",
            Date: "2025-07-",
            Finish: [4, 81, 27, 44, 1, 10, 18, 23, 14, 63, 87, 55, 31, 16, 22, 12, 6, 5, 30, 43],
            Picks: [
                { Player: "Nick", Drivers: [4, 43, 22, 12] },
                { Player: "Baskin Mommins", Drivers: [81, 23, 63, 22] },
                { Player: "Yuki and Friends", Drivers: [44, 1, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 18, 22, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 87, 55, 16] }
            ],
            BonusPoints: "+2 points for Hulkenberg for most places gained(again)"
           },
           {
            Name: "Belgian GP Sprint",
            Date: "2025-07-26",
            Finish: [1, 81, 4, 16, 31, 55, 87, 6, 5, 30, 22, 63, 18, 14, 44, 23, 12, 27, 43, 10],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 22, 63, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 22, 18, 44, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 55, 63, 12] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "None for Sprint"
           },
           {
            Name: "Belgian GP",
            Date: "2025-07-27",
            Finish: [81, 4, 16, 1, 63, 23, 44, 30, 5, 10, 87, 27, 22, 18, 31, 12, 14, 55, 43, 6],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 23, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 18, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 55, 12] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 For Hamilton for most places gained"
           },
           {
            Name: "Hungary GP",
            Date: "2025-08-03",
            Finish: [4, 81, 63, 16, 14, 5, 18, 30, 1, 12, 6, 44, 27, 55, 23, 31, 22, 43, 10, 87],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 23, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 18, 12, 44, 22] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 For Antonelli and Hulkenberg for most places gained"
           },
           {
            Name: "Dutch GP",
            Date: "2025-08-31",
            Finish: [81, 1, 6, 63, 23, 12, 87, 18, 14, 22, 31, 43, 30, 55, 27, 10, 5, 4, 16, 44],
            Picks: [
                { Player: "Nick", Drivers: [12, 22, 43, 4] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 23, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 22, 55, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 18, 22, 44] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [87, 55, 4, 16] }
            ],
            BonusPoints: "+2 For Albon"
           },
           {
            Name: "Italian GP",
            Date: "2025-09-07",
            Finish: [1, 4, 81, 16, 63, 44, 23, 5, 12, 6, 55, 87, 22, 30, 31, 10, 43, 18, 14, 27],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 23, 22] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 55, 22] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 12, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 55, 87] }
            ],
            BonusPoints: "+2 For Hadjar for most places gained"
           },
           {
            Name: "Azerbaijan GP",
            Date: "2025-09-21",
            Finish: [1, 63, 55, 12, 30, 22, 4, 44, 16, 6, 5, 87, 23, 31, 14, 27, 18, 10, 43, 81],
            Picks: [
                { Player: "Nick", Drivers: [12, 22, 4, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 22, 23, 81] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 22, 44, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 63, 55, 12, 81] },
                { Player: "Pud", Drivers: [55, 4, 16, 87] }
            ],
            BonusPoints: "+2 For Ocon and Albon"
           },
           {
            Name: "Singapore GP",
            Date: "2025-10-05",
            Finish: [63, 1, 4, 81, 12, 16, 14, 44, 87, 55, 6, 22, 18, 23, 30, 43, 5, 31, 10, 27],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 22, 23, 81] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 22, 44, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 63, 55, 12, 81] },
                { Player: "Pud", Drivers: [55, 4, 16, 87] }
            ],
            BonusPoints: "+2 for Sainz"
           },
           {
            Name: "US GP Sprint",
            Date: "2025-10-18",
            Finish: [1, 63, 55, 44, 16, 23, 22, 12, 30, 10, 5, 6, 27, 43, 87, 31, 18, 4, 81, 14],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [63, 22, 23, 81] },
                { Player: "Yuki and Friends", Drivers: [1, 55, 22, 44] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 22, 44, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 63, 55, 12, 81] },
                { Player: "Pud", Drivers: [55, 4, 16, 87] }
            ],
            BonusPoints: ""
           },
           {
            Name: "US GP",
            Date: "2025-10-18",
            Finish: [1, 4, 16, 44, 81, 63, 22, 27, 87, 14, 30, 18, 12, 23, 31, 6, 43, 5, 10, 55],
            Picks: [
                { Player: "Nick", Drivers: [4, 22, 12, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 44, 22, 18, 12] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 63, 12, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 to Stroll for most places gained"
           },
           {
            Name: "Mexican GP",
            Date: "2025-10-25",
            Finish: [4, 16, 1, 87, 81, 12, 63, 44, 31, 5, 22, 23, 6, 18, 10, 43, 55, 14, 27, 30],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 12, 63, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 to Bortoleto for most places gained"
           },
           {
            Name: "Brazil GP Sprint",
            Date: "2025-11-09",
            Finish: [4, 12, 63, 1, 16, 14, 44, 10, 18, 6, 31, 87, 22, 55, 27, 30, 23, 5, 81,43],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 12, 63, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "None for sprint"
           },
           {
            Name: "Brazil GP ",
            Date: "2025-11-09",
            Finish: [4, 12, 1, 63, 81, 87, 30, 6, 27, 10, 23, 31, 55, 14, 43, 18, 22, 44, 16, 5],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 12, 63, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 to Verstappen for most places gained"
           },
           {
            Name: "Las Vegas GP",
            Date: "2025-11-22",
            Finish: [1, 63, 12, 16, 55, 6, 27, 44, 31, 87, 14, 22, 10, 30, 43, 23, 5, 18, 4, 81],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 12, 63, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "+2 to Antonelli for most places gained"
           },
           {
            Name: "Qatar GP Sprint",
            Date: "2025-11-29",
            Finish: [81, 63, 4, 1, 22, 12, 14, 55, 6, 23, 5, 87, 16, 30, 31, 27, 44, 10, 18, 43],
            Picks: [
                { Player: "Nick", Drivers: [4, 12, 22, 43] },
                { Player: "Baskin Mommins", Drivers: [81, 63, 22, 23] },
                { Player: "Yuki and Friends", Drivers: [1, 44, 22, 55] },
                { Player: "Strollin' Outta Q1", Drivers: [ 12, 44, 22, 18] },
                { Player: "Dynamic Racing Sloths", Drivers: [ 81, 12, 63, 55] },
                { Player: "Pud", Drivers: [4, 16, 87, 55] }
            ],
            BonusPoints: "None for sprint"
           }
           
    ]
}