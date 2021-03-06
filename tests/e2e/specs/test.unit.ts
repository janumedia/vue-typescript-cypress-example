import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  const msg = "Vue Unit and E2E Test with Cypress";
  let wrapper;
  it(`Title should display '${msg}'`, () => {
    HelloWorld.component = HelloWorld.component || {};
    wrapper = shallowMount(HelloWorld, { propsData: { msg } });
    expect(wrapper.find("h1").text()).eq(msg);
  });
  it(`Title should be empty`, () => {
    HelloWorld.component = HelloWorld.component || {};
    wrapper = shallowMount(HelloWorld, {});
    expect(wrapper.find("h1").text()).to.be.empty;
  });
});