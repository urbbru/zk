import { defineStore } from 'pinia';
import { ref } from 'vue';

type Gegevens = {
    redenAanvraag: string;
    naam: string;
    tussenvoegsels: string;
    achternaam: string;
    geslacht: string;
    geboortedatum: string;
    bsn: string;
};

type Verzekering = {
    basisVerzekering:
        | 'Basis Budget'
        | 'Basis Zeker'
        | 'Basis Exclusief (Restitutie)';
    betaaltermijn: string;
    eigenRisico: string;
    aanvullendeVerzekering: string;
    tandartsverzekering: string;
};

export const useAanmeldenFormStore = defineStore('aanmeldenForm', () => {
    const gegevens = ref({});
    const verzekering = ref({});
    const currentStep = ref(0);

    function updateGegevens(newGegevens: Gegevens) {
        gegevens.value = newGegevens;
    }

    function updateVerzekering(newVerzekering: Verzekering) {
        verzekering.value = newVerzekering;
    }

    function goToNextStep() {
        if (currentStep.value < 2) {
            currentStep.value = currentStep.value + 1;
        }
    }

    function goToPreviousStep() {
        if (currentStep.value > 0) {
            currentStep.value = currentStep.value - 1;
        }
    }

    return {
        currentStep,
        gegevens,
        verzekering,
        updateGegevens,
        updateVerzekering,
        goToNextStep,
        goToPreviousStep
    };
});
