//*     Ternary Operator     *//
// Having three elements, parts, or divisions
const x = 5;

if (x > 3) {
    return "yes"
} else {
    return "No"
}

x > 3 ? "yes" : "no";

// we omitted the return; implicit return

//?Example:Let's assume we're fetching apiData

if (apiData) {
    return "yes"
} else {
    return "No"
}

apiData ? "...." : "<p>loading...</p>" // placeholder