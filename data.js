var data = {
    Player: [
        { Name: "Nick" },
        { Name: "DOD" },
        { Name: "Pud" },
        { Name: "Logan" },
        { Name: "Bridget" }
    ],
    Driver: [
        {
            Number: 4,
            Name: "Lando Norris",
            Team: "McLaren"
        },
        {
            Number: 24,
            Name: "Zhou Guanyu",
            Team: "Alfa Romeo"
        },
        {
            Number: 20,
            Name: "Kevin Magnussen",
            Team: "Haas"
        },
        {
            Number: 10,
            Name: "Pierre Gasly",
            Team: "Alpine"
        },
        {
            Number: 11,
            Name: "Sergio Perez",
            Team: "Red Bull"
        },
        {
            Number: 14,
            Name: "Fernando Alonso",
            Team: "Aston Martin"
        },
        {
            Number: 16,
            Name: "Charles LeClerc",
            Team: "Ferrari"
        },
        {
            Number: 18,
            Name: "Lance Stroll",
            Team: "Aston Martin"
        },
        {
            Number: 22,
            Name: "Yuki Tsunoda",
            Team: "AlphaTauri"
        },
        {
            Number: 31,
            Name: "Esteban Ocon",
            Team: "Alpine"
        },
        {
            Number: 1,
            Name: "Max Verstappen",
            Team: "Red Bull"
        },
        {
            Number: 44,
            Name: "Lewis Hamilton",
            Team: "Mercedes"
        },
        {
            Number: 27,
            Name: "Nico Hulkenburg",
            Team: "Haas"
        },
        {
            Number: 55,
            Name: "Carlos Sainz",
            Team: "Ferrari"
        },
        {
            Number: 21,
            Name: "Nyck de Vries",
            Team: "Alfa Tauri"
        },
        {
            Number: 40,
            Name: "Liam Lawson",
            Team: "Alfa Tauri"
        },
        {
            Number: 23,
            Name: "Alex Albon",
            Team: "Williams"
        },
        {
            Number: 77,
            Name: "Valterri Bottas",
            Team: "Alfa Romeo"
        },
        {
            Number: 63,
            Name: "George Russel",
            Team: "Mercedes"
        },
        {
            Number: 81,
            Name: "Oscar Piastri",
            Team: "Mclaren"
        },
        {
            Number: 2,
            Name: "Logan Sargeant",
            Team: "Williams"
        },
        {
            Number: 3,
            Name: "Daniel Ricciardo",
            Team: "Alfa Tauri"
        }
    ],
    Race: [
        {
            Name: "Bahrain Grand Prix",
            Date: "2023-03-05",
            Finish: [1, 11, 14, 55, 44, 18, 63, 77, 10, 23, 22, 2, 20, 21, 27, 24, 4, 31, 16, 81],
            Picks: [
                { Player: "Nick", Drivers: [11, 24, 4] },
                { Player: "Bridget", Drivers: [63, 77, 21] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 10, 81] },
                { Player: "Pud", Drivers: [55, 23, 16] }
            ]
           },
        {
            Name: "Saudi Arabian Grand Prix",
            Date: "2023-03-19",
            Finish: [11, 1,14, 63, 44, 55, 16, 31, 10, 20, 22, 27, 24, 21, 81, 2, 4, 77, 23, 18],
            Picks: [
                 { Player: "Nick", Drivers: [11, 24, 4] },
                 { Player: "Bridget", Drivers: [63, 77, 21] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 10, 81] },
                 { Player: "Pud", Drivers: [55, 16, 23] }
             ] 
        },
        {
            Name: "Australian Grand Prix",
            Date: "2023-04-1",
            Finish: [1, 44, 14, 18, 11, 4, 27, 81, 24, 22, 77, 55, 10, 31, 21, 2, 20, 63, 23, 16],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [77, 21, 63] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 81, 10] },
                { Player: "Pud", Drivers: [55, 23, 16] }
            ] 
        },
        {
            Name: "Azerbaijan Grand Prix",
            Date: "2023-04-30",
            Finish: [11, 1, 16, 14, 55, 44, 18, 63, 4, 22, 81, 23, 20, 10, 31, 2, 27, 77, 24, 21],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 21] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 81, 10] },
                { Player: "Pud", Drivers: [16, 55, 23] }
            ] 
        },
        {
            Name: "Miami Grand Prix",
            Date: "2023-05-07",
            Finish: [1, 11, 14, 63, 55, 44, 16, 10, 31, 20, 22, 18, 77, 23, 27, 24, 4, 21, 81, 2],
            Picks: [
                { Player: "Nick", Drivers: [11, 24, 4] },
                { Player: "Bridget", Drivers: [63, 77, 21] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 10, 81] },
                { Player: "Pud", Drivers: [55, 16, 23] }
            ] 
        },
        {
            Name: "Grand Prix de Monaco",
            Date: "2023-05-28",
            Finish: [1, 14, 31, 44, 63, 16, 10, 55, 4, 81, 77, 21, 24, 23, 22, 11, 27, 2, 20, 18],
            Picks: [
                { Player: "Nick", Drivers: [4, 24, 11] },
                { Player: "Bridget", Drivers: [63, 77, 21] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [31, 44, 10] },
                { Player: "Pud", Drivers: [16, 55, 23] }
            ]    
        },
        {
            Name: "Gran premio de Espana",
            Date: "2023-06-04",
            Finish: [1, 44, 63, 11, 55, 18, 14, 31, 24, 10, 16, 22, 81, 21, 27, 23, 4, 20, 77, 2],
            Picks: [
                { Player: "Nick", Drivers: [11, 24, 4] },
                { Player: "Bridget", Drivers: [63, 21, 77] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 31, 10] },
                { Player: "Pud", Drivers: [55, 16, 23] }
            ] 
        },
        {
            Name: "Grand Prix du Canada",
            Date: "2023-06-18",
            Finish: [1, 14, 44, 16, 55, 11, 23, 31, 18, 77, 81, 10, 4, 22, 27, 24, 20, 21, 63, 2],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [77, 21, 63] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10] },
                 { Player: "Pud", Drivers: [16, 55, 23] }
            ] 
        },
        {
            Name: "Grosser Preis von Osterreich",
            Date: "2023-07-02",
             Finish: [1, 16, 11, 4, 14, 55, 63, 44, 18, 10, 23, 24, 2, 31, 77, 81, 21, 20, 22, 27],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 77, 21] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 10, 31] },
                 { Player: "Pud", Drivers: [16, 55, 23] }
            ] 
        },
        {
            Name: "British Grand Prix",
            Date: "2023-07-09",
             Finish: [1, 4, 44, 81, 63, 11, 14, 23, 16, 55, 2, 77, 27, 18, 24, 22, 21, 10, 20, 31],
            Picks: [
                  { Player: "Nick", Drivers: [4, 11, 24] },
                  { Player: "Bridget", Drivers: [63, 77, 21] },
                  { Player: "DOD", Drivers: [1, 14, 22] },
                  { Player: "Logan", Drivers: [44, 10, 31] },
                  { Player: "Pud", Drivers: [23, 16, 55] }
              ] 
        }, 
        {
            Name: "Hungarian Grand Prix",
            Date: "2023-07-23",
             Finish: [1, 4, 11, 44, 81, 63, 16, 55, 14, 18, 23, 77, 3, 27, 22, 24, 20, 2, 31, 10],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 24] },
                 { Player: "Bridget", Drivers: [81, 63, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10] },
                 { Player: "Pud", Drivers: [16, 55, 23] }
             ] 
        },
        {
            Name: "Belgian Grand Prix",
            Date: "2023-07-30",
             Finish: [1, 11, 16, 44, 14, 63, 4, 31, 18, 22, 10, 77, 24, 23, 20, 3, 2, 27, 55, 81],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 77, 81] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10] },
                 { Player: "Pud", Drivers: [16, 23, 55] }
            ] 
        },
        {
            Name: "Dutch Grand Prix",
            Date: "2023-08-27",
             Finish: [1, 14, 10, 11, 55, 44, 4, 23, 81, 31, 18, 27, 40, 77, 22, 20, 63, 24, 16, 2],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [81, 77, 63] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [10, 44, 31] },
                 { Player: "Pud", Drivers: [55, 23, 16] }
             ] 
        },
        {
            Name: "Gran Premio D'Italia",
            Date: "2023-9-03",
             Finish: [1, 11, 55, 16, 63, 44, 23, 4, 14, 77, 40, 81, 2, 24, 10, 18, 27, 20, 31, 22],
            Picks: [
                { Player: "Nick", Drivers: [11, 4, 24] },
                { Player: "Bridget", Drivers: [63, 77, 81] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 10, 31] },
                { Player: "Pud", Drivers: [55, 16, 23] }
            ] 
        },
        {
            Name: "Singapore Grand Prix",
            Date: "2023-09-17",
            Finish: [55, 4, 44, 16, 1, 10, 81, 11, 40, 20, 23, 24, 27, 2, 14, 63, 77, 31, 22],
            Picks: [
                { Player: "Nick", Drivers: [4, 11, 24] },
                { Player: "Bridget", Drivers: [81, 63, 77] },
                { Player: "DOD", Drivers: [1, 14, 22] },
                { Player: "Logan", Drivers: [44, 10, 31] },
                { Player: "Pud", Drivers: [55, 16, 23] }
             ] 
        },
        {
            Name: "Japanese Grand Prix",
            Date: "2023-09-23",
            Finish: [1, 4, 81, 16, 44, 55, 63, 14, 31, 10, 40, 22, 24, 27, 20, 23, 2, 18, 11, 77],
            Picks: [
                 { Player: "Nick", Drivers: [4, 24, 11] },
                 { Player: "Bridget", Drivers: [81, 63, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10] },
                 { Player: "Pud", Drivers: [16, 55, 23] }
             ] 
        },
        {
            Name: "Qatar Grand Prix",
            Date: "2023-10-08",
            Finish: [1, 81, 4, 63, 16, 14, 31, 77, 24, 11, 18, 10, 23, 20, 22, 27, 40, 2, 44, 55],
            Picks: [
                 { Player: "Nick", Drivers: [4, 24, 11] },
                 { Player: "Bridget", Drivers: [81, 63, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [31, 10, 44] },
                 { Player: "Pud", Drivers: [16, 23, 55] }
             ] 
        },
        {
            Name: "United States Grand Prix",
            Date: "2023-10-22",
            Finish: [1, 4, 55, 11,  63, 10, 18, 22, 23, 2, 27, 77, 24, 20, 3, 14, 81, 31, 44, 16],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 24] },
                 { Player: "Bridget", Drivers: [63, 77, 81] },
                 { Player: "DOD", Drivers: [1, 22, 14] },
                 { Player: "Logan", Drivers: [10, 31, 44] },
                 { Player: "Pud", Drivers: [55, 23, 16] }
             ] 
        },
        {
            Name: "Mexican Grand Prix",
            Date: "2023-10-29",
            Finish: [1, 44, 16, 55, 4, 63, 3, 81, 23, 31, 10, 22, 27, 77, 24, 2, 18, 14, 20, 11],
            Picks: [
                 { Player: "Nick", Drivers: [4, 24, 11] },
                 { Player: "Bridget", Drivers: [63, 81, 77] },
                 { Player: "DOD", Drivers: [1, 22, 14] },
                 { Player: "Logan", Drivers: [44, 31, 10] },
                 { Player: "Pud", Drivers: [16, 55, 23] }
             ] 
        },
        {
            Name: "Grande Premio de Sao Paolo",
            Date: "2023-11-05",
            Finish: [1, 4, 14, 11, 18, 55, 10, 44, 22, 31, 2, 27, 3, 81, 63, 77, 24, 20, 23, 16],
            Picks: [
                 { Player: "Nick", Drivers: [4, 11, 24] },
                 { Player: "Bridget", Drivers: [81, 63, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [10, 44, 31 ]},
                 { Player: "Pud", Drivers: [55, 23, 16 ] }
             ] 
        },
        {
            Name: "Las Vegas Grand Prix",
            Date: "2023-11-18",
            Finish: [1, 16, 11, 31, 18, 55, 44, 63, 14, 81, 10, 23, 20, 3, 24, 2, 77, 22, 27, 4],
            Picks: [
                 { Player: "Nick", Drivers: [11, 24, 4] },
                 { Player: "Bridget", Drivers: [63, 81, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10 ]},
                 { Player: "Pud", Drivers: [16, 55, 23 ] }
             ] 
        },
        {
            Name: "Abu Dhabi Grand Prix",
            Date: "2023-11-26",
            Finish: [1, 16, 63, 11, 4, 81, 14, 22, 44, 18, 3, 31, 10, 23, 27, 2, 24, 55, 77, 20],
            Picks: [
                 { Player: "Nick", Drivers: [11, 4, 24] },
                 { Player: "Bridget", Drivers: [63, 81, 77] },
                 { Player: "DOD", Drivers: [1, 14, 22] },
                 { Player: "Logan", Drivers: [44, 31, 10 ]},
                 { Player: "Pud", Drivers: [16, 23, 55 ] }
             ] 
        }
    ]
}