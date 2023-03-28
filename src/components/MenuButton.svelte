<script>
  import { isMenuOpen } from "../stores";
</script>

<button
  class="w-10 h-10 text-dark dark:text-light"
  on:click={() => isMenuOpen.update((open) => !open)}
>
  {#if $isMenuOpen}
    <slot name="open" />
  {:else}
    <slot name="closed" />
  {/if}
</button>
