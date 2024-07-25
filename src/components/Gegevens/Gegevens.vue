<template>
    <h2>Gegevens</h2>
    <div class="form-group">
        <h3>Reden van aanmelding</h3>
        <div class="form-input my-4">
            <label id="aanmeldreden-label" class="input__title">
                Wat is de reden van uw aanvraag?
            </label>
            <div class="input__group">
                <select class="form-control" v-model="redenAanvraag">
                    <option disabled value="">
                        Geen betaaltermijn geselecteerd
                    </option>
                    <option>
                        Nieuwe werkgever met collectiviteit bij Zilveren Kruis
                    </option>
                    <option selected>
                        Overstappen per 1-1-2023 naar Zilveren Kruis
                    </option>
                </select>
            </div>
        </div>
    </div>
    <div class="form-group">
        <h3>Persoonlijke gegevens</h3>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Naam</label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="naam"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Tussenvoegsels </label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="tussenvoegsels"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Achternaam</label>
                <input
                    class="input__field form-control"
                    type="text"
                    v-model="achternaam"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title">Geslacht</label>
                <div class="form-row">
                    <div class="radio custom-radio radio__option">
                        <input
                            id="man"
                            class="radio__input custom-control-input"
                            type="radio"
                            v-model="geslacht"
                            :value="man"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="man"
                        >
                            Man
                        </label>
                    </div>
                    <div class="radio custom-radio radio__option">
                        <input
                            class="radio__input custom-control-input"
                            id="vrouw"
                            type="radio"
                            v-model="geslacht"
                            :value="vrouw"
                        />
                        <label
                            class="radio__label custom-control-label"
                            for="vrouw"
                        >
                            Vrouw
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Geboortedatum </label>
                <input
                    class="input__field form-control"
                    type="date"
                    v-model="geboortedatum"
                />
            </div>
        </div>
        <div class="form-input my-4">
            <div class="input__group">
                <label class="input__title"> Burgerservicenummer </label>
                <input
                    class="input__field form-control bsn"
                    :class="{ 'is-invalid': errors.bsn }"
                    type="text"
                    v-model="bsn"
                    @blur="validateBSN"
                />
            </div>
            <div
                class="input__feedback invalid-feedback mt-1"
                aria-live="polite"
                v-if="errors.bsn"
            >
                <span class="bsn-error">{{ errors.bsn }}</span>
            </div>
        </div>
        <button class="btn btn-cta-02" @click="goToVerzekering">
            Ga verder naar verzekering
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useAanmeldenFormStore } from '../../stores/aanmeldenForm';

export default {
    setup() {
        const aanmeldenFormStore = useAanmeldenFormStore();
        const redenAanvraag = ref(
            aanmeldenFormStore.gegevens.redenAanvraag || ''
        );
        const naam = ref(aanmeldenFormStore.gegevens.naam || '');
        const tussenvoegsels = ref(
            aanmeldenFormStore.gegevens.tussenvoegsels || ''
        );
        const achternaam = ref(aanmeldenFormStore.gegevens.achternaam || '');
        const geslacht = ref(aanmeldenFormStore.gegevens.geslacht || '');
        const geboortedatum = ref(
            aanmeldenFormStore.gegevens.geboortedatum || ''
        );
        const bsn = ref(aanmeldenFormStore.gegevens.bsn || '');
        const errors = ref({});

        const goToVerzekering = () => {
            if (!errors.value.bsn) {
                if (
                    redenAanvraag.value &&
                    naam.value &&
                    tussenvoegsels.value &&
                    achternaam.value &&
                    geslacht.value &&
                    geboortedatum.value &&
                    bsn.value
                ) {
                    aanmeldenFormStore.updateGegevens({
                        redenAanvraag: redenAanvraag.value,
                        naam: naam.value,
                        tussenvoegsels: tussenvoegsels.value,
                        achternaam: achternaam.value,
                        geslacht: geslacht.value,
                        geboortedatum: geboortedatum.value,
                        bsn: bsn.value
                    });

                    aanmeldenFormStore.goToNextStep();
                }
            }
        };

        return {
            aanmeldenFormStore,
            goToVerzekering,
            redenAanvraag,
            naam,
            tussenvoegsels,
            achternaam,
            geslacht,
            geboortedatum,
            bsn,
            errors
        };
    },
    data() {
        return {
            man: 'man',
            vrouw: 'vrouw'
        };
    },
    methods: {
        validateBSN() {
            const pattern = /^\d{9}$/;
            const isValid = pattern.test(this.bsn);

            if (!isValid) {
                this.errors.bsn =
                    'Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.';
            } else {
                if (this.errors.bsn) {
                    delete this.errors.bsn;
                }
            }
        }
    }
};
</script>
