<template>
    <div id="app" class="main-placeholder">
        <ZKHeader />

        <div class="container my-3">
            <div class="row">
                <div class="col-8">
                    <h1>Aanmelden</h1>

                    <div v-if="aanmeldenFormStore.currentStep === 0">
                        <Gegevens />
                    </div>
                    <div v-if="aanmeldenFormStore.currentStep === 1">
                        <Verzekering />
                    </div>
                    <div v-if="aanmeldenFormStore.currentStep === 2">
                        <Controle />
                    </div>
                </div>

                <ZKSidebar />
            </div>
        </div>

        <ZKFooter />
    </div>
</template>

<script>
import ZKHeader from '../ZKHeader/ZKHeader.vue';
import ZKFooter from '../ZKFooter/ZKFooter.vue';
import ZKSidebar from '../ZKSidebar/ZKSidebar.vue';
import Gegevens from '../Gegevens/Gegevens.vue';
import Verzekering from '../Verzekering/Verzekering.vue';
import Controle from '../Controle/Controle.vue';
import { useAanmeldenFormStore } from '../../stores/aanmeldenForm';

export default {
    components: {
        ZKHeader,
        ZKFooter,
        ZKSidebar,
        Gegevens,
        Verzekering,
        Controle
    },
    setup() {
        const aanmeldenFormStore = useAanmeldenFormStore();

        return { aanmeldenFormStore };
    }
};
</script>
