document.addEventListener('DOMContentLoaded', function() {
    const bands = [
        'The Plot in You', 
        'The Devil Wears Prada', 
        'Pierce the Veil', 
        'Norma Jean', 
        'The Bled', 
        'Say Anything', 
        'The Midway State', 
        'We Came as Romans', 
        'Counterparts', 
        'Oh, Sleeper', 
        'A Skylit Drive', 
        'Anywhere But Here', 
        'An Old Dog'
    ];

    // Improved function to strip articles
    function stripArticles(name) {
        return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands array properly
    const sortedBands = bands.sort((a, b) => {
        const nameA = stripArticles(a).toLowerCase();
        const nameB = stripArticles(b).toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Get the ul element
    const bandList = document.getElementById('band');

    // Clear any existing content
    bandList.innerHTML = '';

    // Add each band as a list item
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});