import {ref} from 'vue'

export default function useProducts() {
    const products = ref([]);
    const product = ref(null)

    const isLoading = ref(true);

    const getProducts = async () => {
        isLoading.vale = true;
        const response = await axios.get('/api/products');
        products.value = response.data
        isLoading.vale = false;
    }

    const getSingleProduct = async (id) => {
        isLoading.vale = true;
        const response = await axios.get(`/api/products/${id}`);
        product.value = response.data
        isLoading.vale = false;
    }

    const storeProduct = async (formData) => {
        const response = await axios.post('/api/products/', formData, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        });
        product.value = response.data
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
        products,
        product,
        getProducts,
        getSingleProduct,
        storeProduct,
        updateProduct,
        destroyProduct
    }
}
