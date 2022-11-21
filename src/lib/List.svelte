<script lang="ts">
  import { getRandomBgColor } from "../utils/common";

  export let module: string = '';
  export let list: string[] = [];

  const colors: string[] = getRandomBgColor(list.length);
</script>

{#if list.length}
  <h1 class="animate-bounce-custom text-[26px] text-center font-bold mb-[10px] text-white">{ module }</h1>
  <ul class="flex flex-wrap justify-center mb-[30px] space-x-[6px]">
    {#each list as item, index}
      <li class="{colors[index]} inline-block h-[32px] leading-[32px] mb-[6px] px-[10px] rounded-full text-[14px] text-white cursor-pointer animate-bounce-custom duration-300 hover:scale-150">
        {item}
      </li>
    {/each}
  </ul>
{/if}
