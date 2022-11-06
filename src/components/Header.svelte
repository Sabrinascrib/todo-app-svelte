<script>
  import { items } from "../stores";
  $: itemCount = $items.length;
  $: completedItemCount = $items.filter((item) => item.complete).length;
</script>

<style>
    .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 20px;
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    background: rgba(0, 0, 0, 0.1);
  }

  span {
 font-size: 15px;
  }
</style>

<div class="header">
  <div>The To-Do List</div>
  <span> {completedItemCount}/{itemCount} </span>
</div>