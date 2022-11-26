import {ref} from 'vue'

export default function useCart() {
    const cart = ref([]);
    const cartCount = ref(0);
    const status = ref(0);
    const isLoading = ref(true);

    const getCart = async () => {
        isLoading.value = true;
        try {
            const response = await axios.get('/api/cart');
            cart.value = response.data;
        } catch (e) {
            status.value = e.response.status;
            console.error(e.response.data)
        }
        isLoading.value = false;
    }

    const addToCart = async (formData, id) => {
        try {
            const response = await axios.post(`/api/cart/${id}`, formData);
            cart.value = response.data;
        } catch (e) {
            console.error(e.response.data)
        }
    }

    const getCartCount = async () => {
        try {
            const response = await axios.get(`/api/cart/count`);
            cartCount.value = response.data.count;
        } catch (e) {
            console.error(e.response.data)
        }
    }

    const deleteCart = async (id) => {
        try {
            await axios.delete(`/api/cart/${id}`);
            await getCartCount();
        } catch (e) {
            console.error(e.response.data)
        }
    }

    return {
        cart,
        status,
        isLoading,
        cartCount,
        getCart,
        addToCart,
        getCartCount,
        deleteCart
    }

}
