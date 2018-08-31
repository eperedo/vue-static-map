import { shallowMount } from '@vue/test-utils';
import StaticMap from '@/components/static-map.vue';

describe('StaticMap.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(StaticMap, {
			propsData: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
