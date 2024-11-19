<script>  
  export let loading = false;  
  export let size = "40px";  
  export let color = "#000"; // Valor por defecto, si no se recibe uno  
</script>  

{#if loading}  
  <div class="spinner" style="border-top-color: {color}; width: {size}; height: {size};"></div>  
{/if}  

<style>  
  .spinner {  
      border: 4px solid transparent; /* Borde transparente */  
      border-top-color: var(--spinner-color, #6a1b9a); /* Color personalizado para el borde superior */  
      border-radius: 50%;  
      animation: spin 0.8s linear infinite; /* Animación de giro */  
  }  

  @keyframes spin {  
      from {  
          transform: rotate(0deg); /* Comienza en 0 grados */  
      }  
      to {  
          transform: rotate(360deg); /* Termina en 360 grados */  
      }  
  }  
</style>