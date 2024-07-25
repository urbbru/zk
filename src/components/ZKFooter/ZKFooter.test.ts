import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ZKFooter from './ZKFooter.vue';

describe('ZKFooter.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(ZKFooter);

        expect(wrapper.element).toMatchSnapshot();
    });
});
