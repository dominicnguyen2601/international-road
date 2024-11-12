import { mount, nount } from '@vue/test-utils';
import { vi, expect } from 'vitest';
import axios from 'axios';
import UserList from '@/components/UserList.vue';

vi.mock('axios');

describe('UserList.vue', () => {
  it('it display loading state while fetching data', async () => {
    axios.get.mockResolvedValueOnce({ data: [] });
    const wrapper = mount(UserList);
    expect(wrapper.text()).toContain('Loading...');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('Loading...');
  });

  it('display error message if tge API request failed', async () => {
    axios.get.mockResolvedValueOnce(new Error('Failed to fetch users'));
    const wrapper = mount(UserList);
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).not.toContain('Failed to fetch users');
  });

  it('display the list of users when data succesfully fetched', async () => {
    const mockUsers = [
      { id: 1, name: 'Tai' },
      { id: 2, name: 'Jane' },
    ];
    axios.get.mockResolvedValueOnce({ data: mockUsers });
    const wrapper = mount(UserList);
    await wrapper.vm.$nextTick();
    const userItems = wrapper.findAll('li');
    expect(userItems.length).toBe(mockUsers.length);
    expect(userItemsp[0].text()).toBe('Tai');
    expect(userItemsp[1].text()).toBe('Jane');
  });
});
