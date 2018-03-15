let chuck = new Vue({
    // the element on the main page to be replaced with our vue app
    el: '#chuck',

    // The data that will bind to our template
    data: {
        appName: 'Chuck Jokes',
        currentJoke: '',
        previousJokes: [],
        categories: [],
        selected: 'any',
        isFetchingAJoke: false
    },
    created: function() {
        let self = this
        axios.get('https://api.chucknorris.io/jokes/categories', { // Get the categories
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response) {
                self.categories = response.data // Assign categories array with the response array
            })
            .catch(function(err) {
                alert(err)
            })
    },

    // Methods that may be called on our vue object
    methods: {

        // Fetch a joke from icanhazdadjoke.com
        getJoke: function() {

            this.isFetchingAJoke = true
                // We need to be able to reference our vue object (model) from 
                // within the .get and .then functions below.  Since 'this' will
                // change with each function call, we store a reference to the 
                // current 'this' here
            let viewModel = this


            axios.get('https://api.chucknorris.io/jokes/random', {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(function(response) {

                    viewModel.isFetchingAJoke = false
                    console.log(response)

                    // Add the current joke to the previous jokes array
                    if (viewModel.currentJoke)
                        viewModel.previousJokes.push(viewModel.currentJoke)

                    // Assign the new joke to the 'currentJoke' property
                    viewModel.currentJoke = response.data.value
                })
                .catch(function(err) {
                    alert(err)
                })
        }
    }
})