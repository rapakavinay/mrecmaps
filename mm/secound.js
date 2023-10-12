// // JavaScript in secound.js

// // Define an object that maps keywords to target pages
// const keywordToPage = {
//     "Main_gate": "main_gate.html",
//     "Stationary": "stationary.html",
//     "ICICI_bank_Atms": "icici.html",
//     "H_S": "hs.html",
//     "Library": "library.html",
//     "Major_Auditorium": "auditorium.html",
//     "Mech_workshop": "mech_workshop.html",
//     "Canteen": "canteen.html",
//     "Football_court": "football_court.html",
//     "Faculty_parking": "faculty_parking.html",
//     "BEE_labs": "bee_labs.html",
//     "BIC": "bic.html",
//     "Bus_parking": "bus_parking.html",
//     "Student_parking": "student_parking.html",
//     "volleyball_court": "volleyball_court.html",
//     "BB_court": "bb_court.html",
//     "Badmenton_court": "badminton_court.html",
//     "Cricket_ground": "cricket_ground.html",
//     "Sports/gym": "sports_gym.html",
//     "Kabaddi_court": "kabaddi_court.html",
//     "Pharmacy": "pharmacy.html",
//     "Girls_hostel": "girls_hostel.html",
//     "CSE_block": "cse_block.html",
//     "Civil_block": "civil_block.html",
//     "MECH_Block": "mech_block.html",
//     "COE": "coe.html",
//     "MBA": "mba.html",
//     "RandD": "randd.html",
//     "Admin_block": "admin_block.html",
//     "Principal_Office": "principal_office.html"
// };

// // Add event listeners for all keyword buttons
// for (const keyword of keywords) {
//     const button = document.getElementById(keyword);
//     button.addEventListener("click", function () {
//         const targetPage = keywordToPage[keyword];
//         if (targetPage) {
//             window.location.href = third.html; // Navigate to the corresponding page
//         }
//     });
// }
function openMap(latitude, longitude) {
    // Check if the user is on an iOS device
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
        // Open Apple Maps
        window.open('https://maps.apple.com/?daddr=' + latitude + ',' + longitude);
    } else{
        // Open Google Maps
        window.open('https://www.google.com/maps/dir/?api=1&destination=' + latitude + ',' + longitude);
    } 
}