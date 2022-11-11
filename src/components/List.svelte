<script>
  import { onMount } from "svelte";
  import { items } from "../stores";
  import TodoApi from "../ToDoApi"



  onMount(async () => {
    $items = await TodoApi.getAll();
  });
</script>
