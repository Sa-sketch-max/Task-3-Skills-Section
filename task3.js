// JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth) {
                bar.style.width = targetWidth;
            }
        });
    }, 300);
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            contentSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${target}-section`) {
                    section.classList.add('active');
                }
            });
        });
    });
    
    // Slider functionality
    const sliderTrack = document.querySelector('.slider-track');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    const cards = document.querySelectorAll('.slider-card');
    
    let currentIndex = 0;
    const cardWidth = 300; // Card width + margin
    const visibleCards = Math.floor(sliderTrack.clientWidth / cardWidth);
    const maxIndex = cards.length - visibleCards;
    
    function updateSliderPosition() {
        sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - 1);
        updateSliderPosition();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(maxIndex, currentIndex + 1);
        updateSliderPosition();
    });
    
    // Handle window resize for responsive slider
    window.addEventListener('resize', () => {
        const newVisibleCards = Math.floor(sliderTrack.clientWidth / cardWidth);
        const newMaxIndex = cards.length - newVisibleCards;
        currentIndex = Math.min(currentIndex, newMaxIndex);
        updateSliderPosition();
    });
});
