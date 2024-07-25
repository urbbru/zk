import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Controle from './Controle.vue';

describe('Controle.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(Controle);

        expect(wrapper.element).toMatchSnapshot();
    });
});
