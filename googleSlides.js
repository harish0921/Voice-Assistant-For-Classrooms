const { google } = require('googleapis');
const slides = google.slides('v1');
const auth = new google.auth.GoogleAuth({
    keyFile: "path-to-your-service-account.json",
    scopes: ["https://www.googleapis.com/auth/presentations"]
});

async function nextSlide(presentationId) {
    const authClient = await auth.getClient();
    await slides.presentations.pages.batchUpdate({
        auth: authClient,
        presentationId: presentationId,
        requestBody: {
            requests: [{ updateSlidesPosition: { objectId: "slide-id", insertPosition: "NEXT" } }]
        }
    });
    return "Moved to the next slide!";
}

module.exports = { nextSlide };
