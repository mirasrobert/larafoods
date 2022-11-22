<template>
    <div>
        <Carousel
            :autoplay="3000"
            :breapoints="breakpoints"
            :wrap-around="wrapAround"
        >
            <Slide v-for="(img, index) in images" :key="index">
                <div class="carousel__item">
                    <img
                        class="w-full h-full object-cover rounded-lg"
                        :src="img"
                        alt="img"
                    />
                </div>
            </Slide>

            <template #addons>
                <Navigation/>
            </template>
        </Carousel>
    </div>

    <div class="container">
        <div class="my-16">
            <h1 class="text-4xl font-bold text-center uppercase mb-6">The best pizza in town</h1>
            <p class="text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, enim exercitationem impedit itaque magnam nam, nemo numquam optio pariatur quam quis, repellendus totam. Dolorem ea fugiat nostrum repellendus rerum, tenetur.</p>
        </div>
        <pizza-list :products="products" />
    </div>

</template>

<script>
import {ref, onMounted} from 'vue'
import {Carousel, Slide, Navigation} from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import PizzaList from "../components/home/PizzaList";
import useProducts from "../composables/products";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


export default {
    name: "Home",
    components: {
        PizzaList,
        Carousel,
        Slide,
        Navigation,
        PulseLoader
    },
    setup() {
        const { products, getProducts } = useProducts()

        onMounted(getProducts);

        const wrapAround = true
        const breakpoints = {
            // 700px and up
            700: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            // 1024 and up
            1024: {
                itemsToShow: 2,
                snapAlign: "center",
            },
        };

        const images = ref([
            'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]);

        return {
            wrapAround,
            breakpoints,
            images,
            products
        }
    }
}
</script>

<style scoped>
button.carousel__prev,
button.carousel__next {
    display: none !important;
}

.carousel__item {
    max-height: calc(100vh - 52px);
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

}


.carousel__slide {
    /*padding: 10px;*/
}

.carousel__prev,
.carousel__next {
    background-color: #ccc;
    box-sizing: content-box;
    border: 5px solid white;
}

.pizza-img-wrapper {
    width: 100%;
    height: 300px;
}

</style>
