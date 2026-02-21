// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fake form submit (client-side only placeholder)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Thanks — we’ll reach out soon.";
    form.reset();
});

// Sample mini chart for “analytics” feel
const ctx = document.getElementById("sampleChart").getContext("2d");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        datasets: [
            {
                label: "Revenue (index)",
                data: [100, 118, 130, 145],
                borderColor: "#38bdf8",
                backgroundColor: "rgba(56, 189, 248, 0.18)",
                tension: 0.35,
                fill: true,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: {
                ticks: { color: "#9ca3af" },
                grid: { display: false },
            },
            y: {
                ticks: { color: "#9ca3af" },
                grid: {
                    color: "rgba(148, 163, 184, 0.25)",
                },
            },
        },
    },
});
