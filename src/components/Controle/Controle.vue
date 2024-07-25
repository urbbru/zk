<template>
    <h2 class="mt-5">Controleren</h2>
    <div class="form-group">
        <h3>Gekozen pakket</h3>
        <h4>
            {{ aanmeldenFormStore.gegevens.naam }} ({{
                aanmeldenFormStore.gegevens.geboortedatum
            }})
        </h4>
        <p>{{ aanmeldenFormStore.verzekering.basisVerzekering }}</p>
        <p>{{ aanmeldenFormStore.verzekering.eigenRisico }}</p>
        <p>{{ aanmeldenFormStore.verzekering.aanvullendeVerzekering }}</p>
    </div>
    <div class="form-group">
        <h3>Totaalpremie</h3>
    </div>
    <div class="form-group">
        <h3>Adres en contactgegevens</h3>
    </div>
    <button class="btn" @click="goToVerzekering">Terug naar gegevens</button>
</template>

<script>
import { useAanmeldenFormStore } from '../../stores/aanmeldenForm';

export default {
    setup() {
        const aanmeldenFormStore = useAanmeldenFormStore();

        function goToVerzekering() {
            aanmeldenFormStore.goToPreviousStep();
        }

        return {
            aanmeldenFormStore,
            goToVerzekering
        };
    }
};
</script>
