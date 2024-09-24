export default async (request, context) => {
    const ua = request.headers.get('user-agent');
    let isBot = false;

    // Await fetch call to ensure json is retrieved before continuing
    const response = await fetch('https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.json');

    if (response.ok) {
        const json = await response.json();
        const botUas = Object.keys(json);

        // Check user-agent using fetched botUas
        botUas.forEach(u => {
            if (ua.toLowerCase().includes(u.toLowerCase())) {
                isBot = true;
            }
        });
    } else {
        console.error('Failed to fetch bot user agents');
    }

    // Return appropriate response based on isBot flag
    return isBot ? new Response(null, { status: 401 }) : await context.next();
};
