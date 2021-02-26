<template>
    <div>
        <PhotoCapture v-model="imageBase64" />
    </div>
</template>

<script>
import 'vue-media-recorder/src/assets/scss/main.scss';
import {PhotoCapture} from 'vue-media-recorder';

export default {
    name: "Camera2",
    data(){
        return {
            imageBase64: null,
        }
    },
    components:{
        PhotoCapture
    }
}
</script>