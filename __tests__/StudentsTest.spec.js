import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Students from '../src/components/Students.vue'

describe('The body is present', () => {
  test('The body is present', () => {
    const wrapper = mount(Students);
    const vm = wrapper.vm;
    const body = vm.$el.querySelector('body');
    expect(body).toBeTruthy();
  });
});
