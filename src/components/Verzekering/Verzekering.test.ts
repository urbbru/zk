import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Verzekering from './Verzekering.vue';

describe('Verzekering.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(Verzekering);

        expect(wrapper.element).toMatchSnapshot();
    });
});
