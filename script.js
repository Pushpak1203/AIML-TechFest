function registerEvent(eventNumber) {
    // Google Form links for each event
    const eventLinks = {
        1: "https://forms.gle/your_updated_google_form_link_1",
        2: "https://forms.gle/your_updated_google_form_link_2",
        3: "https://forms.gle/your_updated_google_form_link_3",
        4: "https://forms.gle/your_updated_google_form_link_4",
        5: "https://forms.gle/your_updated_google_form_link_5"

    };

    // Open the corresponding Google Form in a new tab
    if (eventLinks[eventNumber]) {
        window.open(eventLinks[eventNumber], "_blank");
    } else {
        alert("Registration link not available for this event.");
    }
}
