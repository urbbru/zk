import { it, describe, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import ZKHeader from './ZKHeader.vue';

describe('ZKHeader.vue', () => {
    it('Should render correctly', () => {
        const wrapper = shallowMount(ZKHeader);

        expect(wrapper.element).toMatchSnapshot();
    });
});
