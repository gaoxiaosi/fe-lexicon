<script lang="ts">
  import List from './lib/List.svelte';
  import Search from './lib/Search.svelte'

  interface DataList{
    module: string;
    list: string[];
  }
  
  import allData from '../data/all.json'
  let dataList : DataList[] = allData as DataList[];

  const search = (evt: any) => {
    const searchVal = evt.detail;
    dataList = allData.map(item => {
      return {
        module: item.module,
        list: item.list.filter(item2 => item2.includes(searchVal))
      }
    })
  }
</script>

<main>
  <h1 class="text-center text-[30px] font-bold my-[24px] text-sky-500 animate-spin-custom">前端词库</h1>
  <Search on:search={search}/>
  {#each dataList as { module, list }}
    <List { module } { list }/>
  {/each}
</main>