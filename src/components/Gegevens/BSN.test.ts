import { it, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Gegevens from './Gegevens.vue';

describe('BSN should be validated correctly', () => {
    it('Should show error message if incorrect BSN', () => {
        const wrapper = mount(Gegevens);
        const bsnInput = wrapper.find('input.bsn');
        bsnInput.setValue('incorrect bsn');
        bsnInput.trigger('blur');

        expect(wrapper.find('span').text()).toContain(
            'Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.'
        );
    });

    it('Should not show error message if correct BSN', () => {
        const wrapper = mount(Gegevens);
        const bsnInput = wrapper.find('input.bsn');
        bsnInput.setValue('123456789');
        bsnInput.trigger('blur');

        expect(wrapper.find('span.bsn-error')).toBeNull();
    });
});
