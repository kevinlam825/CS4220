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
        factUrl: '',
        searchQuery: '',
        searchUrl: '',
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
                self.categories = response.data // Assign categories array with the response values
            })
            .catch(function(err) {
                alert(err)
            })
    },

    // Methods that may be called on our vue object
    methods: {
        // Fetch a joke from icanhazdadjoke.com

        searchJoke: function() {
            this.isFetchingAJoke = true
            let viewModel = this

            viewModel.searchUrl = 'https://api.chucknorris.io/jokes/search?query=' + viewModel.searchQuery
            console.log(viewModel.searchUrl)

            axios.get(viewModel.searchUrl, {
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


        },

        getJoke: function() {

            this.isFetchingAJoke = true
            let viewModel = this

            if (viewModel.selected == 'any') viewModel.factUrl = 'https://api.chucknorris.io/jokes/random' // Assign url based on selected category
            else viewModel.factUrl = 'https://api.chucknorris.io/jokes/random?category=' + viewModel.selected

            axios.get(viewModel.factUrl, {
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