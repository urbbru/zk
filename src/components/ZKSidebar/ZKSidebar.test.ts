import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ZKSidebar from './ZKSidebar.vue';

describe('ZKSidebar.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(ZKSidebar);

        expect(wrapper.element).toMatchSnapshot();
    });
});
