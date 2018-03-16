let chuck = new Vue({
    // the element on the main page to be replaced with our vue app
    el: '#chuck',

    // The data that will bind to our template
    data: {
        appName: 'Chuck Facts',
        currentFact: '',
        searchResults: [],
        queryHistory: [],
        categories: [],
        selected: 'any',
        factUrl: '',
        searchQuery: '',
        searchUrl: '',
        isFetchingAFact: false,
        showSearch: false,
        showSelect: false
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

        searchFact: function() {
            this.isFetchingAFact = true
            this.showSearch = true
            this.showSelect = false
            let viewModel = this



            viewModel.searchUrl = 'https://api.chucknorris.io/jokes/search?query=' + viewModel.searchQuery


            axios.get(viewModel.searchUrl, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(function(response) {
                    viewModel.isFetchingAFact = false
                    viewModel.queryHistory.push(viewModel.searchQuery)
                    viewModel.searchResults = []

                    response.data.result.forEach((fact) => {
                        viewModel.searchResults.push(fact.value)
                    })
                })
                .catch(function(err) {
                    alert(err)
                })


        },

        getFact: function() {
            this.isFetchingAFact = true
            this.showSearch = false
            this.showSelect = true

            let viewModel = this

            if (viewModel.selected == 'any') viewModel.factUrl = 'https://api.chucknorris.io/jokes/random' // Assign url based on selected category
            else viewModel.factUrl = 'https://api.chucknorris.io/jokes/random?category=' + viewModel.selected

            axios.get(viewModel.factUrl, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                .then(function(response) {
                    viewModel.isFetchingAFact = false
                    viewModel.showSelect = true
                    viewModel.showSearch = false

                    viewModel.currentFact = response.data.value
                })
                .catch(function(err) {
                    alert(err)
                })
        }
    }
})