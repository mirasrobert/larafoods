import {ref} from 'vue'

export default function useProducts() {
    const products = ref([]);
    const product = ref(null)
    const status = ref(0);
    const isLoading = ref(true);

    const getProducts = async () => {
        isLoading.value = true;
        try {
            const response = await axios.get('/api/products');
            products.value = response.data;
        } catch (e) {
            status.value = e.response.status;
            console.error(e.response.data)
        }
        isLoading.value = false;
    }

    const getSingleProduct = async (id) => {
        isLoading.value = true;
        try {
            const response = await axios.get(`/api/products/${id}`);
            product.value = response.data;
        } catch (e) {
            status.value = e.response.status;
            console.error(e.response.data)
        }
        isLoading.value = false;

    }

    const storeProduct = async (formData, router) => {
        try {
            const response = await axios.post('/api/products/', formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            });
            product.value = response.data;
            router.push({name: 'product', params: {id: product.value.id}})
        } catch (e) {
            console.error(e.response.data)
        }
    }

    const updateProduct = async (id, formData) => {
        const response = await axios.put(`/api/products/${id}`, formData);
        product.value = response.data
    }

    const destroyProduct = async (id) => {
        const response = await axios.delete(`/api/products/${id}`);
        product.value = response.data
    }

    return {
        products, product, getProducts, getSingleProduct, storeProduct, updateProduct, destroyProduct, isLoading, status
    }
}
