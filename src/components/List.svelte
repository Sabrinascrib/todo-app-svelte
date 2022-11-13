<script>
  import { onMount } from "svelte";
  import { items } from "../stores";
  import TodoApi from "../ToDoApi"
  import Item from "./Items.svelte";


  onMount(async () => {
    $items = await TodoApi.getAll();
  });
</script>

<style> 
  .list {
    padding: 15px;
  }

  .list-status {
    margin: 0;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>

<div class="list">

  {#each $items as item (item)}
   <Item {...item} />
  {:else}
    <p class="list-status">No Items Exist</p>
  {/each}
</div>
