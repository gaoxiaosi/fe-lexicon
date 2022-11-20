<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const emit = createEventDispatcher();

  let searchVal: string = '', isSearch: boolean = true;
  const search = () => {
    emit('search', searchVal);
  }
  const onChange = () => {
    isSearch && search()
  }
  const onCompositionStart = () => {
    isSearch = false;
  };
  const onCompositionEnd = () => {
    isSearch = true;
    search();
  };
</script>

<div class="text-center mb-10">
  <input
    type="text"
    class="inline-block w-2/3 h-[40px] outline-none rounded-full px-[20px] py-[5px] bg-[#CED0D1] focus:shadow-[0_0_16px_rgb(14,165,233)] animate-slide-custom"
    bind:value={searchVal}
    on:input={onChange}
    on:compositionend={onCompositionEnd}
    on:compositionstart={onCompositionStart}
  />
</div>
