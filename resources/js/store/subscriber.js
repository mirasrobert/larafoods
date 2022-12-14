import store from './index.js'

// After commit this store.subscribe will run
store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'SET_TOKEN':
            if(mutation.payload) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`

                if (!localStorage.getItem('token')) {
                    localStorage.setItem('token', mutation.payload) // Put token on localStorage
                }

            } else {
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
            break;
    }
})
