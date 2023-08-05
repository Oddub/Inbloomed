// navbar bundle
async function loadNavbar() {
    try {
        const response = await fetch('navbar.html');
        if (!response.ok) {
            throw new Error('Failed to fetch navbar.html');
        }
        const navbarHtml = await response.text();
        document.getElementById('navbarBundle').innerHTML = navbarHtml;
    } catch (error) {
        console.error(error);
    }
}

loadNavbar();