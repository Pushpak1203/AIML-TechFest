function registerEvent(eventNumber) {
    // Google Form links for each event
    const eventLinks = {
        1: "https://forms.gle/JukHnJrbxzGvgLJL6",
        2: "https://forms.gle/uJVbMMdSgAftfB3p6",
        3: "https://forms.gle/bNCsGT6KhkjFKo9M8",
        4: "https://forms.gle/PPhKRdCqKfp5r8Ba8",
        5: "https://forms.gle/r8Q1eJGLNPLP1Mjj8"

    };

    // Open the corresponding Google Form in a new tab
    if (eventLinks[eventNumber]) {
        window.open(eventLinks[eventNumber], "_blank");
    } else {
        alert("Registration link not available for this event.");
    }
}
