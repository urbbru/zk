import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Gegevens from './Gegevens.vue';

describe('Gegevens.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(Gegevens);

        expect(wrapper.element).toMatchSnapshot();
    });
});
