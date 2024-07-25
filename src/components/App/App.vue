<template>
    <div id="app" class="main-placeholder">
        <ZKHeader />

        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>

                    <Gegevens />

                    <Verzekering />

                    <Controle />
                </div>

                <ZKSidebar />
            </div>
        </div>

        <ZKFooter />
    </div>
</template>

<script>
import ZKHeader from './ZKHeader.vue';
import ZKFooter from './ZKFooter.vue';
import ZKSidebar from './ZKSidebar.vue';
import Gegevens from './Gegevens.vue';
import Verzekering from './Verzekering.vue';
import Controle from './Controle.vue';

export default {
    components: {
        ZKHeader,
        ZKFooter,
        ZKSidebar,
        Gegevens,
        Verzekering,
        Controle
    }
};
</script>
