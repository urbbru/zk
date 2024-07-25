import { it, describe, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Gegevens from './Gegevens.vue';

describe('BSN should be validated correctly', () => {
    it('Should render correctly', () => {
        const wrapper = mount(Gegevens);
        const bsnInput = wrapper.find('input.bsn');
        bsnInput.setValue('incorrect bsn');
        bsnInput.trigger('blur');

        expect(wrapper.find('span.bsn-error').text()).toEqual(
            'Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.'
        );
    });
});
