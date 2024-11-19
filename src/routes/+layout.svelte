<!-- +layout.svelte -->
<script>  
    import { onMount } from 'svelte';  
    import Spinner from '$lib/componentes/Spinner.svelte';
  
    export let children;   
    let isLoading = true; 
  
    onMount(() => {  
        setTimeout(() => {  
            isLoading = false; 
        }, 500); 
    });  
  </script>  
  
  {#if isLoading}
    <div class="spinner-container">
      <Spinner loading={isLoading} size="60px" color="#6a1b9a" />  
    </div>
  {/if}
  
  {#if !isLoading}  
    {@render children()}  
  {/if}
  
  <style>
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: white; /* Color de fondo opcional */
      z-index: 9999; /* Para asegurar que esté en el frente */
    }
  </style>
  