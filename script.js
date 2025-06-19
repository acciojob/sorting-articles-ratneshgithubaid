//your JS code here. If required.
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

    // Function to strip articles for sorting
    function stripArticles(name) {
        return name.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands array
    const sortedBands = bands.sort((a, b) => {
        return stripArticles(a) > stripArticles(b) ? 1 : -1;
    });

    // Get the ul element
    const bandList = document.getElementById('band');

    // Add each band as a list item
    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});