<script>
    export let id, text, completed;
</script>

<style>
  .item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #ffffff;
  }

  .item:focus-within {
    background: rgba(255, 255, 255, 0.8);
  }

  .item.complete {
    background: #dddddd;
  }

  .item.complete .text-input {
    color: #666666;
    text-decoration: line-through;
  }

  .text-input {
    flex-grow: 1;
    background: none;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1em;
  }

  .complete-checkbox {
    margin-left: 15px;
  }
</style>

<input class="text-input" type="text" bind:value={text} readonly={completed}>
<input class="completed-checkbox" type="checkbox" bind:checked={completed}>