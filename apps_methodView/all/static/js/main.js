
// Button will be disabled until we type anything inside the input field
const source = document.getElementById('autoComp');
const inputHandler = function (e) {
    if (e.target.value == '') {
      $('.btn').attr('disabled', true);
    } else {
      $('.btn').attr('disabled', false);
    }
  };
source.addEventListener('input', inputHandler);

new autoComp({
    data: {
        // Data src [Array, Function, Async] | (REQUIRED)
        src: suggestions,
    },
    selector: '#autoComp', // Input field selector              | (Optional)
    threshold: 1, // Min. Chars length to start Engine | (Optional)
    debounce: 50, // Post duration for engine to start | (Optional)
    searchEngine: 'strict', // Search Engine type/mode           | (Optional)
    resultsList: {
        // Rendered results list object      | (Optional)
        render: true,
        container: (source) => {
            source.setAttribute('id', 'food_list');
        },
        destination: document.querySelector('#autoComp'),
        position: 'afterend',
        element: 'ul',
        
    },
    maxResults: 10, // Max. number of rendered results | (Optional)
    highlight: true, // Highlight matching results      | (Optional)
    resultItem: {
        // Rendered result item            | (Optional)
        content: (data, source) => {
            source.innerHTML = data.match;
        },
        element: 'li',
    },
    noResults: () => {
        // Action script on noResults      | (Optional)
        const result = document.createElement('li');
        result.setAttribute('class', 'no_result');
        result.setAttribute('tabindex', '1');
        result.innerHTML = 'No Results';
        document.querySelector('#autoComplete_list').appendChild(result);
    },
    onSelection: (feedback) => {
        // Action script onSelection event | (Optional)
        document.getElementById('autoComp').value = feedback.selection.value;
    },
});



